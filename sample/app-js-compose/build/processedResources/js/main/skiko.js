

// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module !== 'undefined' ? Module : {};

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
// {{PRE_JSES}}

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

// Attempt to auto-detect the environment
var ENVIRONMENT_IS_WEB = typeof window === 'object';
var ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
var ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)');
}

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

var nodeFS;
var nodePath;

if (ENVIRONMENT_IS_NODE) {
  if (!(typeof process === 'object' && typeof require === 'function')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require('path').dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }

// include: node_shell_read.js


read_ = function shell_read(filename, binary) {
  if (!nodeFS) nodeFS = require('fs');
  if (!nodePath) nodePath = require('path');
  filename = nodePath['normalize'](filename);
  return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
};

readBinary = function readBinary(filename) {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
};

readAsync = function readAsync(filename, onload, onerror) {
  if (!nodeFS) nodeFS = require('fs');
  if (!nodePath) nodePath = require('path');
  filename = nodePath['normalize'](filename);
  nodeFS['readFile'](filename, function(err, data) {
    if (err) onerror(err);
    else onload(data.buffer);
  });
};

// end include: node_shell_read.js
  if (process['argv'].length > 1) {
    thisProgram = process['argv'][1].replace(/\\/g, '/');
  }

  arguments_ = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  process['on']('unhandledRejection', abort);

  quit_ = function(status, toThrow) {
    if (keepRuntimeAlive()) {
      process['exitCode'] = status;
      throw toThrow;
    }
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };

} else
if (ENVIRONMENT_IS_SHELL) {

  if ((typeof process === 'object' && typeof require === 'function') || typeof window === 'object' || typeof importScripts === 'function') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    var data;
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  readAsync = function readAsync(f, onload, onerror) {
    setTimeout(function() { onload(readBinary(f)); }, 0);
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit === 'function') {
    quit_ = function(status) {
      quit(status);
    };
  }

  if (typeof print !== 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console === 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr !== 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document !== 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  if (!(typeof window === 'object' || typeof importScripts === 'function')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {

// include: web_or_worker_shell_read.js


  read_ = function(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = function(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = function(title) { document.title = title };
} else
{
  throw new Error('environment detection error');
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];
if (!Object.getOwnPropertyDescriptor(Module, 'arguments')) {
  Object.defineProperty(Module, 'arguments', {
    configurable: true,
    get: function() {
      abort('Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (!Object.getOwnPropertyDescriptor(Module, 'thisProgram')) {
  Object.defineProperty(Module, 'thisProgram', {
    configurable: true,
    get: function() {
      abort('Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (Module['quit']) quit_ = Module['quit'];
if (!Object.getOwnPropertyDescriptor(Module, 'quit')) {
  Object.defineProperty(Module, 'quit', {
    configurable: true,
    get: function() {
      abort('Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] === 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] === 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] === 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] === 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] === 'undefined', 'Module.read option was removed (modify read_ in JS)');
assert(typeof Module['readAsync'] === 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] === 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] === 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');
assert(typeof Module['TOTAL_MEMORY'] === 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');

if (!Object.getOwnPropertyDescriptor(Module, 'read')) {
  Object.defineProperty(Module, 'read', {
    configurable: true,
    get: function() {
      abort('Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (!Object.getOwnPropertyDescriptor(Module, 'readAsync')) {
  Object.defineProperty(Module, 'readAsync', {
    configurable: true,
    get: function() {
      abort('Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (!Object.getOwnPropertyDescriptor(Module, 'readBinary')) {
  Object.defineProperty(Module, 'readBinary', {
    configurable: true,
    get: function() {
      abort('Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (!Object.getOwnPropertyDescriptor(Module, 'setWindowTitle')) {
  Object.defineProperty(Module, 'setWindowTitle', {
    configurable: true,
    get: function() {
      abort('Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}
var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';


assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-s ENVIRONMENT` to enable.");




var STACK_ALIGN = 16;

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

// include: runtime_functions.js


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < wasmTable.length; i++) {
      var item = wasmTable.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    wasmTable.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    assert(typeof sig !== 'undefined', 'Missing signature argument to addFunction: ' + func);
    var wrapped = convertJsFunctionToWasm(func, sig);
    wasmTable.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {
  assert(typeof func !== 'undefined');

  return addFunctionWasm(func, sig);
}

// end include: runtime_functions.js
// include: runtime_debug.js


// end include: runtime_debug.js
var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
if (!Object.getOwnPropertyDescriptor(Module, 'wasmBinary')) {
  Object.defineProperty(Module, 'wasmBinary', {
    configurable: true,
    get: function() {
      abort('Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}
var noExitRuntime = Module['noExitRuntime'] || true;
if (!Object.getOwnPropertyDescriptor(Module, 'noExitRuntime')) {
  Object.defineProperty(Module, 'noExitRuntime', {
    configurable: true,
    get: function() {
      abort('Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}

// include: runtime_safe_heap.js


// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch (type) {
      case 'i1': HEAP8[((ptr)>>0)] = value; break;
      case 'i8': HEAP8[((ptr)>>0)] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)] = tempI64[0],HEAP32[(((ptr)+(4))>>2)] = tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch (type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

// end include: runtime_safe_heap.js
// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  assert(returnType !== 'array', 'Return type should not be "array".');
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);
  function onDone(ret) {
    if (stack !== 0) stackRestore(stack);
    return convertReturnValue(ret);
  }

  ret = onDone(ret);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;
  assert(typeof allocator === 'number', 'allocate no longer takes a type argument')
  assert(typeof slab !== 'number', 'allocate no longer takes a number as arg0')

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}

// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte 0x' + u0.toString(16) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      if (u >= 0x200000) warnOnce('Invalid Unicode code point 0x' + u.toString(16) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x1FFFFF).');
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}

// end include: runtime_strings.js
// include: runtime_strings_extra.js


// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var str = '';

    // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
    // will always evaluate to true. The loop is then terminated on the first null char.
    for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) break;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }

    return str;
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)] = codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)] = codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    HEAP8[((buffer++)>>0)] = str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)] = 0;
}

// end include: runtime_strings_extra.js
// Memory management

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;
if (Module['TOTAL_STACK']) assert(TOTAL_STACK === Module['TOTAL_STACK'], 'the stack size can no longer be determined at runtime')

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;
if (!Object.getOwnPropertyDescriptor(Module, 'INITIAL_MEMORY')) {
  Object.defineProperty(Module, 'INITIAL_MEMORY', {
    configurable: true,
    get: function() {
      abort('Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

assert(INITIAL_MEMORY >= TOTAL_STACK, 'INITIAL_MEMORY should be larger than TOTAL_STACK, was ' + INITIAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined,
       'JS engine does not provide full typed array support');

// If memory is defined in wasm, the user can't provide it.
assert(!Module['wasmMemory'], 'Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally');
assert(INITIAL_MEMORY == 16777216, 'Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically');

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  var max = _emscripten_stack_get_end();
  assert((max & 3) == 0);
  // The stack grows downwards
  HEAPU32[(max >> 2)+1] = 0x2135467;
  HEAPU32[(max >> 2)+2] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAP32[0] = 0x63736d65; /* 'emsc' */
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  var cookie1 = HEAPU32[(max >> 2)+1];
  var cookie2 = HEAPU32[(max >> 2)+2];
  if (cookie1 != 0x2135467 || cookie2 != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x' + cookie2.toString(16) + ' ' + cookie1.toString(16));
  }
  // Also test the global address 0 for integrity.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
}

// end include: runtime_stack_check.js
// include: runtime_assertions.js


// Endianness check
(function() {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian! (Run with -s SUPPORT_BIG_ENDIAN=1 to bypass)';
})();

// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;
var runtimeKeepaliveCounter = 0;

function keepRuntimeAlive() {
  return noExitRuntime || runtimeKeepaliveCounter > 0;
}

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  checkStackCookie();
  assert(!runtimeInitialized);
  runtimeInitialized = true;

  
if (!Module["noFSInit"] && !FS.init.initialized)
  FS.init();
FS.ignorePermissions = false;

TTY.init();
  callRuntimeCallbacks(__ATINIT__);
}

function exitRuntime() {
  checkStackCookie();
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err('dependency: ' + dep);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  {
    if (Module['onAbort']) {
      Module['onAbort'](what);
    }
  }

  what += '';
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  var output = 'abort(' + what + ') at ' + stackTrace();
  what = output;

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// include: URIUtils.js


// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  // Prefix of data URIs emitted by SINGLE_FILE and related options.
  return filename.startsWith(dataURIPrefix);
}

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return filename.startsWith('file://');
}

// end include: URIUtils.js
function createExportWrapper(name, fixedasm) {
  return function() {
    var displayName = name;
    var asm = fixedasm;
    if (!fixedasm) {
      asm = Module['asm'];
    }
    assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');
    assert(!runtimeExited, 'native function `' + displayName + '` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    if (!asm[name]) {
      assert(asm[name], 'exported native function `' + displayName + '` not found');
    }
    return asm[name].apply(null, arguments);
  };
}

var wasmBinaryFile;
  wasmBinaryFile = 'skiko.wasm';
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    if (readBinary) {
      return readBinary(file);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, try to to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch === 'function'
      && !isFileURI(wasmBinaryFile)
    ) {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(function () {
          return getBinary(wasmBinaryFile);
      });
    }
    else {
      if (readAsync) {
        // fetch is not available or url is file => try XHR (readAsync uses XHR internally)
        return new Promise(function(resolve, reject) {
          readAsync(wasmBinaryFile, function(response) { resolve(new Uint8Array(/** @type{!ArrayBuffer} */(response))) }, reject)
        });
      }
    }
  }

  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    assert(wasmMemory, "memory not found in wasm exports");
    // This assertion doesn't hold when emscripten is run in --post-link
    // mode.
    // TODO(sbc): Read INITIAL_MEMORY out of the wasm file in post-link mode.
    //assert(wasmMemory.buffer.byteLength === 16777216);
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];
    assert(wasmTable, "table not found in wasm exports");

    addOnInit(Module['asm']['__wasm_call_ctors']);

    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(result['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(function (instance) {
      return instance;
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      // Warn on some common problems.
      if (isFileURI(wasmBinaryFile)) {
        err('warning: Loading from a file URI (' + wasmBinaryFile + ') is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing');
      }
      abort(reason);
    });
  }

  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming === 'function' &&
        !isDataURI(wasmBinaryFile) &&
        // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
        !isFileURI(wasmBinaryFile) &&
        typeof fetch === 'function') {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
        var result = WebAssembly.instantiateStreaming(response, info);

        return result.then(
          receiveInstantiationResult,
          function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            return instantiateArrayBuffer(receiveInstantiationResult);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiationResult);
    }
  }

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  instantiateAsync();
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  1799156: function($0) {_releaseCallback($0)},  
 1799181: function($0) {return _callCallback($0).value ? 1 : 0;},  
 1799225: function($0) {return _callCallback($0).value;},  
 1799261: function($0) {return _callCallback($0).value;},  
 1799297: function($0) {return _callCallback($0).value;},  
 1799333: function($0) {_callCallback($0);}
};






  function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function demangle(func) {
      warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function handleException(e) {
      // Certain exception types we do not treat as errors since they are used for
      // internal control flow.
      // 1. ExitStatus, which is thrown by exit()
      // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
      //    that wish to return to JS event loop.
      if (e instanceof ExitStatus || e == 'unwind') {
        return EXITSTATUS;
      }
      // Anything else is an unexpected exception and we treat it as hard error.
      var toLog = e;
      if (e && typeof e === 'object' && e.stack) {
        toLog = [e, e.stack];
      }
      err('exception thrown: ' + toLog);
      quit_(1, e);
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  function _atexit(func, arg) {
    }
  function ___cxa_atexit(a0,a1
  ) {
  return _atexit(a0,a1);
  }

  function setErrNo(value) {
      HEAP32[((___errno_location())>>2)] = value;
      return value;
    }
  
  var PATH = {splitPath:function(filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function(parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function(path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function(path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function(path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function(path) {
        return PATH.splitPath(path)[3];
      },join:function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function(l, r) {
        return PATH.normalize(l + '/' + r);
      }};
  
  function getRandomDevice() {
      if (typeof crypto === 'object' && typeof crypto['getRandomValues'] === 'function') {
        // for modern web browsers
        var randomBuffer = new Uint8Array(1);
        return function() { crypto.getRandomValues(randomBuffer); return randomBuffer[0]; };
      } else
      if (ENVIRONMENT_IS_NODE) {
        // for nodejs with or without crypto support included
        try {
          var crypto_module = require('crypto');
          // nodejs has crypto support
          return function() { return crypto_module['randomBytes'](1)[0]; };
        } catch (e) {
          // nodejs doesn't have crypto support
        }
      }
      // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
      return function() { abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };"); };
    }
  
  var PATH_FS = {resolve:function() {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function(from, to) {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  var TTY = {ttys:[],init:function () {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function(stream) {
          // flush any pending line data
          stream.tty.ops.flush(stream.tty);
        },flush:function(stream) {
          stream.tty.ops.flush(stream.tty);
        },read:function(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              // we will read data by chunks of BUFSIZE
              var BUFSIZE = 256;
              var buf = Buffer.alloc(BUFSIZE);
              var bytesRead = 0;
  
              try {
                bytesRead = nodeFS.readSync(process.stdin.fd, buf, 0, BUFSIZE, null);
              } catch(e) {
                // Cross-platform differences: on Windows, reading EOF throws an exception, but on other OSes,
                // reading EOF returns 0. Uniformize behavior by treating the EOF exception to return 0.
                if (e.toString().includes('EOF')) bytesRead = 0;
                else throw e;
              }
  
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString('utf-8');
              } else {
                result = null;
              }
            } else
            if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }},default_tty1_ops:{put_char:function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }}};
  
  function zeroMemory(address, size) {
      HEAPU8.fill(0, address, address + size);
    }
  
  function alignMemory(size, alignment) {
      assert(alignment, "alignment argument is required");
      return Math.ceil(size / alignment) * alignment;
    }
  function mmapAlloc(size) {
      size = alignMemory(size, 65536);
      var ptr = _memalign(65536, size);
      if (!ptr) return 0;
      zeroMemory(ptr, size);
      return ptr;
    }
  var MEMFS = {ops_table:null,mount:function(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
          parent.timestamp = node.timestamp;
        }
        return node;
      },getFileDataAsTypedArray:function(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },expandFileStorage:function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
      },resizeFileStorage:function(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
        } else {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
        }
      },node_ops:{getattr:function(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },lookup:function(parent, name) {
          throw FS.genericErrors[44];
        },mknod:function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.parent.timestamp = Date.now()
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          new_dir.timestamp = old_node.parent.timestamp;
          old_node.parent = new_dir;
        },unlink:function(parent, name) {
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },rmdir:function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },readdir:function(node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }},stream_ops:{read:function(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },write:function(stream, buffer, offset, length, position, canOwn) {
          // The data buffer should be a typed array view
          assert(!(buffer instanceof ArrayBuffer));
          // If the buffer is located in main memory (HEAP), and if
          // memory can grow, we can't hold on to references of the
          // memory buffer, as they may get invalidated. That means we
          // need to do copy its contents.
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
  
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              assert(position === 0, 'canOwn must imply no weird position inside the file');
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) {
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },llseek:function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },allocate:function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },mmap:function(stream, address, length, position, prot, flags) {
          if (address !== 0) {
            // We don't currently support location hints for the address of the mapping
            throw new FS.ErrnoError(28);
          }
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },msync:function(stream, buffer, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (mmapFlags & 2) {
            // MAP_PRIVATE calls need not to be synced back to underlying fs
            return 0;
          }
  
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        }}};
  
  function asyncLoad(url, onload, onerror, noRunDep) {
      var dep = !noRunDep ? getUniqueRunDependency('al ' + url) : '';
      readAsync(url, function(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
        onload(new Uint8Array(arrayBuffer));
        if (dep) removeRunDependency(dep);
      }, function(event) {
        if (onerror) {
          onerror();
        } else {
          throw 'Loading data file "' + url + '" failed.';
        }
      });
      if (dep) addRunDependency(dep);
    }
  
  var ERRNO_MESSAGES = {0:"Success",1:"Arg list too long",2:"Permission denied",3:"Address already in use",4:"Address not available",5:"Address family not supported by protocol family",6:"No more processes",7:"Socket already connected",8:"Bad file number",9:"Trying to read unreadable message",10:"Mount device busy",11:"Operation canceled",12:"No children",13:"Connection aborted",14:"Connection refused",15:"Connection reset by peer",16:"File locking deadlock error",17:"Destination address required",18:"Math arg out of domain of func",19:"Quota exceeded",20:"File exists",21:"Bad address",22:"File too large",23:"Host is unreachable",24:"Identifier removed",25:"Illegal byte sequence",26:"Connection already in progress",27:"Interrupted system call",28:"Invalid argument",29:"I/O error",30:"Socket is already connected",31:"Is a directory",32:"Too many symbolic links",33:"Too many open files",34:"Too many links",35:"Message too long",36:"Multihop attempted",37:"File or path name too long",38:"Network interface is not configured",39:"Connection reset by network",40:"Network is unreachable",41:"Too many open files in system",42:"No buffer space available",43:"No such device",44:"No such file or directory",45:"Exec format error",46:"No record locks available",47:"The link has been severed",48:"Not enough core",49:"No message of desired type",50:"Protocol not available",51:"No space left on device",52:"Function not implemented",53:"Socket is not connected",54:"Not a directory",55:"Directory not empty",56:"State not recoverable",57:"Socket operation on non-socket",59:"Not a typewriter",60:"No such device or address",61:"Value too large for defined data type",62:"Previous owner died",63:"Not super-user",64:"Broken pipe",65:"Protocol error",66:"Unknown protocol",67:"Protocol wrong type for socket",68:"Math result not representable",69:"Read only file system",70:"Illegal seek",71:"No such process",72:"Stale file handle",73:"Connection timed out",74:"Text file busy",75:"Cross-device link",100:"Device not a stream",101:"Bad font file fmt",102:"Invalid slot",103:"Invalid request code",104:"No anode",105:"Block device required",106:"Channel number out of range",107:"Level 3 halted",108:"Level 3 reset",109:"Link number out of range",110:"Protocol driver not attached",111:"No CSI structure available",112:"Level 2 halted",113:"Invalid exchange",114:"Invalid request descriptor",115:"Exchange full",116:"No data (for no delay io)",117:"Timer expired",118:"Out of streams resources",119:"Machine is not on the network",120:"Package not installed",121:"The object is remote",122:"Advertise error",123:"Srmount error",124:"Communication error on send",125:"Cross mount point (not really error)",126:"Given log. name not unique",127:"f.d. invalid for this operation",128:"Remote address changed",129:"Can   access a needed shared lib",130:"Accessing a corrupted shared lib",131:".lib section in a.out corrupted",132:"Attempting to link in too many libs",133:"Attempting to exec a shared library",135:"Streams pipe error",136:"Too many users",137:"Socket type not supported",138:"Not supported",139:"Protocol family not supported",140:"Can't send after socket shutdown",141:"Too many references",142:"Host is down",148:"No medium (in tape drive)",156:"Level 2 not synchronized"};
  
  var ERRNO_CODES = {};
  var FS = {root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:function(path, opts) {
        path = PATH_FS.resolve(FS.cwd(), path);
        opts = opts || {};
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
  
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:function(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function(parentid, name) {
        var hash = 0;
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function(parent, name, mode, rdev) {
        assert(typeof parent === 'object')
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:function(node) {
        FS.hashRemoveNode(node);
      },isRoot:function(node) {
        return node === node.parent;
      },isMountpoint:function(node) {
        return !!node.mounted;
      },isFile:function(mode) {
        return (mode & 61440) === 32768;
      },isDir:function(mode) {
        return (mode & 61440) === 16384;
      },isLink:function(mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function(mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function(mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function(mode) {
        return (mode & 61440) === 4096;
      },isSocket:function(mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"r+":2,"w":577,"w+":578,"a":1089,"a+":1090},modeStringToFlags:function(str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function(flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.includes('r') && !(node.mode & 292)) {
          return 2;
        } else if (perms.includes('w') && !(node.mode & 146)) {
          return 2;
        } else if (perms.includes('x') && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },mayLookup:function(dir) {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },mayCreate:function(dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },mayOpen:function(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function(fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },getStream:function(fd) {
        return FS.streams[fd];
      },createStream:function(stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = /** @constructor */ function(){};
          FS.FSStream.prototype = {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          };
        }
        // clone it, so we can return an instance of FSStream
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function(fd) {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:function(stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function() {
          throw new FS.ErrnoError(70);
        }},major:function(dev) {
        return ((dev) >> 8);
      },minor:function(dev) {
        return ((dev) & 0xff);
      },makedev:function(ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function(dev) {
        return FS.devices[dev];
      },getMounts:function(mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:function(populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach(function (mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:function(type, opts, mountpoint) {
        if (typeof type === 'string') {
          // The filesystem was not included, and instead we have an error
          // message stored in the variable.
          throw type;
        }
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach(function (hash) {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.includes(current.mount)) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },lookup:function(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function(path, mode) {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function(path, mode) {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdirTree:function(path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },mkdev:function(path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existant directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        try {
          if (FS.trackingDelegate['willMovePath']) {
            FS.trackingDelegate['willMovePath'](old_path, new_path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
        try {
          if (FS.trackingDelegate['onMovePath']) FS.trackingDelegate['onMovePath'](old_path, new_path);
        } catch(e) {
          err("FS.trackingDelegate['onMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
      },rmdir:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },unlink:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readlink:function(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },stat:function(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },lstat:function(path) {
        return FS.stat(path, true);
      },chmod:function(path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function(path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function(fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },chown:function(path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function(fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function(fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },utime:function(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function(path, flags, mode, fd_start, fd_end) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            err("FS.trackingDelegate error on read file: " + path);
          }
        }
        try {
          if (FS.trackingDelegate['onOpenFile']) {
            var trackingFlags = 0;
            if ((flags & 2097155) !== 1) {
              trackingFlags |= FS.tracking.openFlags.READ;
            }
            if ((flags & 2097155) !== 0) {
              trackingFlags |= FS.tracking.openFlags.WRITE;
            }
            FS.trackingDelegate['onOpenFile'](path, trackingFlags);
          }
        } catch(e) {
          err("FS.trackingDelegate['onOpenFile']('"+path+"', flags) threw an exception: " + e.message);
        }
        return stream;
      },close:function(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },isClosed:function(stream) {
        return stream.fd === null;
      },llseek:function(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },read:function(stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function(stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        try {
          if (stream.path && FS.trackingDelegate['onWriteToFile']) FS.trackingDelegate['onWriteToFile'](stream.path);
        } catch(e) {
          err("FS.trackingDelegate['onWriteToFile']('"+stream.path+"') threw an exception: " + e.message);
        }
        return bytesWritten;
      },allocate:function(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function(stream, address, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
      },msync:function(stream, buffer, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },munmap:function(stream) {
        return 0;
      },ioctl:function(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function(path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:function(path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },cwd:function() {
        return FS.currentPath;
      },chdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },createDefaultDevices:function() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function(stream, buffer, offset, length, pos) { return length; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using err() rather than out()
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        var random_device = getRandomDevice();
        FS.createDevice('/dev', 'random', random_device);
        FS.createDevice('/dev', 'urandom', random_device);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createSpecialDirectories:function() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
        // name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        var proc_self = FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount: function() {
            var node = FS.createNode(proc_self, 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup: function(parent, name) {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(8);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: function() { return stream.path } }
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },createStandardStreams:function() {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 0);
        var stdout = FS.open('/dev/stdout', 1);
        var stderr = FS.open('/dev/stderr', 1);
        assert(stdin.fd === 0, 'invalid handle for stdin (' + stdin.fd + ')');
        assert(stdout.fd === 1, 'invalid handle for stdout (' + stdout.fd + ')');
        assert(stderr.fd === 2, 'invalid handle for stderr (' + stderr.fd + ')');
      },ensureErrnoError:function() {
        if (FS.ErrnoError) return;
        FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
          this.node = node;
          this.setErrno = /** @this{Object} */ function(errno) {
            this.errno = errno;
            for (var key in ERRNO_CODES) {
              if (ERRNO_CODES[key] === errno) {
                this.code = key;
                break;
              }
            }
          };
          this.setErrno(errno);
          this.message = ERRNO_MESSAGES[errno];
  
          // Try to get a maximally helpful stack trace. On Node.js, getting Error.stack
          // now ensures it shows what we want.
          if (this.stack) {
            // Define the stack property for Node.js 4, which otherwise errors on the next line.
            Object.defineProperty(this, "stack", { value: (new Error).stack, writable: true });
            this.stack = demangleAll(this.stack);
          }
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function() {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
        };
      },init:function(input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:function() {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        var fflush = Module['_fflush'];
        if (fflush) fflush(0);
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function(canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },findObject:function(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          return null;
        }
      },analyzePath:function(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createPath:function(parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function(parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function(parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },forceLoadFile:function(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
      },createLazyFile:function(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        /** @constructor */
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (function(from, to) {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
            } else {
              return intArrayFromString(xhr.responseText || '', true);
            }
          });
          var lazyArray = this;
          lazyArray.setDataGetter(function(chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: /** @this {FSNode} */ function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            FS.forceLoadFile(node);
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          FS.forceLoadFile(node);
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init(); // XXX perhaps this method should move onto Browser?
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function() {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function() {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          out('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },absolutePath:function() {
        abort('FS.absolutePath has been removed; use PATH_FS.resolve instead');
      },createFolder:function() {
        abort('FS.createFolder has been removed; use FS.mkdir instead');
      },createLink:function() {
        abort('FS.createLink has been removed; use FS.symlink instead');
      },joinPath:function() {
        abort('FS.joinPath has been removed; use PATH.join instead');
      },mmapAlloc:function() {
        abort('FS.mmapAlloc has been replaced by the top level function mmapAlloc');
      },standardizePath:function() {
        abort('FS.standardizePath has been removed; use PATH.normalize instead');
      }};
  var SYSCALLS = {mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(dirfd, path, allowEmpty) {
        if (path[0] === '/') {
          return path;
        }
        // relative path
        var dir;
        if (dirfd === -100) {
          dir = FS.cwd();
        } else {
          var dirstream = FS.getStream(dirfd);
          if (!dirstream) throw new FS.ErrnoError(8);
          dir = dirstream.path;
        }
        if (path.length == 0) {
          if (!allowEmpty) {
            throw new FS.ErrnoError(44);;
          }
          return dir;
        }
        return PATH.join2(dir, path);
      },doStat:function(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -54;
          }
          throw e;
        }
        HEAP32[((buf)>>2)] = stat.dev;
        HEAP32[(((buf)+(4))>>2)] = 0;
        HEAP32[(((buf)+(8))>>2)] = stat.ino;
        HEAP32[(((buf)+(12))>>2)] = stat.mode;
        HEAP32[(((buf)+(16))>>2)] = stat.nlink;
        HEAP32[(((buf)+(20))>>2)] = stat.uid;
        HEAP32[(((buf)+(24))>>2)] = stat.gid;
        HEAP32[(((buf)+(28))>>2)] = stat.rdev;
        HEAP32[(((buf)+(32))>>2)] = 0;
        (tempI64 = [stat.size>>>0,(tempDouble=stat.size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(40))>>2)] = tempI64[0],HEAP32[(((buf)+(44))>>2)] = tempI64[1]);
        HEAP32[(((buf)+(48))>>2)] = 4096;
        HEAP32[(((buf)+(52))>>2)] = stat.blocks;
        HEAP32[(((buf)+(56))>>2)] = (stat.atime.getTime() / 1000)|0;
        HEAP32[(((buf)+(60))>>2)] = 0;
        HEAP32[(((buf)+(64))>>2)] = (stat.mtime.getTime() / 1000)|0;
        HEAP32[(((buf)+(68))>>2)] = 0;
        HEAP32[(((buf)+(72))>>2)] = (stat.ctime.getTime() / 1000)|0;
        HEAP32[(((buf)+(76))>>2)] = 0;
        (tempI64 = [stat.ino>>>0,(tempDouble=stat.ino,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(80))>>2)] = tempI64[0],HEAP32[(((buf)+(84))>>2)] = tempI64[1]);
        return 0;
      },doMsync:function(addr, stream, len, flags, offset) {
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },doMkdir:function(path, mode) {
        // remove a trailing slash, if one - /a/b/ has basename of '', but
        // we want to create b in the context of this function
        path = PATH.normalize(path);
        if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
        FS.mkdir(path, mode, 0);
        return 0;
      },doMknod:function(path, mode, dev) {
        // we don't want this in the JS API as it uses mknod to create all nodes.
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default: return -28;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },doReadlink:function(path, buf, bufsize) {
        if (bufsize <= 0) return -28;
        var ret = FS.readlink(path);
  
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf+len];
        stringToUTF8(ret, buf, bufsize+1);
        // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
        // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
        HEAP8[buf+len] = endChar;
  
        return len;
      },doAccess:function(path, amode) {
        if (amode & ~7) {
          // need a valid mode
          return -28;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        if (!node) {
          return -44;
        }
        var perms = '';
        if (amode & 4) perms += 'r';
        if (amode & 2) perms += 'w';
        if (amode & 1) perms += 'x';
        if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
          return -2;
        }
        return 0;
      },doDup:function(path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest) FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },doReadv:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.read(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break; // nothing more to read
        }
        return ret;
      },doWritev:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.write(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      },varargs:undefined,get:function() {
        assert(SYSCALLS.varargs != undefined);
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },getStreamFromFD:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
        return stream;
      },get64:function(low, high) {
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      }};
  function ___sys_fcntl64(fd, cmd, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = SYSCALLS.get();
          if (arg < 0) {
            return -28;
          }
          var newStream;
          newStream = FS.open(stream.path, stream.flags, 0, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
        case 12:
        /* case 12: Currently in musl F_GETLK64 has same value as F_GETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */ {
          
          var arg = SYSCALLS.get();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)] = 2;
          return 0;
        }
        case 13:
        case 14:
        /* case 13: Currently in musl F_SETLK64 has same value as F_SETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
        /* case 14: Currently in musl F_SETLKW64 has same value as F_SETLKW, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
          
          
          return 0; // Pretend that the locking is successful.
        case 16:
        case 8:
          return -28; // These are for sockets. We don't have them fully implemented yet.
        case 9:
          // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fnctl() returns that, and we set errno ourselves.
          setErrNo(28);
          return -1;
        default: {
          return -28;
        }
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_fstat64(fd, buf) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      return SYSCALLS.doStat(FS.stat, stream.path, buf);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_getpid() {
      return 42;
    }

  function ___sys_ioctl(fd, op, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509:
        case 21505: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = SYSCALLS.get();
          HEAP32[((argp)>>2)] = 0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21531: {
          var argp = SYSCALLS.get();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        default: abort('bad ioctl syscall ' + op);
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function syscallMmap2(addr, len, prot, flags, fd, off) {
      off <<= 12; // undo pgoffset
      var ptr;
      var allocated = false;
  
      // addr argument must be page aligned if MAP_FIXED flag is set.
      if ((flags & 16) !== 0 && (addr % 65536) !== 0) {
        return -28;
      }
  
      // MAP_ANONYMOUS (aka MAP_ANON) isn't actually defined by POSIX spec,
      // but it is widely used way to allocate memory pages on Linux, BSD and Mac.
      // In this case fd argument is ignored.
      if ((flags & 32) !== 0) {
        ptr = mmapAlloc(len);
        if (!ptr) return -48;
        allocated = true;
      } else {
        var info = FS.getStream(fd);
        if (!info) return -8;
        var res = FS.mmap(info, addr, len, off, prot, flags);
        ptr = res.ptr;
        allocated = res.allocated;
      }
      SYSCALLS.mappings[ptr] = { malloc: ptr, len: len, allocated: allocated, fd: fd, prot: prot, flags: flags, offset: off };
      return ptr;
    }
  function ___sys_mmap2(addr, len, prot, flags, fd, off) {try {
  
      return syscallMmap2(addr, len, prot, flags, fd, off);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function syscallMunmap(addr, len) {
      // TODO: support unmmap'ing parts of allocations
      var info = SYSCALLS.mappings[addr];
      if (len === 0 || !info) {
        return -28;
      }
      if (len === info.len) {
        var stream = FS.getStream(info.fd);
        if (stream) {
          if (info.prot & 2) {
            SYSCALLS.doMsync(addr, stream, len, info.flags, info.offset);
          }
          FS.munmap(stream);
        }
        SYSCALLS.mappings[addr] = null;
        if (info.allocated) {
          _free(info.malloc);
        }
      }
      return 0;
    }
  function ___sys_munmap(addr, len) {try {
  
      return syscallMunmap(addr, len);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_open(path, flags, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var pathname = SYSCALLS.getStr(path);
      var mode = varargs ? SYSCALLS.get() : 0;
      var stream = FS.open(pathname, flags, mode);
      return stream.fd;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_stat64(path, buf) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.stat, path, buf);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) {}

  function getShiftFromSize(size) {
      switch (size) {
          case 1: return 0;
          case 2: return 1;
          case 4: return 2;
          case 8: return 3;
          default:
              throw new TypeError('Unknown type size: ' + size);
      }
    }
  
  function embind_init_charCodes() {
      var codes = new Array(256);
      for (var i = 0; i < 256; ++i) {
          codes[i] = String.fromCharCode(i);
      }
      embind_charCodes = codes;
    }
  var embind_charCodes = undefined;
  function readLatin1String(ptr) {
      var ret = "";
      var c = ptr;
      while (HEAPU8[c]) {
          ret += embind_charCodes[HEAPU8[c++]];
      }
      return ret;
    }
  
  var awaitingDependencies = {};
  
  var registeredTypes = {};
  
  var typeDependencies = {};
  
  var char_0 = 48;
  
  var char_9 = 57;
  function makeLegalFunctionName(name) {
      if (undefined === name) {
          return '_unknown';
      }
      name = name.replace(/[^a-zA-Z0-9_]/g, '$');
      var f = name.charCodeAt(0);
      if (f >= char_0 && f <= char_9) {
          return '_' + name;
      } else {
          return name;
      }
    }
  function createNamedFunction(name, body) {
      name = makeLegalFunctionName(name);
      /*jshint evil:true*/
      return new Function(
          "body",
          "return function " + name + "() {\n" +
          "    \"use strict\";" +
          "    return body.apply(this, arguments);\n" +
          "};\n"
      )(body);
    }
  function extendError(baseErrorType, errorName) {
      var errorClass = createNamedFunction(errorName, function(message) {
          this.name = errorName;
          this.message = message;
  
          var stack = (new Error(message)).stack;
          if (stack !== undefined) {
              this.stack = this.toString() + '\n' +
                  stack.replace(/^Error(:[^\n]*)?\n/, '');
          }
      });
      errorClass.prototype = Object.create(baseErrorType.prototype);
      errorClass.prototype.constructor = errorClass;
      errorClass.prototype.toString = function() {
          if (this.message === undefined) {
              return this.name;
          } else {
              return this.name + ': ' + this.message;
          }
      };
  
      return errorClass;
    }
  var BindingError = undefined;
  function throwBindingError(message) {
      throw new BindingError(message);
    }
  
  var InternalError = undefined;
  function throwInternalError(message) {
      throw new InternalError(message);
    }
  function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
      myTypes.forEach(function(type) {
          typeDependencies[type] = dependentTypes;
      });
  
      function onComplete(typeConverters) {
          var myTypeConverters = getTypeConverters(typeConverters);
          if (myTypeConverters.length !== myTypes.length) {
              throwInternalError('Mismatched type converter count');
          }
          for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
          }
      }
  
      var typeConverters = new Array(dependentTypes.length);
      var unregisteredTypes = [];
      var registered = 0;
      dependentTypes.forEach(function(dt, i) {
          if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
          } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                  awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(function() {
                  typeConverters[i] = registeredTypes[dt];
                  ++registered;
                  if (registered === unregisteredTypes.length) {
                      onComplete(typeConverters);
                  }
              });
          }
      });
      if (0 === unregisteredTypes.length) {
          onComplete(typeConverters);
      }
    }
  /** @param {Object=} options */
  function registerType(rawType, registeredInstance, options) {
      options = options || {};
  
      if (!('argPackAdvance' in registeredInstance)) {
          throw new TypeError('registerType registeredInstance requires argPackAdvance');
      }
  
      var name = registeredInstance.name;
      if (!rawType) {
          throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
      }
      if (registeredTypes.hasOwnProperty(rawType)) {
          if (options.ignoreDuplicateRegistrations) {
              return;
          } else {
              throwBindingError("Cannot register type '" + name + "' twice");
          }
      }
  
      registeredTypes[rawType] = registeredInstance;
      delete typeDependencies[rawType];
  
      if (awaitingDependencies.hasOwnProperty(rawType)) {
          var callbacks = awaitingDependencies[rawType];
          delete awaitingDependencies[rawType];
          callbacks.forEach(function(cb) {
              cb();
          });
      }
    }
  function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
      var shift = getShiftFromSize(size);
  
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(wt) {
              // ambiguous emscripten ABI: sometimes return values are
              // true or false, and sometimes integers (0 or 1)
              return !!wt;
          },
          'toWireType': function(destructors, o) {
              return o ? trueValue : falseValue;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': function(pointer) {
              // TODO: if heap is fixed (like in asm.js) this could be executed outside
              var heap;
              if (size === 1) {
                  heap = HEAP8;
              } else if (size === 2) {
                  heap = HEAP16;
              } else if (size === 4) {
                  heap = HEAP32;
              } else {
                  throw new TypeError("Unknown boolean type size: " + name);
              }
              return this['fromWireType'](heap[pointer >> shift]);
          },
          destructorFunction: null, // This type does not need a destructor
      });
    }

  var emval_free_list = [];
  
  var emval_handle_array = [{},{value:undefined},{value:null},{value:true},{value:false}];
  function __emval_decref(handle) {
      if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
          emval_handle_array[handle] = undefined;
          emval_free_list.push(handle);
      }
    }
  
  function count_emval_handles() {
      var count = 0;
      for (var i = 5; i < emval_handle_array.length; ++i) {
          if (emval_handle_array[i] !== undefined) {
              ++count;
          }
      }
      return count;
    }
  
  function get_first_emval() {
      for (var i = 5; i < emval_handle_array.length; ++i) {
          if (emval_handle_array[i] !== undefined) {
              return emval_handle_array[i];
          }
      }
      return null;
    }
  function init_emval() {
      Module['count_emval_handles'] = count_emval_handles;
      Module['get_first_emval'] = get_first_emval;
    }
  function __emval_register(value) {
      switch (value) {
        case undefined :{ return 1; }
        case null :{ return 2; }
        case true :{ return 3; }
        case false :{ return 4; }
        default:{
          var handle = emval_free_list.length ?
              emval_free_list.pop() :
              emval_handle_array.length;
  
          emval_handle_array[handle] = {refcount: 1, value: value};
          return handle;
          }
        }
    }
  
  function simpleReadValueFromPointer(pointer) {
      return this['fromWireType'](HEAPU32[pointer >> 2]);
    }
  function __embind_register_emval(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(handle) {
              var rv = emval_handle_array[handle].value;
              __emval_decref(handle);
              return rv;
          },
          'toWireType': function(destructors, value) {
              return __emval_register(value);
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: null, // This type does not need a destructor
  
          // TODO: do we need a deleteObject here?  write a test where
          // emval is passed into JS via an interface
      });
    }

  function _embind_repr(v) {
      if (v === null) {
          return 'null';
      }
      var t = typeof v;
      if (t === 'object' || t === 'array' || t === 'function') {
          return v.toString();
      } else {
          return '' + v;
      }
    }
  
  function floatReadValueFromPointer(name, shift) {
      switch (shift) {
          case 2: return function(pointer) {
              return this['fromWireType'](HEAPF32[pointer >> 2]);
          };
          case 3: return function(pointer) {
              return this['fromWireType'](HEAPF64[pointer >> 3]);
          };
          default:
              throw new TypeError("Unknown float type: " + name);
      }
    }
  function __embind_register_float(rawType, name, size) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              return value;
          },
          'toWireType': function(destructors, value) {
              // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
              // avoid the following if() and assume value is of proper type.
              if (typeof value !== "number" && typeof value !== "boolean") {
                  throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
              }
              return value;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': floatReadValueFromPointer(name, shift),
          destructorFunction: null, // This type does not need a destructor
      });
    }

  function integerReadValueFromPointer(name, shift, signed) {
      // integers are quite common, so generate very specialized functions
      switch (shift) {
          case 0: return signed ?
              function readS8FromPointer(pointer) { return HEAP8[pointer]; } :
              function readU8FromPointer(pointer) { return HEAPU8[pointer]; };
          case 1: return signed ?
              function readS16FromPointer(pointer) { return HEAP16[pointer >> 1]; } :
              function readU16FromPointer(pointer) { return HEAPU16[pointer >> 1]; };
          case 2: return signed ?
              function readS32FromPointer(pointer) { return HEAP32[pointer >> 2]; } :
              function readU32FromPointer(pointer) { return HEAPU32[pointer >> 2]; };
          default:
              throw new TypeError("Unknown integer type: " + name);
      }
    }
  function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
      name = readLatin1String(name);
      if (maxRange === -1) { // LLVM doesn't have signed and unsigned 32-bit types, so u32 literals come out as 'i32 -1'. Always treat those as max u32.
          maxRange = 4294967295;
      }
  
      var shift = getShiftFromSize(size);
  
      var fromWireType = function(value) {
          return value;
      };
  
      if (minRange === 0) {
          var bitshift = 32 - 8*size;
          fromWireType = function(value) {
              return (value << bitshift) >>> bitshift;
          };
      }
  
      var isUnsignedType = (name.includes('unsigned'));
  
      registerType(primitiveType, {
          name: name,
          'fromWireType': fromWireType,
          'toWireType': function(destructors, value) {
              // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
              // avoid the following two if()s and assume value is of proper type.
              if (typeof value !== "number" && typeof value !== "boolean") {
                  throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
              }
              if (value < minRange || value > maxRange) {
                  throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ', ' + maxRange + ']!');
              }
              return isUnsignedType ? (value >>> 0) : (value | 0);
          },
          'argPackAdvance': 8,
          'readValueFromPointer': integerReadValueFromPointer(name, shift, minRange !== 0),
          destructorFunction: null, // This type does not need a destructor
      });
    }

  function __embind_register_memory_view(rawType, dataTypeIndex, name) {
      var typeMapping = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
      ];
  
      var TA = typeMapping[dataTypeIndex];
  
      function decodeMemoryView(handle) {
          handle = handle >> 2;
          var heap = HEAPU32;
          var size = heap[handle]; // in elements
          var data = heap[handle + 1]; // byte offset into emscripten heap
          return new TA(buffer, data, size);
      }
  
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': decodeMemoryView,
          'argPackAdvance': 8,
          'readValueFromPointer': decodeMemoryView,
      }, {
          ignoreDuplicateRegistrations: true,
      });
    }

  function __embind_register_std_string(rawType, name) {
      name = readLatin1String(name);
      var stdStringIsUTF8
      //process only std::string bindings with UTF8 support, in contrast to e.g. std::basic_string<unsigned char>
      = (name === "std::string");
  
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              var length = HEAPU32[value >> 2];
  
              var str;
              if (stdStringIsUTF8) {
                  var decodeStartPtr = value + 4;
                  // Looping here to support possible embedded '0' bytes
                  for (var i = 0; i <= length; ++i) {
                      var currentBytePtr = value + 4 + i;
                      if (i == length || HEAPU8[currentBytePtr] == 0) {
                          var maxRead = currentBytePtr - decodeStartPtr;
                          var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                          if (str === undefined) {
                              str = stringSegment;
                          } else {
                              str += String.fromCharCode(0);
                              str += stringSegment;
                          }
                          decodeStartPtr = currentBytePtr + 1;
                      }
                  }
              } else {
                  var a = new Array(length);
                  for (var i = 0; i < length; ++i) {
                      a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
                  }
                  str = a.join('');
              }
  
              _free(value);
  
              return str;
          },
          'toWireType': function(destructors, value) {
              if (value instanceof ArrayBuffer) {
                  value = new Uint8Array(value);
              }
  
              var getLength;
              var valueIsOfTypeString = (typeof value === 'string');
  
              if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
                  throwBindingError('Cannot pass non-string to std::string');
              }
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                  getLength = function() {return lengthBytesUTF8(value);};
              } else {
                  getLength = function() {return value.length;};
              }
  
              // assumes 4-byte alignment
              var length = getLength();
              var ptr = _malloc(4 + length + 1);
              HEAPU32[ptr >> 2] = length;
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                  stringToUTF8(value, ptr + 4, length + 1);
              } else {
                  if (valueIsOfTypeString) {
                      for (var i = 0; i < length; ++i) {
                          var charCode = value.charCodeAt(i);
                          if (charCode > 255) {
                              _free(ptr);
                              throwBindingError('String has UTF-16 code units that do not fit in 8 bits');
                          }
                          HEAPU8[ptr + 4 + i] = charCode;
                      }
                  } else {
                      for (var i = 0; i < length; ++i) {
                          HEAPU8[ptr + 4 + i] = value[i];
                      }
                  }
              }
  
              if (destructors !== null) {
                  destructors.push(_free, ptr);
              }
              return ptr;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: function(ptr) { _free(ptr); },
      });
    }

  function __embind_register_std_wstring(rawType, charSize, name) {
      name = readLatin1String(name);
      var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
      if (charSize === 2) {
          decodeString = UTF16ToString;
          encodeString = stringToUTF16;
          lengthBytesUTF = lengthBytesUTF16;
          getHeap = function() { return HEAPU16; };
          shift = 1;
      } else if (charSize === 4) {
          decodeString = UTF32ToString;
          encodeString = stringToUTF32;
          lengthBytesUTF = lengthBytesUTF32;
          getHeap = function() { return HEAPU32; };
          shift = 2;
      }
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              // Code mostly taken from _embind_register_std_string fromWireType
              var length = HEAPU32[value >> 2];
              var HEAP = getHeap();
              var str;
  
              var decodeStartPtr = value + 4;
              // Looping here to support possible embedded '0' bytes
              for (var i = 0; i <= length; ++i) {
                  var currentBytePtr = value + 4 + i * charSize;
                  if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                      var maxReadBytes = currentBytePtr - decodeStartPtr;
                      var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
                      if (str === undefined) {
                          str = stringSegment;
                      } else {
                          str += String.fromCharCode(0);
                          str += stringSegment;
                      }
                      decodeStartPtr = currentBytePtr + charSize;
                  }
              }
  
              _free(value);
  
              return str;
          },
          'toWireType': function(destructors, value) {
              if (!(typeof value === 'string')) {
                  throwBindingError('Cannot pass non-string to C++ string type ' + name);
              }
  
              // assumes 4-byte alignment
              var length = lengthBytesUTF(value);
              var ptr = _malloc(4 + length + charSize);
              HEAPU32[ptr >> 2] = length >> shift;
  
              encodeString(value, ptr + 4, length + charSize);
  
              if (destructors !== null) {
                  destructors.push(_free, ptr);
              }
              return ptr;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: function(ptr) { _free(ptr); },
      });
    }

  function __embind_register_void(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
          isVoid: true, // void return values can be optimized out sometimes
          name: name,
          'argPackAdvance': 0,
          'fromWireType': function() {
              return undefined;
          },
          'toWireType': function(destructors, o) {
              // TODO: assert if anything else is given?
              return undefined;
          },
      });
    }

  function __emscripten_throw_longjmp() { throw 'longjmp'; }

  function _abort() {
      abort();
    }

  var _emscripten_get_now;if (ENVIRONMENT_IS_NODE) {
    _emscripten_get_now = function() {
      var t = process['hrtime']();
      return t[0] * 1e3 + t[1] / 1e6;
    };
  } else _emscripten_get_now = function() { return performance.now(); }
  ;
  
  var _emscripten_get_now_is_monotonic = true;;
  function _clock_gettime(clk_id, tp) {
      // int clock_gettime(clockid_t clk_id, struct timespec *tp);
      var now;
      if (clk_id === 0) {
        now = Date.now();
      } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
        now = _emscripten_get_now();
      } else {
        setErrNo(28);
        return -1;
      }
      HEAP32[((tp)>>2)] = (now/1000)|0; // seconds
      HEAP32[(((tp)+(4))>>2)] = ((now % 1000)*1000*1000)|0; // nanoseconds
      return 0;
    }

  var readAsmConstArgsArray = [];
  function readAsmConstArgs(sigPtr, buf) {
      // Nobody should have mutated _readAsmConstArgsArray underneath us to be something else than an array.
      assert(Array.isArray(readAsmConstArgsArray));
      // The input buffer is allocated on the stack, so it must be stack-aligned.
      assert(buf % 16 == 0);
      readAsmConstArgsArray.length = 0;
      var ch;
      // Most arguments are i32s, so shift the buffer pointer so it is a plain
      // index into HEAP32.
      buf >>= 2;
      while (ch = HEAPU8[sigPtr++]) {
        assert(ch === 100/*'d'*/ || ch === 102/*'f'*/ || ch === 105 /*'i'*/);
        // A double takes two 32-bit slots, and must also be aligned - the backend
        // will emit padding to avoid that.
        var double = ch < 105;
        if (double && (buf & 1)) buf++;
        readAsmConstArgsArray.push(double ? HEAPF64[buf++ >> 1] : HEAP32[buf]);
        ++buf;
      }
      return readAsmConstArgsArray;
    }
  function _emscripten_asm_const_int(code, sigPtr, argbuf) {
      var args = readAsmConstArgs(sigPtr, argbuf);
      if (!ASM_CONSTS.hasOwnProperty(code)) abort('No EM_ASM constant found at address ' + code);
      return ASM_CONSTS[code].apply(null, args);
    }

  function __webgl_enable_ANGLE_instanced_arrays(ctx) {
      // Extension available in WebGL 1 from Firefox 26 and Google Chrome 30 onwards. Core feature in WebGL 2.
      var ext = ctx.getExtension('ANGLE_instanced_arrays');
      if (ext) {
        ctx['vertexAttribDivisor'] = function(index, divisor) { ext['vertexAttribDivisorANGLE'](index, divisor); };
        ctx['drawArraysInstanced'] = function(mode, first, count, primcount) { ext['drawArraysInstancedANGLE'](mode, first, count, primcount); };
        ctx['drawElementsInstanced'] = function(mode, count, type, indices, primcount) { ext['drawElementsInstancedANGLE'](mode, count, type, indices, primcount); };
        return 1;
      }
    }
  
  function __webgl_enable_OES_vertex_array_object(ctx) {
      // Extension available in WebGL 1 from Firefox 25 and WebKit 536.28/desktop Safari 6.0.3 onwards. Core feature in WebGL 2.
      var ext = ctx.getExtension('OES_vertex_array_object');
      if (ext) {
        ctx['createVertexArray'] = function() { return ext['createVertexArrayOES'](); };
        ctx['deleteVertexArray'] = function(vao) { ext['deleteVertexArrayOES'](vao); };
        ctx['bindVertexArray'] = function(vao) { ext['bindVertexArrayOES'](vao); };
        ctx['isVertexArray'] = function(vao) { return ext['isVertexArrayOES'](vao); };
        return 1;
      }
    }
  
  function __webgl_enable_WEBGL_draw_buffers(ctx) {
      // Extension available in WebGL 1 from Firefox 28 onwards. Core feature in WebGL 2.
      var ext = ctx.getExtension('WEBGL_draw_buffers');
      if (ext) {
        ctx['drawBuffers'] = function(n, bufs) { ext['drawBuffersWEBGL'](n, bufs); };
        return 1;
      }
    }
  
  function __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(ctx) {
      // Closure is expected to be allowed to minify the '.dibvbi' property, so not accessing it quoted.
      return !!(ctx.dibvbi = ctx.getExtension('WEBGL_draw_instanced_base_vertex_base_instance'));
    }
  
  function __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(ctx) {
      // Closure is expected to be allowed to minify the '.mdibvbi' property, so not accessing it quoted.
      return !!(ctx.mdibvbi = ctx.getExtension('WEBGL_multi_draw_instanced_base_vertex_base_instance'));
    }
  
  function __webgl_enable_WEBGL_multi_draw(ctx) {
      // Closure is expected to be allowed to minify the '.multiDrawWebgl' property, so not accessing it quoted.
      return !!(ctx.multiDrawWebgl = ctx.getExtension('WEBGL_multi_draw'));
    }
  var GL = {counter:1,buffers:[],programs:[],framebuffers:[],renderbuffers:[],textures:[],shaders:[],vaos:[],contexts:[],offscreenCanvases:{},queries:[],samplers:[],transformFeedbacks:[],syncs:[],stringCache:{},stringiCache:{},unpackAlignment:4,recordError:function recordError(errorCode) {
        if (!GL.lastError) {
          GL.lastError = errorCode;
        }
      },getNewId:function(table) {
        var ret = GL.counter++;
        for (var i = table.length; i < ret; i++) {
          table[i] = null;
        }
        return ret;
      },getSource:function(shader, count, string, length) {
        var source = '';
        for (var i = 0; i < count; ++i) {
          var len = length ? HEAP32[(((length)+(i*4))>>2)] : -1;
          source += UTF8ToString(HEAP32[(((string)+(i*4))>>2)], len < 0 ? undefined : len);
        }
        return source;
      },createContext:function(canvas, webGLContextAttributes) {
        // In proxied operation mode, rAF()/setTimeout() functions do not delimit frame boundaries, so can't have WebGL implementation
        // try to detect when it's ok to discard contents of the rendered backbuffer.
        if (webGLContextAttributes.renderViaOffscreenBackBuffer) webGLContextAttributes['preserveDrawingBuffer'] = true;
  
        // BUG: Workaround Safari WebGL issue: After successfully acquiring WebGL context on a canvas,
        // calling .getContext() will always return that context independent of which 'webgl' or 'webgl2'
        // context version was passed. See https://bugs.webkit.org/show_bug.cgi?id=222758 and
        // https://github.com/emscripten-core/emscripten/issues/13295.
        // TODO: Once the bug is fixed and shipped in Safari, adjust the Safari version field in above check.
        if (!canvas.getContextSafariWebGL2Fixed) {
          canvas.getContextSafariWebGL2Fixed = canvas.getContext;
          canvas.getContext = function(ver, attrs) {
            var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
            return ((ver == 'webgl') == (gl instanceof WebGLRenderingContext)) ? gl : null;
          }
        }
  
        var ctx = 
          (webGLContextAttributes.majorVersion > 1)
          ?
            canvas.getContext("webgl2", webGLContextAttributes)
          :
          (canvas.getContext("webgl", webGLContextAttributes)
            // https://caniuse.com/#feat=webgl
            );
  
        if (!ctx) return 0;
  
        var handle = GL.registerContext(ctx, webGLContextAttributes);
  
        return handle;
      },enableOffscreenFramebufferAttributes:function(webGLContextAttributes) {
        webGLContextAttributes.renderViaOffscreenBackBuffer = true;
        webGLContextAttributes.preserveDrawingBuffer = true;
      },createOffscreenFramebuffer:function(context) {
        var gl = context.GLctx;
  
        // Create FBO
        var fbo = gl.createFramebuffer();
        gl.bindFramebuffer(0x8D40 /*GL_FRAMEBUFFER*/, fbo);
        context.defaultFbo = fbo;
  
        context.defaultFboForbidBlitFramebuffer = false;
        if (gl.getContextAttributes().antialias) {
          context.defaultFboForbidBlitFramebuffer = true;
        }
        else {
          // The WebGL 2 blit path doesn't work in Firefox < 67 (except in fullscreen).
          // https://bugzilla.mozilla.org/show_bug.cgi?id=1523030
          var firefoxMatch = navigator.userAgent.toLowerCase().match(/firefox\/(\d\d)/);
          if (firefoxMatch != null) {
            var firefoxVersion = firefoxMatch[1];
            context.defaultFboForbidBlitFramebuffer = firefoxVersion < 67;
          }
        }
  
        // Create render targets to the FBO
        context.defaultColorTarget = gl.createTexture();
        context.defaultDepthTarget = gl.createRenderbuffer();
        GL.resizeOffscreenFramebuffer(context); // Size them up correctly (use the same mechanism when resizing on demand)
  
        gl.bindTexture(0xDE1 /*GL_TEXTURE_2D*/, context.defaultColorTarget);
        gl.texParameteri(0xDE1 /*GL_TEXTURE_2D*/, 0x2801 /*GL_TEXTURE_MIN_FILTER*/, 0x2600 /*GL_NEAREST*/);
        gl.texParameteri(0xDE1 /*GL_TEXTURE_2D*/, 0x2800 /*GL_TEXTURE_MAG_FILTER*/, 0x2600 /*GL_NEAREST*/);
        gl.texParameteri(0xDE1 /*GL_TEXTURE_2D*/, 0x2802 /*GL_TEXTURE_WRAP_S*/, 0x812F /*GL_CLAMP_TO_EDGE*/);
        gl.texParameteri(0xDE1 /*GL_TEXTURE_2D*/, 0x2803 /*GL_TEXTURE_WRAP_T*/, 0x812F /*GL_CLAMP_TO_EDGE*/);
        gl.texImage2D(0xDE1 /*GL_TEXTURE_2D*/, 0, 0x1908 /*GL_RGBA*/, gl.canvas.width, gl.canvas.height, 0, 0x1908 /*GL_RGBA*/, 0x1401 /*GL_UNSIGNED_BYTE*/, null);
        gl.framebufferTexture2D(0x8D40 /*GL_FRAMEBUFFER*/, 0x8CE0 /*GL_COLOR_ATTACHMENT0*/, 0xDE1 /*GL_TEXTURE_2D*/, context.defaultColorTarget, 0);
        gl.bindTexture(0xDE1 /*GL_TEXTURE_2D*/, null);
  
        // Create depth render target to the FBO
        var depthTarget = gl.createRenderbuffer();
        gl.bindRenderbuffer(0x8D41 /*GL_RENDERBUFFER*/, context.defaultDepthTarget);
        gl.renderbufferStorage(0x8D41 /*GL_RENDERBUFFER*/, 0x81A5 /*GL_DEPTH_COMPONENT16*/, gl.canvas.width, gl.canvas.height);
        gl.framebufferRenderbuffer(0x8D40 /*GL_FRAMEBUFFER*/, 0x8D00 /*GL_DEPTH_ATTACHMENT*/, 0x8D41 /*GL_RENDERBUFFER*/, context.defaultDepthTarget);
        gl.bindRenderbuffer(0x8D41 /*GL_RENDERBUFFER*/, null);
  
        // Create blitter
        var vertices = [
          -1, -1,
          -1,  1,
           1, -1,
           1,  1
        ];
        var vb = gl.createBuffer();
        gl.bindBuffer(0x8892 /*GL_ARRAY_BUFFER*/, vb);
        gl.bufferData(0x8892 /*GL_ARRAY_BUFFER*/, new Float32Array(vertices), 0x88E4 /*GL_STATIC_DRAW*/);
        gl.bindBuffer(0x8892 /*GL_ARRAY_BUFFER*/, null);
        context.blitVB = vb;
  
        var vsCode =
          'attribute vec2 pos;' +
          'varying lowp vec2 tex;' +
          'void main() { tex = pos * 0.5 + vec2(0.5,0.5); gl_Position = vec4(pos, 0.0, 1.0); }';
        var vs = gl.createShader(0x8B31 /*GL_VERTEX_SHADER*/);
        gl.shaderSource(vs, vsCode);
        gl.compileShader(vs);
  
        var fsCode =
          'varying lowp vec2 tex;' +
          'uniform sampler2D sampler;' +
          'void main() { gl_FragColor = texture2D(sampler, tex); }';
        var fs = gl.createShader(0x8B30 /*GL_FRAGMENT_SHADER*/);
        gl.shaderSource(fs, fsCode);
        gl.compileShader(fs);
  
        var blitProgram = gl.createProgram();
        gl.attachShader(blitProgram, vs);
        gl.attachShader(blitProgram, fs);
        gl.linkProgram(blitProgram);
        context.blitProgram = blitProgram;
        context.blitPosLoc = gl.getAttribLocation(blitProgram, "pos");
        gl.useProgram(blitProgram);
        gl.uniform1i(gl.getUniformLocation(blitProgram, "sampler"), 0);
        gl.useProgram(null);
  
        context.defaultVao = undefined;
        if (gl.createVertexArray) {
          context.defaultVao = gl.createVertexArray();
          gl.bindVertexArray(context.defaultVao);
          gl.enableVertexAttribArray(context.blitPosLoc);
          gl.bindVertexArray(null);
        }
      },resizeOffscreenFramebuffer:function(context) {
        var gl = context.GLctx;
  
        // Resize color buffer
        if (context.defaultColorTarget) {
          var prevTextureBinding = gl.getParameter(0x8069 /*GL_TEXTURE_BINDING_2D*/);
          gl.bindTexture(0xDE1 /*GL_TEXTURE_2D*/, context.defaultColorTarget);
          gl.texImage2D(0xDE1 /*GL_TEXTURE_2D*/, 0, 0x1908 /*GL_RGBA*/, gl.drawingBufferWidth, gl.drawingBufferHeight, 0, 0x1908 /*GL_RGBA*/, 0x1401 /*GL_UNSIGNED_BYTE*/, null);
          gl.bindTexture(0xDE1 /*GL_TEXTURE_2D*/, prevTextureBinding);
        }
  
        // Resize depth buffer
        if (context.defaultDepthTarget) {
          var prevRenderBufferBinding = gl.getParameter(0x8CA7 /*GL_RENDERBUFFER_BINDING*/);
          gl.bindRenderbuffer(0x8D41 /*GL_RENDERBUFFER*/, context.defaultDepthTarget);
          gl.renderbufferStorage(0x8D41 /*GL_RENDERBUFFER*/, 0x81A5 /*GL_DEPTH_COMPONENT16*/, gl.drawingBufferWidth, gl.drawingBufferHeight); // TODO: Read context creation parameters for what type of depth and stencil to use
          gl.bindRenderbuffer(0x8D41 /*GL_RENDERBUFFER*/, prevRenderBufferBinding);
        }
      },blitOffscreenFramebuffer:function(context) {
        var gl = context.GLctx;
  
        var prevScissorTest = gl.getParameter(0xC11 /*GL_SCISSOR_TEST*/);
        if (prevScissorTest) gl.disable(0xC11 /*GL_SCISSOR_TEST*/);
  
        var prevFbo = gl.getParameter(0x8CA6 /*GL_FRAMEBUFFER_BINDING*/);
  
        if (gl.blitFramebuffer && !context.defaultFboForbidBlitFramebuffer) {
          gl.bindFramebuffer(0x8CA8 /*GL_READ_FRAMEBUFFER*/, context.defaultFbo);
          gl.bindFramebuffer(0x8CA9 /*GL_DRAW_FRAMEBUFFER*/, null);
          gl.blitFramebuffer(0, 0, gl.canvas.width, gl.canvas.height,
                             0, 0, gl.canvas.width, gl.canvas.height,
                             0x4000 /*GL_COLOR_BUFFER_BIT*/, 0x2600/*GL_NEAREST*/);
        }
        else
        {
          gl.bindFramebuffer(0x8D40 /*GL_FRAMEBUFFER*/, null);
  
          var prevProgram = gl.getParameter(0x8B8D /*GL_CURRENT_PROGRAM*/);
          gl.useProgram(context.blitProgram);
  
          var prevVB = gl.getParameter(0x8894 /*GL_ARRAY_BUFFER_BINDING*/);
          gl.bindBuffer(0x8892 /*GL_ARRAY_BUFFER*/, context.blitVB);
  
          var prevActiveTexture = gl.getParameter(0x84E0 /*GL_ACTIVE_TEXTURE*/);
          gl.activeTexture(0x84C0 /*GL_TEXTURE0*/);
  
          var prevTextureBinding = gl.getParameter(0x8069 /*GL_TEXTURE_BINDING_2D*/);
          gl.bindTexture(0xDE1 /*GL_TEXTURE_2D*/, context.defaultColorTarget);
  
          var prevBlend = gl.getParameter(0xBE2 /*GL_BLEND*/);
          if (prevBlend) gl.disable(0xBE2 /*GL_BLEND*/);
  
          var prevCullFace = gl.getParameter(0xB44 /*GL_CULL_FACE*/);
          if (prevCullFace) gl.disable(0xB44 /*GL_CULL_FACE*/);
  
          var prevDepthTest = gl.getParameter(0xB71 /*GL_DEPTH_TEST*/);
          if (prevDepthTest) gl.disable(0xB71 /*GL_DEPTH_TEST*/);
  
          var prevStencilTest = gl.getParameter(0xB90 /*GL_STENCIL_TEST*/);
          if (prevStencilTest) gl.disable(0xB90 /*GL_STENCIL_TEST*/);
  
          function draw() {
            gl.vertexAttribPointer(context.blitPosLoc, 2, 0x1406 /*GL_FLOAT*/, false, 0, 0);
            gl.drawArrays(5/*GL_TRIANGLE_STRIP*/, 0, 4);
          }
  
          if (context.defaultVao) {
            // WebGL 2 or OES_vertex_array_object
            var prevVAO = gl.getParameter(0x85B5 /*GL_VERTEX_ARRAY_BINDING*/);
            gl.bindVertexArray(context.defaultVao);
            draw();
            gl.bindVertexArray(prevVAO);
          }
          else
          {
            var prevVertexAttribPointer = {
              buffer: gl.getVertexAttrib(context.blitPosLoc, 0x889F /*GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING*/),
              size: gl.getVertexAttrib(context.blitPosLoc, 0x8623 /*GL_VERTEX_ATTRIB_ARRAY_SIZE*/),
              stride: gl.getVertexAttrib(context.blitPosLoc, 0x8624 /*GL_VERTEX_ATTRIB_ARRAY_STRIDE*/),
              type: gl.getVertexAttrib(context.blitPosLoc, 0x8625 /*GL_VERTEX_ATTRIB_ARRAY_TYPE*/),
              normalized: gl.getVertexAttrib(context.blitPosLoc, 0x886A /*GL_VERTEX_ATTRIB_ARRAY_NORMALIZED*/),
              pointer: gl.getVertexAttribOffset(context.blitPosLoc, 0x8645 /*GL_VERTEX_ATTRIB_ARRAY_POINTER*/),
            };
            var maxVertexAttribs = gl.getParameter(0x8869 /*GL_MAX_VERTEX_ATTRIBS*/);
            var prevVertexAttribEnables = [];
            for (var i = 0; i < maxVertexAttribs; ++i) {
              var prevEnabled = gl.getVertexAttrib(i, 0x8622 /*GL_VERTEX_ATTRIB_ARRAY_ENABLED*/);
              var wantEnabled = i == context.blitPosLoc;
              if (prevEnabled && !wantEnabled) {
                gl.disableVertexAttribArray(i);
              }
              if (!prevEnabled && wantEnabled) {
                gl.enableVertexAttribArray(i);
              }
              prevVertexAttribEnables[i] = prevEnabled;
            }
  
            draw();
  
            for (var i = 0; i < maxVertexAttribs; ++i) {
              var prevEnabled = prevVertexAttribEnables[i];
              var nowEnabled = i == context.blitPosLoc;
              if (prevEnabled && !nowEnabled) {
                gl.enableVertexAttribArray(i);
              }
              if (!prevEnabled && nowEnabled) {
                gl.disableVertexAttribArray(i);
              }
            }
            gl.bindBuffer(0x8892 /*GL_ARRAY_BUFFER*/, prevVertexAttribPointer.buffer);
            gl.vertexAttribPointer(context.blitPosLoc,
                                   prevVertexAttribPointer.size,
                                   prevVertexAttribPointer.type,
                                   prevVertexAttribPointer.normalized,
                                   prevVertexAttribPointer.stride,
                                   prevVertexAttribPointer.offset);
          }
  
          if (prevStencilTest) gl.enable(0xB90 /*GL_STENCIL_TEST*/);
          if (prevDepthTest) gl.enable(0xB71 /*GL_DEPTH_TEST*/);
          if (prevCullFace) gl.enable(0xB44 /*GL_CULL_FACE*/);
          if (prevBlend) gl.enable(0xBE2 /*GL_BLEND*/);
  
          gl.bindTexture(0xDE1 /*GL_TEXTURE_2D*/, prevTextureBinding);
          gl.activeTexture(prevActiveTexture);
          gl.bindBuffer(0x8892 /*GL_ARRAY_BUFFER*/, prevVB);
          gl.useProgram(prevProgram);
        }
        gl.bindFramebuffer(0x8D40 /*GL_FRAMEBUFFER*/, prevFbo);
        if (prevScissorTest) gl.enable(0xC11 /*GL_SCISSOR_TEST*/);
      },registerContext:function(ctx, webGLContextAttributes) {
        // without pthreads a context is just an integer ID
        var handle = GL.getNewId(GL.contexts);
  
        var context = {
          handle: handle,
          attributes: webGLContextAttributes,
          version: webGLContextAttributes.majorVersion,
          GLctx: ctx
        };
  
        // Store the created context object so that we can access the context given a canvas without having to pass the parameters again.
        if (ctx.canvas) ctx.canvas.GLctxObject = context;
        GL.contexts[handle] = context;
        if (typeof webGLContextAttributes.enableExtensionsByDefault === 'undefined' || webGLContextAttributes.enableExtensionsByDefault) {
          GL.initExtensions(context);
        }
  
        if (webGLContextAttributes.renderViaOffscreenBackBuffer) GL.createOffscreenFramebuffer(context);
        return handle;
      },makeContextCurrent:function(contextHandle) {
  
        GL.currentContext = GL.contexts[contextHandle]; // Active Emscripten GL layer context object.
        Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx; // Active WebGL context object.
        return !(contextHandle && !GLctx);
      },getContext:function(contextHandle) {
        return GL.contexts[contextHandle];
      },deleteContext:function(contextHandle) {
        if (GL.currentContext === GL.contexts[contextHandle]) GL.currentContext = null;
        if (typeof JSEvents === 'object') JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas); // Release all JS event handlers on the DOM element that the GL context is associated with since the context is now deleted.
        if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas) GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined; // Make sure the canvas object no longer refers to the context object so there are no GC surprises.
        GL.contexts[contextHandle] = null;
      },initExtensions:function(context) {
        // If this function is called without a specific context object, init the extensions of the currently active context.
        if (!context) context = GL.currentContext;
  
        if (context.initExtensionsDone) return;
        context.initExtensionsDone = true;
  
        var GLctx = context.GLctx;
  
        // Detect the presence of a few extensions manually, this GL interop layer itself will need to know if they exist.
  
        // Extensions that are only available in WebGL 1 (the calls will be no-ops if called on a WebGL 2 context active)
        __webgl_enable_ANGLE_instanced_arrays(GLctx);
        __webgl_enable_OES_vertex_array_object(GLctx);
        __webgl_enable_WEBGL_draw_buffers(GLctx);
        // Extensions that are available from WebGL >= 2 (no-op if called on a WebGL 1 context active)
        __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
        __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
  
        // On WebGL 2, EXT_disjoint_timer_query is replaced with an alternative
        // that's based on core APIs, and exposes only the queryCounterEXT()
        // entrypoint.
        if (context.version >= 2) {
          GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query_webgl2");
        }
  
        // However, Firefox exposes the WebGL 1 version on WebGL 2 as well and
        // thus we look for the WebGL 1 version again if the WebGL 2 version
        // isn't present. https://bugzilla.mozilla.org/show_bug.cgi?id=1328882
        if (context.version < 2 || !GLctx.disjointTimerQueryExt)
        {
          GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query");
        }
  
        __webgl_enable_WEBGL_multi_draw(GLctx);
  
        // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
        var exts = GLctx.getSupportedExtensions() || [];
        exts.forEach(function(ext) {
          // WEBGL_lose_context, WEBGL_debug_renderer_info and WEBGL_debug_shaders are not enabled by default.
          if (!ext.includes('lose_context') && !ext.includes('debug')) {
            // Call .getExtension() to enable that extension permanently.
            GLctx.getExtension(ext);
          }
        });
      }};
  function _emscripten_glActiveTexture(x0) { GLctx['activeTexture'](x0) }

  function _emscripten_glAttachShader(program, shader) {
      GLctx.attachShader(GL.programs[program], GL.shaders[shader]);
    }

  function _emscripten_glBindAttribLocation(program, index, name) {
      GLctx.bindAttribLocation(GL.programs[program], index, UTF8ToString(name));
    }

  function _emscripten_glBindBuffer(target, buffer) {
  
      if (target == 0x88EB /*GL_PIXEL_PACK_BUFFER*/) {
        // In WebGL 2 glReadPixels entry point, we need to use a different WebGL 2 API function call when a buffer is bound to
        // GL_PIXEL_PACK_BUFFER_BINDING point, so must keep track whether that binding point is non-null to know what is
        // the proper API function to call.
        GLctx.currentPixelPackBufferBinding = buffer;
      } else if (target == 0x88EC /*GL_PIXEL_UNPACK_BUFFER*/) {
        // In WebGL 2 gl(Compressed)Tex(Sub)Image[23]D entry points, we need to
        // use a different WebGL 2 API function call when a buffer is bound to
        // GL_PIXEL_UNPACK_BUFFER_BINDING point, so must keep track whether that
        // binding point is non-null to know what is the proper API function to
        // call.
        GLctx.currentPixelUnpackBufferBinding = buffer;
      }
      GLctx.bindBuffer(target, GL.buffers[buffer]);
    }

  function _emscripten_glBindFramebuffer(target, framebuffer) {
  
      // defaultFbo may not be present if 'renderViaOffscreenBackBuffer' was not enabled during context creation time,
      // i.e. setting -s OFFSCREEN_FRAMEBUFFER=1 at compilation time does not yet mandate that offscreen back buffer
      // is being used, but that is ultimately decided at context creation time.
      GLctx.bindFramebuffer(target, framebuffer ? GL.framebuffers[framebuffer] : GL.currentContext.defaultFbo);
  
    }

  function _emscripten_glBindRenderbuffer(target, renderbuffer) {
      GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer]);
    }

  function _emscripten_glBindSampler(unit, sampler) {
      GLctx['bindSampler'](unit, GL.samplers[sampler]);
    }

  function _emscripten_glBindTexture(target, texture) {
      GLctx.bindTexture(target, GL.textures[texture]);
    }

  function _emscripten_glBindVertexArray(vao) {
      GLctx['bindVertexArray'](GL.vaos[vao]);
    }

  function _emscripten_glBindVertexArrayOES(vao) {
      GLctx['bindVertexArray'](GL.vaos[vao]);
    }

  function _emscripten_glBlendColor(x0, x1, x2, x3) { GLctx['blendColor'](x0, x1, x2, x3) }

  function _emscripten_glBlendEquation(x0) { GLctx['blendEquation'](x0) }

  function _emscripten_glBlendFunc(x0, x1) { GLctx['blendFunc'](x0, x1) }

  function _emscripten_glBlitFramebuffer(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) { GLctx['blitFramebuffer'](x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) }

  function _emscripten_glBufferData(target, size, data, usage) {
  
      if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        if (data) {
          GLctx.bufferData(target, HEAPU8, usage, data, size);
        } else {
          GLctx.bufferData(target, size, usage);
        }
      } else {
        // N.b. here first form specifies a heap subarray, second form an integer size, so the ?: code here is polymorphic. It is advised to avoid
        // randomly mixing both uses in calling code, to avoid any potential JS engine JIT issues.
        GLctx.bufferData(target, data ? HEAPU8.subarray(data, data+size) : size, usage);
      }
    }

  function _emscripten_glBufferSubData(target, offset, size, data) {
      if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        GLctx.bufferSubData(target, offset, HEAPU8, data, size);
        return;
      }
      GLctx.bufferSubData(target, offset, HEAPU8.subarray(data, data+size));
    }

  function _emscripten_glCheckFramebufferStatus(x0) { return GLctx['checkFramebufferStatus'](x0) }

  function _emscripten_glClear(x0) { GLctx['clear'](x0) }

  function _emscripten_glClearColor(x0, x1, x2, x3) { GLctx['clearColor'](x0, x1, x2, x3) }

  function _emscripten_glClearStencil(x0) { GLctx['clearStencil'](x0) }

  function convertI32PairToI53(lo, hi) {
      // This function should not be getting called with too large unsigned numbers
      // in high part (if hi >= 0x7FFFFFFFF, one should have been calling
      // convertU32PairToI53())
      assert(hi === (hi|0));
      return (lo >>> 0) + hi * 4294967296;
    }
  function _emscripten_glClientWaitSync(sync, flags, timeoutLo, timeoutHi) {
      // WebGL2 vs GLES3 differences: in GLES3, the timeout parameter is a uint64, where 0xFFFFFFFFFFFFFFFFULL means GL_TIMEOUT_IGNORED.
      // In JS, there's no 64-bit value types, so instead timeout is taken to be signed, and GL_TIMEOUT_IGNORED is given value -1.
      // Inherently the value accepted in the timeout is lossy, and can't take in arbitrary u64 bit pattern (but most likely doesn't matter)
      // See https://www.khronos.org/registry/webgl/specs/latest/2.0/#5.15
      return GLctx.clientWaitSync(GL.syncs[sync], flags, convertI32PairToI53(timeoutLo, timeoutHi));
    }

  function _emscripten_glColorMask(red, green, blue, alpha) {
      GLctx.colorMask(!!red, !!green, !!blue, !!alpha);
    }

  function _emscripten_glCompileShader(shader) {
      GLctx.compileShader(GL.shaders[shader]);
    }

  function _emscripten_glCompressedTexImage2D(target, level, internalFormat, width, height, border, imageSize, data) {
      if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx['compressedTexImage2D'](target, level, internalFormat, width, height, border, imageSize, data);
        } else {
          GLctx['compressedTexImage2D'](target, level, internalFormat, width, height, border, HEAPU8, data, imageSize);
        }
        return;
      }
      GLctx['compressedTexImage2D'](target, level, internalFormat, width, height, border, data ? HEAPU8.subarray((data), (data+imageSize)) : null);
    }

  function _emscripten_glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data) {
      if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx['compressedTexSubImage2D'](target, level, xoffset, yoffset, width, height, format, imageSize, data);
        } else {
          GLctx['compressedTexSubImage2D'](target, level, xoffset, yoffset, width, height, format, HEAPU8, data, imageSize);
        }
        return;
      }
      GLctx['compressedTexSubImage2D'](target, level, xoffset, yoffset, width, height, format, data ? HEAPU8.subarray((data), (data+imageSize)) : null);
    }

  function _emscripten_glCopyBufferSubData(x0, x1, x2, x3, x4) { GLctx['copyBufferSubData'](x0, x1, x2, x3, x4) }

  function _emscripten_glCopyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7) { GLctx['copyTexSubImage2D'](x0, x1, x2, x3, x4, x5, x6, x7) }

  function _emscripten_glCreateProgram() {
      var id = GL.getNewId(GL.programs);
      var program = GLctx.createProgram();
      // Store additional information needed for each shader program:
      program.name = id;
      // Lazy cache results of glGetProgramiv(GL_ACTIVE_UNIFORM_MAX_LENGTH/GL_ACTIVE_ATTRIBUTE_MAX_LENGTH/GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH)
      program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
      program.uniformIdCounter = 1;
      GL.programs[id] = program;
      return id;
    }

  function _emscripten_glCreateShader(shaderType) {
      var id = GL.getNewId(GL.shaders);
      GL.shaders[id] = GLctx.createShader(shaderType);
  
      return id;
    }

  function _emscripten_glCullFace(x0) { GLctx['cullFace'](x0) }

  function _emscripten_glDeleteBuffers(n, buffers) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((buffers)+(i*4))>>2)];
        var buffer = GL.buffers[id];
  
        // From spec: "glDeleteBuffers silently ignores 0's and names that do not
        // correspond to existing buffer objects."
        if (!buffer) continue;
  
        GLctx.deleteBuffer(buffer);
        buffer.name = 0;
        GL.buffers[id] = null;
  
        if (id == GLctx.currentPixelPackBufferBinding) GLctx.currentPixelPackBufferBinding = 0;
        if (id == GLctx.currentPixelUnpackBufferBinding) GLctx.currentPixelUnpackBufferBinding = 0;
      }
    }

  function _emscripten_glDeleteFramebuffers(n, framebuffers) {
      for (var i = 0; i < n; ++i) {
        var id = HEAP32[(((framebuffers)+(i*4))>>2)];
        var framebuffer = GL.framebuffers[id];
        if (!framebuffer) continue; // GL spec: "glDeleteFramebuffers silently ignores 0s and names that do not correspond to existing framebuffer objects".
        GLctx.deleteFramebuffer(framebuffer);
        framebuffer.name = 0;
        GL.framebuffers[id] = null;
      }
    }

  function _emscripten_glDeleteProgram(id) {
      if (!id) return;
      var program = GL.programs[id];
      if (!program) { // glDeleteProgram actually signals an error when deleting a nonexisting object, unlike some other GL delete functions.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      GLctx.deleteProgram(program);
      program.name = 0;
      GL.programs[id] = null;
    }

  function _emscripten_glDeleteRenderbuffers(n, renderbuffers) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((renderbuffers)+(i*4))>>2)];
        var renderbuffer = GL.renderbuffers[id];
        if (!renderbuffer) continue; // GL spec: "glDeleteRenderbuffers silently ignores 0s and names that do not correspond to existing renderbuffer objects".
        GLctx.deleteRenderbuffer(renderbuffer);
        renderbuffer.name = 0;
        GL.renderbuffers[id] = null;
      }
    }

  function _emscripten_glDeleteSamplers(n, samplers) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((samplers)+(i*4))>>2)];
        var sampler = GL.samplers[id];
        if (!sampler) continue;
        GLctx['deleteSampler'](sampler);
        sampler.name = 0;
        GL.samplers[id] = null;
      }
    }

  function _emscripten_glDeleteShader(id) {
      if (!id) return;
      var shader = GL.shaders[id];
      if (!shader) { // glDeleteShader actually signals an error when deleting a nonexisting object, unlike some other GL delete functions.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      GLctx.deleteShader(shader);
      GL.shaders[id] = null;
    }

  function _emscripten_glDeleteSync(id) {
      if (!id) return;
      var sync = GL.syncs[id];
      if (!sync) { // glDeleteSync signals an error when deleting a nonexisting object, unlike some other GL delete functions.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      GLctx.deleteSync(sync);
      sync.name = 0;
      GL.syncs[id] = null;
    }

  function _emscripten_glDeleteTextures(n, textures) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((textures)+(i*4))>>2)];
        var texture = GL.textures[id];
        if (!texture) continue; // GL spec: "glDeleteTextures silently ignores 0s and names that do not correspond to existing textures".
        GLctx.deleteTexture(texture);
        texture.name = 0;
        GL.textures[id] = null;
      }
    }

  function _emscripten_glDeleteVertexArrays(n, vaos) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((vaos)+(i*4))>>2)];
        GLctx['deleteVertexArray'](GL.vaos[id]);
        GL.vaos[id] = null;
      }
    }

  function _emscripten_glDeleteVertexArraysOES(n, vaos) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((vaos)+(i*4))>>2)];
        GLctx['deleteVertexArray'](GL.vaos[id]);
        GL.vaos[id] = null;
      }
    }

  function _emscripten_glDepthMask(flag) {
      GLctx.depthMask(!!flag);
    }

  function _emscripten_glDisable(x0) { GLctx['disable'](x0) }

  function _emscripten_glDisableVertexAttribArray(index) {
      GLctx.disableVertexAttribArray(index);
    }

  function _emscripten_glDrawArrays(mode, first, count) {
  
      GLctx.drawArrays(mode, first, count);
  
    }

  function _emscripten_glDrawArraysInstanced(mode, first, count, primcount) {
      GLctx['drawArraysInstanced'](mode, first, count, primcount);
    }

  function _emscripten_glDrawArraysInstancedBaseInstanceWEBGL(mode, first, count, instanceCount, baseInstance) {
      GLctx.dibvbi['drawArraysInstancedBaseInstanceWEBGL'](mode, first, count, instanceCount, baseInstance);
    }

  var tempFixedLengthArray = [];
  function _emscripten_glDrawBuffers(n, bufs) {
  
      var bufArray = tempFixedLengthArray[n];
      for (var i = 0; i < n; i++) {
        bufArray[i] = HEAP32[(((bufs)+(i*4))>>2)];
      }
  
      GLctx['drawBuffers'](bufArray);
    }

  function _emscripten_glDrawElements(mode, count, type, indices) {
  
      GLctx.drawElements(mode, count, type, indices);
  
    }

  function _emscripten_glDrawElementsInstanced(mode, count, type, indices, primcount) {
      GLctx['drawElementsInstanced'](mode, count, type, indices, primcount);
    }

  function _emscripten_glDrawElementsInstancedBaseVertexBaseInstanceWEBGL(mode, count, type, offset, instanceCount, baseVertex, baseinstance) {
      GLctx.dibvbi['drawElementsInstancedBaseVertexBaseInstanceWEBGL'](mode, count, type, offset, instanceCount, baseVertex, baseinstance);
    }

  function _glDrawElements(mode, count, type, indices) {
  
      GLctx.drawElements(mode, count, type, indices);
  
    }
  function _emscripten_glDrawRangeElements(mode, start, end, count, type, indices) {
      // TODO: This should be a trivial pass-though function registered at the bottom of this page as
      // glFuncs[6][1] += ' drawRangeElements';
      // but due to https://bugzilla.mozilla.org/show_bug.cgi?id=1202427,
      // we work around by ignoring the range.
      _glDrawElements(mode, count, type, indices);
    }

  function _emscripten_glEnable(x0) { GLctx['enable'](x0) }

  function _emscripten_glEnableVertexAttribArray(index) {
      GLctx.enableVertexAttribArray(index);
    }

  function _emscripten_glFenceSync(condition, flags) {
      var sync = GLctx.fenceSync(condition, flags);
      if (sync) {
        var id = GL.getNewId(GL.syncs);
        sync.name = id;
        GL.syncs[id] = sync;
        return id;
      } else {
        return 0; // Failed to create a sync object
      }
    }

  function _emscripten_glFinish() { GLctx['finish']() }

  function _emscripten_glFlush() { GLctx['flush']() }

  function _emscripten_glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
      GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget,
                                         GL.renderbuffers[renderbuffer]);
    }

  function _emscripten_glFramebufferTexture2D(target, attachment, textarget, texture, level) {
      GLctx.framebufferTexture2D(target, attachment, textarget,
                                      GL.textures[texture], level);
    }

  function _emscripten_glFrontFace(x0) { GLctx['frontFace'](x0) }

  function __glGenObject(n, buffers, createFunction, objectTable
      ) {
      for (var i = 0; i < n; i++) {
        var buffer = GLctx[createFunction]();
        var id = buffer && GL.getNewId(objectTable);
        if (buffer) {
          buffer.name = id;
          objectTable[id] = buffer;
        } else {
          GL.recordError(0x502 /* GL_INVALID_OPERATION */);
        }
        HEAP32[(((buffers)+(i*4))>>2)] = id;
      }
    }
  function _emscripten_glGenBuffers(n, buffers) {
      __glGenObject(n, buffers, 'createBuffer', GL.buffers
        );
    }

  function _emscripten_glGenFramebuffers(n, ids) {
      __glGenObject(n, ids, 'createFramebuffer', GL.framebuffers
        );
    }

  function _emscripten_glGenRenderbuffers(n, renderbuffers) {
      __glGenObject(n, renderbuffers, 'createRenderbuffer', GL.renderbuffers
        );
    }

  function _emscripten_glGenSamplers(n, samplers) {
      __glGenObject(n, samplers, 'createSampler', GL.samplers
        );
    }

  function _emscripten_glGenTextures(n, textures) {
      __glGenObject(n, textures, 'createTexture', GL.textures
        );
    }

  function _emscripten_glGenVertexArrays(n, arrays) {
      __glGenObject(n, arrays, 'createVertexArray', GL.vaos
        );
    }

  function _emscripten_glGenVertexArraysOES(n, arrays) {
      __glGenObject(n, arrays, 'createVertexArray', GL.vaos
        );
    }

  function _emscripten_glGenerateMipmap(x0) { GLctx['generateMipmap'](x0) }

  function _emscripten_glGetBufferParameteriv(target, value, data) {
      if (!data) {
        // GLES2 specification does not specify how to behave if data is a null pointer. Since calling this function does not make sense
        // if data == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((data)>>2)] = GLctx.getBufferParameter(target, value);
    }

  function _emscripten_glGetError() {
      var error = GLctx.getError() || GL.lastError;
      GL.lastError = 0/*GL_NO_ERROR*/;
      return error;
    }

  function readI53FromI64(ptr) {
      return HEAPU32[ptr>>2] + HEAP32[ptr+4>>2] * 4294967296;
    }
  
  function readI53FromU64(ptr) {
      return HEAPU32[ptr>>2] + HEAPU32[ptr+4>>2] * 4294967296;
    }
  function writeI53ToI64(ptr, num) {
      HEAPU32[ptr>>2] = num;
      HEAPU32[ptr+4>>2] = (num - HEAPU32[ptr>>2])/4294967296;
      var deserialized = (num >= 0) ? readI53FromU64(ptr) : readI53FromI64(ptr);
      if (deserialized != num) warnOnce('writeI53ToI64() out of range: serialized JS Number ' + num + ' to Wasm heap as bytes lo=0x' + HEAPU32[ptr>>2].toString(16) + ', hi=0x' + HEAPU32[ptr+4>>2].toString(16) + ', which deserializes back to ' + deserialized + ' instead!');
    }
  function emscriptenWebGLGet(name_, p, type) {
      // Guard against user passing a null pointer.
      // Note that GLES2 spec does not say anything about how passing a null pointer should be treated.
      // Testing on desktop core GL 3, the application crashes on glGetIntegerv to a null pointer, but
      // better to report an error instead of doing anything random.
      if (!p) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var ret = undefined;
      switch (name_) { // Handle a few trivial GLES values
        case 0x8DFA: // GL_SHADER_COMPILER
          ret = 1;
          break;
        case 0x8DF8: // GL_SHADER_BINARY_FORMATS
          if (type != 0 && type != 1) {
            GL.recordError(0x500); // GL_INVALID_ENUM
          }
          return; // Do not write anything to the out pointer, since no binary formats are supported.
        case 0x87FE: // GL_NUM_PROGRAM_BINARY_FORMATS
        case 0x8DF9: // GL_NUM_SHADER_BINARY_FORMATS
          ret = 0;
          break;
        case 0x86A2: // GL_NUM_COMPRESSED_TEXTURE_FORMATS
          // WebGL doesn't have GL_NUM_COMPRESSED_TEXTURE_FORMATS (it's obsolete since GL_COMPRESSED_TEXTURE_FORMATS returns a JS array that can be queried for length),
          // so implement it ourselves to allow C++ GLES2 code get the length.
          var formats = GLctx.getParameter(0x86A3 /*GL_COMPRESSED_TEXTURE_FORMATS*/);
          ret = formats ? formats.length : 0;
          break;
  
        case 0x821D: // GL_NUM_EXTENSIONS
          if (GL.currentContext.version < 2) {
            GL.recordError(0x502 /* GL_INVALID_OPERATION */); // Calling GLES3/WebGL2 function with a GLES2/WebGL1 context
            return;
          }
          // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
          var exts = GLctx.getSupportedExtensions() || [];
          ret = 2 * exts.length; // each extension is duplicated, first in unprefixed WebGL form, and then a second time with "GL_" prefix.
          break;
        case 0x821B: // GL_MAJOR_VERSION
        case 0x821C: // GL_MINOR_VERSION
          if (GL.currentContext.version < 2) {
            GL.recordError(0x500); // GL_INVALID_ENUM
            return;
          }
          ret = name_ == 0x821B ? 3 : 0; // return version 3.0
          break;
      }
  
      if (ret === undefined) {
        var result = GLctx.getParameter(name_);
        switch (typeof(result)) {
          case "number":
            ret = result;
            break;
          case "boolean":
            ret = result ? 1 : 0;
            break;
          case "string":
            GL.recordError(0x500); // GL_INVALID_ENUM
            return;
          case "object":
            if (result === null) {
              // null is a valid result for some (e.g., which buffer is bound - perhaps nothing is bound), but otherwise
              // can mean an invalid name_, which we need to report as an error
              switch (name_) {
                case 0x8894: // ARRAY_BUFFER_BINDING
                case 0x8B8D: // CURRENT_PROGRAM
                case 0x8895: // ELEMENT_ARRAY_BUFFER_BINDING
                case 0x8CA6: // FRAMEBUFFER_BINDING or DRAW_FRAMEBUFFER_BINDING
                case 0x8CA7: // RENDERBUFFER_BINDING
                case 0x8069: // TEXTURE_BINDING_2D
                case 0x85B5: // WebGL 2 GL_VERTEX_ARRAY_BINDING, or WebGL 1 extension OES_vertex_array_object GL_VERTEX_ARRAY_BINDING_OES
                case 0x8F36: // COPY_READ_BUFFER_BINDING or COPY_READ_BUFFER
                case 0x8F37: // COPY_WRITE_BUFFER_BINDING or COPY_WRITE_BUFFER
                case 0x88ED: // PIXEL_PACK_BUFFER_BINDING
                case 0x88EF: // PIXEL_UNPACK_BUFFER_BINDING
                case 0x8CAA: // READ_FRAMEBUFFER_BINDING
                case 0x8919: // SAMPLER_BINDING
                case 0x8C1D: // TEXTURE_BINDING_2D_ARRAY
                case 0x806A: // TEXTURE_BINDING_3D
                case 0x8E25: // TRANSFORM_FEEDBACK_BINDING
                case 0x8C8F: // TRANSFORM_FEEDBACK_BUFFER_BINDING
                case 0x8A28: // UNIFORM_BUFFER_BINDING
                case 0x8514: { // TEXTURE_BINDING_CUBE_MAP
                  ret = 0;
                  break;
                }
                default: {
                  GL.recordError(0x500); // GL_INVALID_ENUM
                  return;
                }
              }
            } else if (result instanceof Float32Array ||
                       result instanceof Uint32Array ||
                       result instanceof Int32Array ||
                       result instanceof Array) {
              for (var i = 0; i < result.length; ++i) {
                switch (type) {
                  case 0: HEAP32[(((p)+(i*4))>>2)] = result[i]; break;
                  case 2: HEAPF32[(((p)+(i*4))>>2)] = result[i]; break;
                  case 4: HEAP8[(((p)+(i))>>0)] = result[i] ? 1 : 0; break;
                }
              }
              return;
            } else {
              try {
                ret = result.name | 0;
              } catch(e) {
                GL.recordError(0x500); // GL_INVALID_ENUM
                err('GL_INVALID_ENUM in glGet' + type + 'v: Unknown object returned from WebGL getParameter(' + name_ + ')! (error: ' + e + ')');
                return;
              }
            }
            break;
          default:
            GL.recordError(0x500); // GL_INVALID_ENUM
            err('GL_INVALID_ENUM in glGet' + type + 'v: Native code calling glGet' + type + 'v(' + name_ + ') and it returns ' + result + ' of type ' + typeof(result) + '!');
            return;
        }
      }
  
      switch (type) {
        case 1: writeI53ToI64(p, ret); break;
        case 0: HEAP32[((p)>>2)] = ret; break;
        case 2:   HEAPF32[((p)>>2)] = ret; break;
        case 4: HEAP8[((p)>>0)] = ret ? 1 : 0; break;
      }
    }
  function _emscripten_glGetFloatv(name_, p) {
      emscriptenWebGLGet(name_, p, 2);
    }

  function _emscripten_glGetFramebufferAttachmentParameteriv(target, attachment, pname, params) {
      var result = GLctx.getFramebufferAttachmentParameter(target, attachment, pname);
      if (result instanceof WebGLRenderbuffer ||
          result instanceof WebGLTexture) {
        result = result.name | 0;
      }
      HEAP32[((params)>>2)] = result;
    }

  function _emscripten_glGetIntegerv(name_, p) {
      emscriptenWebGLGet(name_, p, 0);
    }

  function _emscripten_glGetProgramInfoLog(program, maxLength, length, infoLog) {
      var log = GLctx.getProgramInfoLog(GL.programs[program]);
      if (log === null) log = '(unknown error)';
      var numBytesWrittenExclNull = (maxLength > 0 && infoLog) ? stringToUTF8(log, infoLog, maxLength) : 0;
      if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
    }

  function _emscripten_glGetProgramiv(program, pname, p) {
      if (!p) {
        // GLES2 specification does not specify how to behave if p is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
  
      if (program >= GL.counter) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
  
      program = GL.programs[program];
  
      if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
        var log = GLctx.getProgramInfoLog(program);
        if (log === null) log = '(unknown error)';
        HEAP32[((p)>>2)] = log.length + 1;
      } else if (pname == 0x8B87 /* GL_ACTIVE_UNIFORM_MAX_LENGTH */) {
        if (!program.maxUniformLength) {
          for (var i = 0; i < GLctx.getProgramParameter(program, 0x8B86/*GL_ACTIVE_UNIFORMS*/); ++i) {
            program.maxUniformLength = Math.max(program.maxUniformLength, GLctx.getActiveUniform(program, i).name.length+1);
          }
        }
        HEAP32[((p)>>2)] = program.maxUniformLength;
      } else if (pname == 0x8B8A /* GL_ACTIVE_ATTRIBUTE_MAX_LENGTH */) {
        if (!program.maxAttributeLength) {
          for (var i = 0; i < GLctx.getProgramParameter(program, 0x8B89/*GL_ACTIVE_ATTRIBUTES*/); ++i) {
            program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx.getActiveAttrib(program, i).name.length+1);
          }
        }
        HEAP32[((p)>>2)] = program.maxAttributeLength;
      } else if (pname == 0x8A35 /* GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH */) {
        if (!program.maxUniformBlockNameLength) {
          for (var i = 0; i < GLctx.getProgramParameter(program, 0x8A36/*GL_ACTIVE_UNIFORM_BLOCKS*/); ++i) {
            program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx.getActiveUniformBlockName(program, i).length+1);
          }
        }
        HEAP32[((p)>>2)] = program.maxUniformBlockNameLength;
      } else {
        HEAP32[((p)>>2)] = GLctx.getProgramParameter(program, pname);
      }
    }

  function _emscripten_glGetRenderbufferParameteriv(target, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if params == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx.getRenderbufferParameter(target, pname);
    }

  function _emscripten_glGetShaderInfoLog(shader, maxLength, length, infoLog) {
      var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
      if (log === null) log = '(unknown error)';
      var numBytesWrittenExclNull = (maxLength > 0 && infoLog) ? stringToUTF8(log, infoLog, maxLength) : 0;
      if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
    }

  function _emscripten_glGetShaderPrecisionFormat(shaderType, precisionType, range, precision) {
      var result = GLctx.getShaderPrecisionFormat(shaderType, precisionType);
      HEAP32[((range)>>2)] = result.rangeMin;
      HEAP32[(((range)+(4))>>2)] = result.rangeMax;
      HEAP32[((precision)>>2)] = result.precision;
    }

  function _emscripten_glGetShaderiv(shader, pname, p) {
      if (!p) {
        // GLES2 specification does not specify how to behave if p is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
        var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
        if (log === null) log = '(unknown error)';
        // The GLES2 specification says that if the shader has an empty info log,
        // a value of 0 is returned. Otherwise the log has a null char appended.
        // (An empty string is falsey, so we can just check that instead of
        // looking at log.length.)
        var logLength = log ? log.length + 1 : 0;
        HEAP32[((p)>>2)] = logLength;
      } else if (pname == 0x8B88) { // GL_SHADER_SOURCE_LENGTH
        var source = GLctx.getShaderSource(GL.shaders[shader]);
        // source may be a null, or the empty string, both of which are falsey
        // values that we report a 0 length for.
        var sourceLength = source ? source.length + 1 : 0;
        HEAP32[((p)>>2)] = sourceLength;
      } else {
        HEAP32[((p)>>2)] = GLctx.getShaderParameter(GL.shaders[shader], pname);
      }
    }

  function stringToNewUTF8(jsString) {
      var length = lengthBytesUTF8(jsString)+1;
      var cString = _malloc(length);
      stringToUTF8(jsString, cString, length);
      return cString;
    }
  function _emscripten_glGetString(name_) {
      var ret = GL.stringCache[name_];
      if (!ret) {
        switch (name_) {
          case 0x1F03 /* GL_EXTENSIONS */:
            var exts = GLctx.getSupportedExtensions() || []; // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
            exts = exts.concat(exts.map(function(e) { return "GL_" + e; }));
            ret = stringToNewUTF8(exts.join(' '));
            break;
          case 0x1F00 /* GL_VENDOR */:
          case 0x1F01 /* GL_RENDERER */:
          case 0x9245 /* UNMASKED_VENDOR_WEBGL */:
          case 0x9246 /* UNMASKED_RENDERER_WEBGL */:
            var s = GLctx.getParameter(name_);
            if (!s) {
              GL.recordError(0x500/*GL_INVALID_ENUM*/);
            }
            ret = s && stringToNewUTF8(s);
            break;
  
          case 0x1F02 /* GL_VERSION */:
            var glVersion = GLctx.getParameter(0x1F02 /*GL_VERSION*/);
            // return GLES version string corresponding to the version of the WebGL context
            if (GL.currentContext.version >= 2) glVersion = 'OpenGL ES 3.0 (' + glVersion + ')';
            else
            {
              glVersion = 'OpenGL ES 2.0 (' + glVersion + ')';
            }
            ret = stringToNewUTF8(glVersion);
            break;
          case 0x8B8C /* GL_SHADING_LANGUAGE_VERSION */:
            var glslVersion = GLctx.getParameter(0x8B8C /*GL_SHADING_LANGUAGE_VERSION*/);
            // extract the version number 'N.M' from the string 'WebGL GLSL ES N.M ...'
            var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
            var ver_num = glslVersion.match(ver_re);
            if (ver_num !== null) {
              if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + '0'; // ensure minor version has 2 digits
              glslVersion = 'OpenGL ES GLSL ES ' + ver_num[1] + ' (' + glslVersion + ')';
            }
            ret = stringToNewUTF8(glslVersion);
            break;
          default:
            GL.recordError(0x500/*GL_INVALID_ENUM*/);
            // fall through
        }
        GL.stringCache[name_] = ret;
      }
      return ret;
    }

  function _emscripten_glGetStringi(name, index) {
      if (GL.currentContext.version < 2) {
        GL.recordError(0x502 /* GL_INVALID_OPERATION */); // Calling GLES3/WebGL2 function with a GLES2/WebGL1 context
        return 0;
      }
      var stringiCache = GL.stringiCache[name];
      if (stringiCache) {
        if (index < 0 || index >= stringiCache.length) {
          GL.recordError(0x501/*GL_INVALID_VALUE*/);
          return 0;
        }
        return stringiCache[index];
      }
      switch (name) {
        case 0x1F03 /* GL_EXTENSIONS */:
          var exts = GLctx.getSupportedExtensions() || []; // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
          exts = exts.concat(exts.map(function(e) { return "GL_" + e; }));
          exts = exts.map(function(e) { return stringToNewUTF8(e); });
  
          stringiCache = GL.stringiCache[name] = exts;
          if (index < 0 || index >= stringiCache.length) {
            GL.recordError(0x501/*GL_INVALID_VALUE*/);
            return 0;
          }
          return stringiCache[index];
        default:
          GL.recordError(0x500/*GL_INVALID_ENUM*/);
          return 0;
      }
    }

  /** @suppress {checkTypes} */
  function jstoi_q(str) {
      return parseInt(str);
    }
  
  /** @noinline */
  function webglGetLeftBracePos(name) {
      return name.slice(-1) == ']' && name.lastIndexOf('[');
    }
  function webglPrepareUniformLocationsBeforeFirstUse(program) {
      var uniformLocsById = program.uniformLocsById, // Maps GLuint -> WebGLUniformLocation
        uniformSizeAndIdsByName = program.uniformSizeAndIdsByName, // Maps name -> [uniform array length, GLuint]
        i, j;
  
      // On the first time invocation of glGetUniformLocation on this shader program:
      // initialize cache data structures and discover which uniforms are arrays.
      if (!uniformLocsById) {
        // maps GLint integer locations to WebGLUniformLocations
        program.uniformLocsById = uniformLocsById = {};
        // maps integer locations back to uniform name strings, so that we can lazily fetch uniform array locations
        program.uniformArrayNamesById = {};
  
        for (i = 0; i < GLctx.getProgramParameter(program, 0x8B86/*GL_ACTIVE_UNIFORMS*/); ++i) {
          var u = GLctx.getActiveUniform(program, i);
          var nm = u.name;
          var sz = u.size;
          var lb = webglGetLeftBracePos(nm);
          var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
  
          // Assign a new location.
          var id = program.uniformIdCounter;
          program.uniformIdCounter += sz;
          // Eagerly get the location of the uniformArray[0] base element.
          // The remaining indices >0 will be left for lazy evaluation to
          // improve performance. Those may never be needed to fetch, if the
          // application fills arrays always in full starting from the first
          // element of the array.
          uniformSizeAndIdsByName[arrayName] = [sz, id];
  
          // Store placeholder integers in place that highlight that these
          // >0 index locations are array indices pending population.
          for(j = 0; j < sz; ++j) {
            uniformLocsById[id] = j;
            program.uniformArrayNamesById[id++] = arrayName;
          }
        }
      }
    }
  function _emscripten_glGetUniformLocation(program, name) {
  
      name = UTF8ToString(name);
  
      if (program = GL.programs[program]) {
        webglPrepareUniformLocationsBeforeFirstUse(program);
        var uniformLocsById = program.uniformLocsById; // Maps GLuint -> WebGLUniformLocation
        var arrayIndex = 0;
        var uniformBaseName = name;
  
        // Invariant: when populating integer IDs for uniform locations, we must maintain the precondition that
        // arrays reside in contiguous addresses, i.e. for a 'vec4 colors[10];', colors[4] must be at location colors[0]+4.
        // However, user might call glGetUniformLocation(program, "colors") for an array, so we cannot discover based on the user
        // input arguments whether the uniform we are dealing with is an array. The only way to discover which uniforms are arrays
        // is to enumerate over all the active uniforms in the program.
        var leftBrace = webglGetLeftBracePos(name);
  
        // If user passed an array accessor "[index]", parse the array index off the accessor.
        if (leftBrace > 0) {
          arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0; // "index]", coerce parseInt(']') with >>>0 to treat "foo[]" as "foo[0]" and foo[-1] as unsigned out-of-bounds.
          uniformBaseName = name.slice(0, leftBrace);
        }
  
        // Have we cached the location of this uniform before?
        var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName]; // A pair [array length, GLint of the uniform location]
  
        // If an uniform with this name exists, and if its index is within the array limits (if it's even an array),
        // query the WebGLlocation, or return an existing cached location.
        if (sizeAndId && arrayIndex < sizeAndId[0]) {
          arrayIndex += sizeAndId[1]; // Add the base location of the uniform to the array index offset.
          if ((uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name))) {
            return arrayIndex;
          }
        }
      }
      else {
        // N.b. we are currently unable to distinguish between GL program IDs that never existed vs GL program IDs that have been deleted,
        // so report GL_INVALID_VALUE in both cases.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
      }
      return -1;
    }

  function _emscripten_glInvalidateFramebuffer(target, numAttachments, attachments) {
      var list = tempFixedLengthArray[numAttachments];
      for (var i = 0; i < numAttachments; i++) {
        list[i] = HEAP32[(((attachments)+(i*4))>>2)];
      }
  
      GLctx['invalidateFramebuffer'](target, list);
    }

  function _emscripten_glInvalidateSubFramebuffer(target, numAttachments, attachments, x, y, width, height) {
      var list = tempFixedLengthArray[numAttachments];
      for (var i = 0; i < numAttachments; i++) {
        list[i] = HEAP32[(((attachments)+(i*4))>>2)];
      }
  
      GLctx['invalidateSubFramebuffer'](target, list, x, y, width, height);
    }

  function _emscripten_glIsSync(sync) {
      return GLctx.isSync(GL.syncs[sync]);
    }

  function _emscripten_glIsTexture(id) {
      var texture = GL.textures[id];
      if (!texture) return 0;
      return GLctx.isTexture(texture);
    }

  function _emscripten_glLineWidth(x0) { GLctx['lineWidth'](x0) }

  function _emscripten_glLinkProgram(program) {
      program = GL.programs[program];
      GLctx.linkProgram(program);
      // Invalidate earlier computed uniform->ID mappings, those have now become stale
      program.uniformLocsById = 0; // Mark as null-like so that glGetUniformLocation() knows to populate this again.
      program.uniformSizeAndIdsByName = {};
  
    }

  function _emscripten_glMultiDrawArraysInstancedBaseInstanceWEBGL(mode, firsts, counts, instanceCounts, baseInstances, drawCount) {
      GLctx.mdibvbi['multiDrawArraysInstancedBaseInstanceWEBGL'](
        mode,
        HEAP32,
        firsts >> 2,
        HEAP32,
        counts >> 2,
        HEAP32,
        instanceCounts >> 2,
        HEAPU32,
        baseInstances >> 2,
        drawCount);
    }

  function _emscripten_glMultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(mode, counts, type, offsets, instanceCounts, baseVertices, baseInstances, drawCount) {
      GLctx.mdibvbi['multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL'](
        mode,
        HEAP32,
        counts >> 2,
        type,
        HEAP32,
        offsets >> 2,
        HEAP32,
        instanceCounts >> 2,
        HEAP32,
        baseVertices >> 2,
        HEAPU32,
        baseInstances >> 2,
        drawCount);
    }

  function _emscripten_glPixelStorei(pname, param) {
      if (pname == 0xCF5 /* GL_UNPACK_ALIGNMENT */) {
        GL.unpackAlignment = param;
      }
      GLctx.pixelStorei(pname, param);
    }

  function _emscripten_glReadBuffer(x0) { GLctx['readBuffer'](x0) }

  function computeUnpackAlignedImageSize(width, height, sizePerPixel, alignment) {
      function roundedToNextMultipleOf(x, y) {
        return (x + y - 1) & -y;
      }
      var plainRowSize = width * sizePerPixel;
      var alignedRowSize = roundedToNextMultipleOf(plainRowSize, alignment);
      return height * alignedRowSize;
    }
  
  function __colorChannelsInGlTextureFormat(format) {
      // Micro-optimizations for size: map format to size by subtracting smallest enum value (0x1902) from all values first.
      // Also omit the most common size value (1) from the list, which is assumed by formats not on the list.
      var colorChannels = {
        // 0x1902 /* GL_DEPTH_COMPONENT */ - 0x1902: 1,
        // 0x1906 /* GL_ALPHA */ - 0x1902: 1,
        5: 3,
        6: 4,
        // 0x1909 /* GL_LUMINANCE */ - 0x1902: 1,
        8: 2,
        29502: 3,
        29504: 4,
        // 0x1903 /* GL_RED */ - 0x1902: 1,
        26917: 2,
        26918: 2,
        // 0x8D94 /* GL_RED_INTEGER */ - 0x1902: 1,
        29846: 3,
        29847: 4
      };
      return colorChannels[format - 0x1902]||1;
    }
  
  function heapObjectForWebGLType(type) {
      // Micro-optimization for size: Subtract lowest GL enum number (0x1400/* GL_BYTE */) from type to compare
      // smaller values for the heap, for shorter generated code size.
      // Also the type HEAPU16 is not tested for explicitly, but any unrecognized type will return out HEAPU16.
      // (since most types are HEAPU16)
      type -= 0x1400;
      if (type == 0) return HEAP8;
  
      if (type == 1) return HEAPU8;
  
      if (type == 2) return HEAP16;
  
      if (type == 4) return HEAP32;
  
      if (type == 6) return HEAPF32;
  
      if (type == 5
        || type == 28922
        || type == 28520
        || type == 30779
        || type == 30782
        )
        return HEAPU32;
  
      return HEAPU16;
    }
  
  function heapAccessShiftForWebGLHeap(heap) {
      return 31 - Math.clz32(heap.BYTES_PER_ELEMENT);
    }
  function emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) {
      var heap = heapObjectForWebGLType(type);
      var shift = heapAccessShiftForWebGLHeap(heap);
      var byteSize = 1<<shift;
      var sizePerPixel = __colorChannelsInGlTextureFormat(format) * byteSize;
      var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel, GL.unpackAlignment);
      return heap.subarray(pixels >> shift, pixels + bytes >> shift);
    }
  function _emscripten_glReadPixels(x, y, width, height, format, type, pixels) {
      if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        if (GLctx.currentPixelPackBufferBinding) {
          GLctx.readPixels(x, y, width, height, format, type, pixels);
        } else {
          var heap = heapObjectForWebGLType(type);
          GLctx.readPixels(x, y, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
        }
        return;
      }
      var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
      if (!pixelData) {
        GL.recordError(0x500/*GL_INVALID_ENUM*/);
        return;
      }
      GLctx.readPixels(x, y, width, height, format, type, pixelData);
    }

  function _emscripten_glRenderbufferStorage(x0, x1, x2, x3) { GLctx['renderbufferStorage'](x0, x1, x2, x3) }

  function _emscripten_glRenderbufferStorageMultisample(x0, x1, x2, x3, x4) { GLctx['renderbufferStorageMultisample'](x0, x1, x2, x3, x4) }

  function _emscripten_glSamplerParameterf(sampler, pname, param) {
      GLctx['samplerParameterf'](GL.samplers[sampler], pname, param);
    }

  function _emscripten_glSamplerParameteri(sampler, pname, param) {
      GLctx['samplerParameteri'](GL.samplers[sampler], pname, param);
    }

  function _emscripten_glSamplerParameteriv(sampler, pname, params) {
      var param = HEAP32[((params)>>2)];
      GLctx['samplerParameteri'](GL.samplers[sampler], pname, param);
    }

  function _emscripten_glScissor(x0, x1, x2, x3) { GLctx['scissor'](x0, x1, x2, x3) }

  function _emscripten_glShaderSource(shader, count, string, length) {
      var source = GL.getSource(shader, count, string, length);
  
      GLctx.shaderSource(GL.shaders[shader], source);
    }

  function _emscripten_glStencilFunc(x0, x1, x2) { GLctx['stencilFunc'](x0, x1, x2) }

  function _emscripten_glStencilFuncSeparate(x0, x1, x2, x3) { GLctx['stencilFuncSeparate'](x0, x1, x2, x3) }

  function _emscripten_glStencilMask(x0) { GLctx['stencilMask'](x0) }

  function _emscripten_glStencilMaskSeparate(x0, x1) { GLctx['stencilMaskSeparate'](x0, x1) }

  function _emscripten_glStencilOp(x0, x1, x2) { GLctx['stencilOp'](x0, x1, x2) }

  function _emscripten_glStencilOpSeparate(x0, x1, x2, x3) { GLctx['stencilOpSeparate'](x0, x1, x2, x3) }

  function _emscripten_glTexImage2D(target, level, internalFormat, width, height, border, format, type, pixels) {
      if (GL.currentContext.version >= 2) {
        // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels);
        } else if (pixels) {
          var heap = heapObjectForWebGLType(type);
          GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
        } else {
          GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, null);
        }
        return;
      }
      GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null);
    }

  function _emscripten_glTexParameterf(x0, x1, x2) { GLctx['texParameterf'](x0, x1, x2) }

  function _emscripten_glTexParameterfv(target, pname, params) {
      var param = HEAPF32[((params)>>2)];
      GLctx.texParameterf(target, pname, param);
    }

  function _emscripten_glTexParameteri(x0, x1, x2) { GLctx['texParameteri'](x0, x1, x2) }

  function _emscripten_glTexParameteriv(target, pname, params) {
      var param = HEAP32[((params)>>2)];
      GLctx.texParameteri(target, pname, param);
    }

  function _emscripten_glTexStorage2D(x0, x1, x2, x3, x4) { GLctx['texStorage2D'](x0, x1, x2, x3, x4) }

  function _emscripten_glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
      if (GL.currentContext.version >= 2) {
        // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
        } else if (pixels) {
          var heap = heapObjectForWebGLType(type);
          GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
        } else {
          GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, null);
        }
        return;
      }
      var pixelData = null;
      if (pixels) pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0);
      GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData);
    }

  function webglGetUniformLocation(location) {
      var p = GLctx.currentProgram;
  
      if (p) {
        var webglLoc = p.uniformLocsById[location];
        // p.uniformLocsById[location] stores either an integer, or a WebGLUniformLocation.
  
        // If an integer, we have not yet bound the location, so do it now. The integer value specifies the array index
        // we should bind to.
        if (typeof webglLoc === 'number') {
          p.uniformLocsById[location] = webglLoc = GLctx.getUniformLocation(p, p.uniformArrayNamesById[location] + (webglLoc > 0 ? '[' + webglLoc + ']' : ''));
        }
        // Else an already cached WebGLUniformLocation, return it.
        return webglLoc;
      } else {
        GL.recordError(0x502/*GL_INVALID_OPERATION*/);
      }
    }
  function _emscripten_glUniform1f(location, v0) {
      GLctx.uniform1f(webglGetUniformLocation(location), v0);
    }

  var miniTempWebGLFloatBuffers = [];
  function _emscripten_glUniform1fv(location, count, value) {
  
      if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        GLctx.uniform1fv(webglGetUniformLocation(location), HEAPF32, value>>2, count);
        return;
      }
  
      if (count <= 288) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[count-1];
        for (var i = 0; i < count; ++i) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((value)>>2, (value+count*4)>>2);
      }
      GLctx.uniform1fv(webglGetUniformLocation(location), view);
    }

  function _emscripten_glUniform1i(location, v0) {
      GLctx.uniform1i(webglGetUniformLocation(location), v0);
    }

  var __miniTempWebGLIntBuffers = [];
  function _emscripten_glUniform1iv(location, count, value) {
  
      if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        GLctx.uniform1iv(webglGetUniformLocation(location), HEAP32, value>>2, count);
        return;
      }
  
      if (count <= 288) {
        // avoid allocation when uploading few enough uniforms
        var view = __miniTempWebGLIntBuffers[count-1];
        for (var i = 0; i < count; ++i) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((value)>>2, (value+count*4)>>2);
      }
      GLctx.uniform1iv(webglGetUniformLocation(location), view);
    }

  function _emscripten_glUniform2f(location, v0, v1) {
      GLctx.uniform2f(webglGetUniformLocation(location), v0, v1);
    }

  function _emscripten_glUniform2fv(location, count, value) {
  
      if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        GLctx.uniform2fv(webglGetUniformLocation(location), HEAPF32, value>>2, count*2);
        return;
      }
  
      if (count <= 144) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[2*count-1];
        for (var i = 0; i < 2*count; i += 2) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((value)>>2, (value+count*8)>>2);
      }
      GLctx.uniform2fv(webglGetUniformLocation(location), view);
    }

  function _emscripten_glUniform2i(location, v0, v1) {
      GLctx.uniform2i(webglGetUniformLocation(location), v0, v1);
    }

  function _emscripten_glUniform2iv(location, count, value) {
  
      if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        GLctx.uniform2iv(webglGetUniformLocation(location), HEAP32, value>>2, count*2);
        return;
      }
  
      if (count <= 144) {
        // avoid allocation when uploading few enough uniforms
        var view = __miniTempWebGLIntBuffers[2*count-1];
        for (var i = 0; i < 2*count; i += 2) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
          view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((value)>>2, (value+count*8)>>2);
      }
      GLctx.uniform2iv(webglGetUniformLocation(location), view);
    }

  function _emscripten_glUniform3f(location, v0, v1, v2) {
      GLctx.uniform3f(webglGetUniformLocation(location), v0, v1, v2);
    }

  function _emscripten_glUniform3fv(location, count, value) {
  
      if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        GLctx.uniform3fv(webglGetUniformLocation(location), HEAPF32, value>>2, count*3);
        return;
      }
  
      if (count <= 96) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[3*count-1];
        for (var i = 0; i < 3*count; i += 3) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((value)>>2, (value+count*12)>>2);
      }
      GLctx.uniform3fv(webglGetUniformLocation(location), view);
    }

  function _emscripten_glUniform3i(location, v0, v1, v2) {
      GLctx.uniform3i(webglGetUniformLocation(location), v0, v1, v2);
    }

  function _emscripten_glUniform3iv(location, count, value) {
  
      if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        GLctx.uniform3iv(webglGetUniformLocation(location), HEAP32, value>>2, count*3);
        return;
      }
  
      if (count <= 96) {
        // avoid allocation when uploading few enough uniforms
        var view = __miniTempWebGLIntBuffers[3*count-1];
        for (var i = 0; i < 3*count; i += 3) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
          view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAP32[(((value)+(4*i+8))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((value)>>2, (value+count*12)>>2);
      }
      GLctx.uniform3iv(webglGetUniformLocation(location), view);
    }

  function _emscripten_glUniform4f(location, v0, v1, v2, v3) {
      GLctx.uniform4f(webglGetUniformLocation(location), v0, v1, v2, v3);
    }

  function _emscripten_glUniform4fv(location, count, value) {
  
      if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        GLctx.uniform4fv(webglGetUniformLocation(location), HEAPF32, value>>2, count*4);
        return;
      }
  
      if (count <= 72) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[4*count-1];
        // hoist the heap out of the loop for size and for pthreads+growth.
        var heap = HEAPF32;
        value >>= 2;
        for (var i = 0; i < 4 * count; i += 4) {
          var dst = value + i;
          view[i] = heap[dst];
          view[i + 1] = heap[dst + 1];
          view[i + 2] = heap[dst + 2];
          view[i + 3] = heap[dst + 3];
        }
      } else
      {
        var view = HEAPF32.subarray((value)>>2, (value+count*16)>>2);
      }
      GLctx.uniform4fv(webglGetUniformLocation(location), view);
    }

  function _emscripten_glUniform4i(location, v0, v1, v2, v3) {
      GLctx.uniform4i(webglGetUniformLocation(location), v0, v1, v2, v3);
    }

  function _emscripten_glUniform4iv(location, count, value) {
  
      if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        GLctx.uniform4iv(webglGetUniformLocation(location), HEAP32, value>>2, count*4);
        return;
      }
  
      if (count <= 72) {
        // avoid allocation when uploading few enough uniforms
        var view = __miniTempWebGLIntBuffers[4*count-1];
        for (var i = 0; i < 4*count; i += 4) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
          view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAP32[(((value)+(4*i+8))>>2)];
          view[i+3] = HEAP32[(((value)+(4*i+12))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((value)>>2, (value+count*16)>>2);
      }
      GLctx.uniform4iv(webglGetUniformLocation(location), view);
    }

  function _emscripten_glUniformMatrix2fv(location, count, transpose, value) {
  
      if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*4);
        return;
      }
  
      if (count <= 72) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[4*count-1];
        for (var i = 0; i < 4*count; i += 4) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
          view[i+3] = HEAPF32[(((value)+(4*i+12))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((value)>>2, (value+count*16)>>2);
      }
      GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, view);
    }

  function _emscripten_glUniformMatrix3fv(location, count, transpose, value) {
  
      if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*9);
        return;
      }
  
      if (count <= 32) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[9*count-1];
        for (var i = 0; i < 9*count; i += 9) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
          view[i+3] = HEAPF32[(((value)+(4*i+12))>>2)];
          view[i+4] = HEAPF32[(((value)+(4*i+16))>>2)];
          view[i+5] = HEAPF32[(((value)+(4*i+20))>>2)];
          view[i+6] = HEAPF32[(((value)+(4*i+24))>>2)];
          view[i+7] = HEAPF32[(((value)+(4*i+28))>>2)];
          view[i+8] = HEAPF32[(((value)+(4*i+32))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((value)>>2, (value+count*36)>>2);
      }
      GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, view);
    }

  function _emscripten_glUniformMatrix4fv(location, count, transpose, value) {
  
      if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*16);
        return;
      }
  
      if (count <= 18) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[16*count-1];
        // hoist the heap out of the loop for size and for pthreads+growth.
        var heap = HEAPF32;
        value >>= 2;
        for (var i = 0; i < 16 * count; i += 16) {
          var dst = value + i;
          view[i] = heap[dst];
          view[i + 1] = heap[dst + 1];
          view[i + 2] = heap[dst + 2];
          view[i + 3] = heap[dst + 3];
          view[i + 4] = heap[dst + 4];
          view[i + 5] = heap[dst + 5];
          view[i + 6] = heap[dst + 6];
          view[i + 7] = heap[dst + 7];
          view[i + 8] = heap[dst + 8];
          view[i + 9] = heap[dst + 9];
          view[i + 10] = heap[dst + 10];
          view[i + 11] = heap[dst + 11];
          view[i + 12] = heap[dst + 12];
          view[i + 13] = heap[dst + 13];
          view[i + 14] = heap[dst + 14];
          view[i + 15] = heap[dst + 15];
        }
      } else
      {
        var view = HEAPF32.subarray((value)>>2, (value+count*64)>>2);
      }
      GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, view);
    }

  function _emscripten_glUseProgram(program) {
      program = GL.programs[program];
      GLctx.useProgram(program);
      // Record the currently active program so that we can access the uniform
      // mapping table of that program.
      GLctx.currentProgram = program;
    }

  function _emscripten_glVertexAttrib1f(x0, x1) { GLctx['vertexAttrib1f'](x0, x1) }

  function _emscripten_glVertexAttrib2fv(index, v) {
  
      GLctx.vertexAttrib2f(index, HEAPF32[v>>2], HEAPF32[v+4>>2]);
    }

  function _emscripten_glVertexAttrib3fv(index, v) {
  
      GLctx.vertexAttrib3f(index, HEAPF32[v>>2], HEAPF32[v+4>>2], HEAPF32[v+8>>2]);
    }

  function _emscripten_glVertexAttrib4fv(index, v) {
  
      GLctx.vertexAttrib4f(index, HEAPF32[v>>2], HEAPF32[v+4>>2], HEAPF32[v+8>>2], HEAPF32[v+12>>2]);
    }

  function _emscripten_glVertexAttribDivisor(index, divisor) {
      GLctx['vertexAttribDivisor'](index, divisor);
    }

  function _emscripten_glVertexAttribIPointer(index, size, type, stride, ptr) {
      GLctx['vertexAttribIPointer'](index, size, type, stride, ptr);
    }

  function _emscripten_glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
      GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr);
    }

  function _emscripten_glViewport(x0, x1, x2, x3) { GLctx['viewport'](x0, x1, x2, x3) }

  function _emscripten_glWaitSync(sync, flags, timeoutLo, timeoutHi) {
      // See WebGL2 vs GLES3 difference on GL_TIMEOUT_IGNORED above (https://www.khronos.org/registry/webgl/specs/latest/2.0/#5.15)
      GLctx.waitSync(GL.syncs[sync], flags, convertI32PairToI53(timeoutLo, timeoutHi));
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function emscripten_realloc_buffer(size) {
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1 /*success*/;
      } catch(e) {
        err('emscripten_realloc_buffer: Attempted to grow heap from ' + buffer.byteLength  + ' bytes to ' + size + ' bytes, but got error: ' + e);
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    }
  function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      // With pthreads, races can happen (another thread might increase the size in between), so return a failure, and let the caller retry.
      assert(requestedSize > oldSize);
  
      // Memory resize rules:
      // 1. Always increase heap size to at least the requested size, rounded up to next page multiple.
      // 2a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap geometrically: increase the heap size according to 
      //                                         MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%),
      //                                         At most overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 2b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap linearly: increase the heap size by at least MEMORY_GROWTH_LINEAR_STEP bytes.
      // 3. Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 4. If we were unable to allocate as much memory, it may be due to over-eager decision to excessively reserve due to (3) above.
      //    Hence if an allocation fails, cut down on the amount of excess growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit is set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      // In CAN_ADDRESS_2GB mode, stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate full 4GB Wasm memories, the size will wrap
      // back to 0 bytes in Wasm side for any code that deals with heap sizes, which would require special casing all heap size related code to treat
      // 0 specially.
      var maxHeapSize = 2147483648;
      if (requestedSize > maxHeapSize) {
        err('Cannot enlarge memory, asked to go up to ' + requestedSize + ' bytes, but the limit is ' + maxHeapSize + ' bytes!');
        return false;
      }
  
      // Loop through potential heap size increases. If we attempt a too eager reservation that fails, cut down on the
      // attempted size and reserve a smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
  
          return true;
        }
      }
      err('Failed to grow the heap from ' + oldSize + ' bytes to ' + newSize + ' bytes, not enough memory!');
      return false;
    }

  var ENV = {};
  
  function getExecutableName() {
      return thisProgram || './this.program';
    }
  function getEnvStrings() {
      if (!getEnvStrings.strings) {
        // Default values.
        // Browser language detection #8751
        var lang = ((typeof navigator === 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8';
        var env = {
          'USER': 'web_user',
          'LOGNAME': 'web_user',
          'PATH': '/',
          'PWD': '/',
          'HOME': '/home/web_user',
          'LANG': lang,
          '_': getExecutableName()
        };
        // Apply the user-provided values, if any.
        for (var x in ENV) {
          // x is a key in ENV; if ENV[x] is undefined, that means it was
          // explicitly set to be so. We allow user code to do that to
          // force variables with default values to remain unset.
          if (ENV[x] === undefined) delete env[x];
          else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + '=' + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }
  function _environ_get(__environ, environ_buf) {
      var bufSize = 0;
      getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[(((__environ)+(i * 4))>>2)] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }

  function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = getEnvStrings();
      HEAP32[((penviron_count)>>2)] = strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAP32[((penviron_buf_size)>>2)] = bufSize;
      return 0;
    }

  function _exit(status) {
      // void _exit(int status);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/exit.html
      exit(status);
    }

  function _fd_close(fd) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_fdstat_get(fd, pbuf) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      // All character devices are terminals (other things a Linux system would
      // assume is a character device, like the mouse, we have special APIs for).
      var type = stream.tty ? 2 :
                 FS.isDir(stream.mode) ? 3 :
                 FS.isLink(stream.mode) ? 7 :
                 4;
      HEAP8[((pbuf)>>0)] = type;
      // TODO HEAP16[(((pbuf)+(2))>>1)] = ?;
      // TODO (tempI64 = [?>>>0,(tempDouble=?,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((pbuf)+(8))>>2)] = tempI64[0],HEAP32[(((pbuf)+(12))>>2)] = tempI64[1]);
      // TODO (tempI64 = [?>>>0,(tempDouble=?,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((pbuf)+(16))>>2)] = tempI64[0],HEAP32[(((pbuf)+(20))>>2)] = tempI64[1]);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_pread(fd, iov, iovcnt, offset_low, offset_high, pnum) {try {
  
      
      assert(!offset_high, 'offsets over 2^32 not yet supported');
      var stream = SYSCALLS.getStreamFromFD(fd)
      var num = SYSCALLS.doReadv(stream, iov, iovcnt, offset_low);
      HEAP32[((pnum)>>2)] = num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_read(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doReadv(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)] = num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {try {
  
      
      var stream = SYSCALLS.getStreamFromFD(fd);
      var HIGH_OFFSET = 0x100000000; // 2^32
      // use an unsigned operator on low and shift high by 32-bits
      var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
  
      var DOUBLE_LIMIT = 0x20000000000000; // 2^53
      // we also check for equality since DOUBLE_LIMIT + 1 == DOUBLE_LIMIT
      if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
        return -61;
      }
  
      FS.llseek(stream, offset, whence);
      (tempI64 = [stream.position>>>0,(tempDouble=stream.position,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((newOffset)>>2)] = tempI64[0],HEAP32[(((newOffset)+(4))>>2)] = tempI64[1]);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_write(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doWritev(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)] = num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _getTempRet0() {
      return getTempRet0();
    }

  function _gettimeofday(ptr) {
      var now = Date.now();
      HEAP32[((ptr)>>2)] = (now/1000)|0; // seconds
      HEAP32[(((ptr)+(4))>>2)] = ((now % 1000)*1000)|0; // microseconds
      return 0;
    }

  function _setTempRet0(val) {
      setTempRet0(val);
    }

  function __isLeapYear(year) {
        return year%4 === 0 && (year%100 !== 0 || year%400 === 0);
    }
  
  function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
        // no-op
      }
      return sum;
    }
  
  var __MONTH_DAYS_LEAP = [31,29,31,30,31,30,31,31,30,31,30,31];
  
  var __MONTH_DAYS_REGULAR = [31,28,31,30,31,30,31,31,30,31,30,31];
  function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
  
        if (days > daysInCurrentMonth-newDate.getDate()) {
          // we spill over to next month
          days -= (daysInCurrentMonth-newDate.getDate()+1);
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth+1)
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear()+1);
          }
        } else {
          // we stay in current month
          newDate.setDate(newDate.getDate()+days);
          return newDate;
        }
      }
  
      return newDate;
    }
  function _strftime(s, maxsize, format, tm) {
      // size_t strftime(char *restrict s, size_t maxsize, const char *restrict format, const struct tm *restrict timeptr);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strftime.html
  
      var tm_zone = HEAP32[(((tm)+(40))>>2)];
  
      var date = {
        tm_sec: HEAP32[((tm)>>2)],
        tm_min: HEAP32[(((tm)+(4))>>2)],
        tm_hour: HEAP32[(((tm)+(8))>>2)],
        tm_mday: HEAP32[(((tm)+(12))>>2)],
        tm_mon: HEAP32[(((tm)+(16))>>2)],
        tm_year: HEAP32[(((tm)+(20))>>2)],
        tm_wday: HEAP32[(((tm)+(24))>>2)],
        tm_yday: HEAP32[(((tm)+(28))>>2)],
        tm_isdst: HEAP32[(((tm)+(32))>>2)],
        tm_gmtoff: HEAP32[(((tm)+(36))>>2)],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ''
      };
  
      var pattern = UTF8ToString(format);
  
      // expand format
      var EXPANSION_RULES_1 = {
        '%c': '%a %b %d %H:%M:%S %Y',     // Replaced by the locale's appropriate date and time representation - e.g., Mon Aug  3 14:02:01 2013
        '%D': '%m/%d/%y',                 // Equivalent to %m / %d / %y
        '%F': '%Y-%m-%d',                 // Equivalent to %Y - %m - %d
        '%h': '%b',                       // Equivalent to %b
        '%r': '%I:%M:%S %p',              // Replaced by the time in a.m. and p.m. notation
        '%R': '%H:%M',                    // Replaced by the time in 24-hour notation
        '%T': '%H:%M:%S',                 // Replaced by the time
        '%x': '%m/%d/%y',                 // Replaced by the locale's appropriate date representation
        '%X': '%H:%M:%S',                 // Replaced by the locale's appropriate time representation
        // Modified Conversion Specifiers
        '%Ec': '%c',                      // Replaced by the locale's alternative appropriate date and time representation.
        '%EC': '%C',                      // Replaced by the name of the base year (period) in the locale's alternative representation.
        '%Ex': '%m/%d/%y',                // Replaced by the locale's alternative date representation.
        '%EX': '%H:%M:%S',                // Replaced by the locale's alternative time representation.
        '%Ey': '%y',                      // Replaced by the offset from %EC (year only) in the locale's alternative representation.
        '%EY': '%Y',                      // Replaced by the full alternative year representation.
        '%Od': '%d',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading zeros if there is any alternative symbol for zero; otherwise, with leading <space> characters.
        '%Oe': '%e',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading <space> characters.
        '%OH': '%H',                      // Replaced by the hour (24-hour clock) using the locale's alternative numeric symbols.
        '%OI': '%I',                      // Replaced by the hour (12-hour clock) using the locale's alternative numeric symbols.
        '%Om': '%m',                      // Replaced by the month using the locale's alternative numeric symbols.
        '%OM': '%M',                      // Replaced by the minutes using the locale's alternative numeric symbols.
        '%OS': '%S',                      // Replaced by the seconds using the locale's alternative numeric symbols.
        '%Ou': '%u',                      // Replaced by the weekday as a number in the locale's alternative representation (Monday=1).
        '%OU': '%U',                      // Replaced by the week number of the year (Sunday as the first day of the week, rules corresponding to %U ) using the locale's alternative numeric symbols.
        '%OV': '%V',                      // Replaced by the week number of the year (Monday as the first day of the week, rules corresponding to %V ) using the locale's alternative numeric symbols.
        '%Ow': '%w',                      // Replaced by the number of the weekday (Sunday=0) using the locale's alternative numeric symbols.
        '%OW': '%W',                      // Replaced by the week number of the year (Monday as the first day of the week) using the locale's alternative numeric symbols.
        '%Oy': '%y',                      // Replaced by the year (offset from %C ) using the locale's alternative numeric symbols.
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
      }
  
      var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
      function leadingSomething(value, digits, character) {
        var str = typeof value === 'number' ? value.toString() : (value || '');
        while (str.length < digits) {
          str = character[0]+str;
        }
        return str;
      }
  
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, '0');
      }
  
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : (value > 0 ? 1 : 0);
        }
  
        var compare;
        if ((compare = sgn(date1.getFullYear()-date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth()-date2.getMonth())) === 0) {
            compare = sgn(date1.getDate()-date2.getDate());
          }
        }
        return compare;
      }
  
      function getFirstWeekStartDate(janFourth) {
          switch (janFourth.getDay()) {
            case 0: // Sunday
              return new Date(janFourth.getFullYear()-1, 11, 29);
            case 1: // Monday
              return janFourth;
            case 2: // Tuesday
              return new Date(janFourth.getFullYear(), 0, 3);
            case 3: // Wednesday
              return new Date(janFourth.getFullYear(), 0, 2);
            case 4: // Thursday
              return new Date(janFourth.getFullYear(), 0, 1);
            case 5: // Friday
              return new Date(janFourth.getFullYear()-1, 11, 31);
            case 6: // Saturday
              return new Date(janFourth.getFullYear()-1, 11, 30);
          }
      }
  
      function getWeekBasedYear(date) {
          var thisDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
          var janFourthNextYear = new Date(thisDate.getFullYear()+1, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            // this date is after the start of the first week of this year
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
              return thisDate.getFullYear()+1;
            } else {
              return thisDate.getFullYear();
            }
          } else {
            return thisDate.getFullYear()-1;
          }
      }
  
      var EXPANSION_RULES_2 = {
        '%a': function(date) {
          return WEEKDAYS[date.tm_wday].substring(0,3);
        },
        '%A': function(date) {
          return WEEKDAYS[date.tm_wday];
        },
        '%b': function(date) {
          return MONTHS[date.tm_mon].substring(0,3);
        },
        '%B': function(date) {
          return MONTHS[date.tm_mon];
        },
        '%C': function(date) {
          var year = date.tm_year+1900;
          return leadingNulls((year/100)|0,2);
        },
        '%d': function(date) {
          return leadingNulls(date.tm_mday, 2);
        },
        '%e': function(date) {
          return leadingSomething(date.tm_mday, 2, ' ');
        },
        '%g': function(date) {
          // %g, %G, and %V give values according to the ISO 8601:2000 standard week-based year.
          // In this system, weeks begin on a Monday and week 1 of the year is the week that includes
          // January 4th, which is also the week that includes the first Thursday of the year, and
          // is also the first week that contains at least four days in the year.
          // If the first Monday of January is the 2nd, 3rd, or 4th, the preceding days are part of
          // the last week of the preceding year; thus, for Saturday 2nd January 1999,
          // %G is replaced by 1998 and %V is replaced by 53. If December 29th, 30th,
          // or 31st is a Monday, it and any following days are part of week 1 of the following year.
          // Thus, for Tuesday 30th December 1997, %G is replaced by 1998 and %V is replaced by 01.
  
          return getWeekBasedYear(date).toString().substring(2);
        },
        '%G': function(date) {
          return getWeekBasedYear(date);
        },
        '%H': function(date) {
          return leadingNulls(date.tm_hour, 2);
        },
        '%I': function(date) {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        '%j': function(date) {
          // Day of the year (001-366)
          return leadingNulls(date.tm_mday+__arraySum(__isLeapYear(date.tm_year+1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon-1), 3);
        },
        '%m': function(date) {
          return leadingNulls(date.tm_mon+1, 2);
        },
        '%M': function(date) {
          return leadingNulls(date.tm_min, 2);
        },
        '%n': function() {
          return '\n';
        },
        '%p': function(date) {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return 'AM';
          } else {
            return 'PM';
          }
        },
        '%S': function(date) {
          return leadingNulls(date.tm_sec, 2);
        },
        '%t': function() {
          return '\t';
        },
        '%u': function(date) {
          return date.tm_wday || 7;
        },
        '%U': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Sunday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year+1900, 0, 1);
          var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7-janFirst.getDay());
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Sunday?
          if (compareByDay(firstSunday, endDate) < 0) {
            // calculate difference in days between first Sunday and endDate
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstSundayUntilEndJanuary = 31-firstSunday.getDate();
            var days = firstSundayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
  
          return compareByDay(firstSunday, janFirst) === 0 ? '01': '00';
        },
        '%V': function(date) {
          // Replaced by the week number of the year (Monday as the first day of the week)
          // as a decimal number [01,53]. If the week containing 1 January has four
          // or more days in the new year, then it is considered week 1.
          // Otherwise, it is the last week of the previous year, and the next week is week 1.
          // Both January 4th and the first Thursday of January are always in week 1. [ tm_year, tm_wday, tm_yday]
          var janFourthThisYear = new Date(date.tm_year+1900, 0, 4);
          var janFourthNextYear = new Date(date.tm_year+1901, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          var endDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
            // if given date is before this years first week, then it belongs to the 53rd week of last year
            return '53';
          }
  
          if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
            // if given date is after next years first week, then it belongs to the 01th week of next year
            return '01';
          }
  
          // given date is in between CW 01..53 of this calendar year
          var daysDifference;
          if (firstWeekStartThisYear.getFullYear() < date.tm_year+1900) {
            // first CW of this year starts last year
            daysDifference = date.tm_yday+32-firstWeekStartThisYear.getDate()
          } else {
            // first CW of this year starts this year
            daysDifference = date.tm_yday+1-firstWeekStartThisYear.getDate();
          }
          return leadingNulls(Math.ceil(daysDifference/7), 2);
        },
        '%w': function(date) {
          return date.tm_wday;
        },
        '%W': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Monday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year, 0, 1);
          var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7-janFirst.getDay()+1);
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Monday?
          if (compareByDay(firstMonday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstMondayUntilEndJanuary = 31-firstMonday.getDate();
            var days = firstMondayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
          return compareByDay(firstMonday, janFirst) === 0 ? '01': '00';
        },
        '%y': function(date) {
          // Replaced by the last two digits of the year as a decimal number [00,99]. [ tm_year]
          return (date.tm_year+1900).toString().substring(2);
        },
        '%Y': function(date) {
          // Replaced by the year as a decimal number (for example, 1997). [ tm_year]
          return date.tm_year+1900;
        },
        '%z': function(date) {
          // Replaced by the offset from UTC in the ISO 8601:2000 standard format ( +hhmm or -hhmm ).
          // For example, "-0430" means 4 hours 30 minutes behind UTC (west of Greenwich).
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          // convert from minutes into hhmm format (which means 60 minutes = 100 units)
          off = (off / 60)*100 + (off % 60);
          return (ahead ? '+' : '-') + String("0000" + off).slice(-4);
        },
        '%Z': function(date) {
          return date.tm_zone;
        },
        '%%': function() {
          return '%';
        }
      };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
        }
      }
  
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
  
      writeArrayToMemory(bytes, s);
      return bytes.length-1;
    }
  function _strftime_l(s, maxsize, format, tm) {
      return _strftime(s, maxsize, format, tm); // no locale support yet
    }

  var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;  // root node sets parent to itself
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev;
  };
  var readMode = 292/*292*/ | 73/*73*/;
  var writeMode = 146/*146*/;
  Object.defineProperties(FSNode.prototype, {
   read: {
    get: /** @this{FSNode} */function() {
     return (this.mode & readMode) === readMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= readMode : this.mode &= ~readMode;
    }
   },
   write: {
    get: /** @this{FSNode} */function() {
     return (this.mode & writeMode) === writeMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
   },
   isFolder: {
    get: /** @this{FSNode} */function() {
     return FS.isDir(this.mode);
    }
   },
   isDevice: {
    get: /** @this{FSNode} */function() {
     return FS.isChrdev(this.mode);
    }
   }
  });
  FS.FSNode = FSNode;
  FS.staticInit();;
ERRNO_CODES = {
      'EPERM': 63,
      'ENOENT': 44,
      'ESRCH': 71,
      'EINTR': 27,
      'EIO': 29,
      'ENXIO': 60,
      'E2BIG': 1,
      'ENOEXEC': 45,
      'EBADF': 8,
      'ECHILD': 12,
      'EAGAIN': 6,
      'EWOULDBLOCK': 6,
      'ENOMEM': 48,
      'EACCES': 2,
      'EFAULT': 21,
      'ENOTBLK': 105,
      'EBUSY': 10,
      'EEXIST': 20,
      'EXDEV': 75,
      'ENODEV': 43,
      'ENOTDIR': 54,
      'EISDIR': 31,
      'EINVAL': 28,
      'ENFILE': 41,
      'EMFILE': 33,
      'ENOTTY': 59,
      'ETXTBSY': 74,
      'EFBIG': 22,
      'ENOSPC': 51,
      'ESPIPE': 70,
      'EROFS': 69,
      'EMLINK': 34,
      'EPIPE': 64,
      'EDOM': 18,
      'ERANGE': 68,
      'ENOMSG': 49,
      'EIDRM': 24,
      'ECHRNG': 106,
      'EL2NSYNC': 156,
      'EL3HLT': 107,
      'EL3RST': 108,
      'ELNRNG': 109,
      'EUNATCH': 110,
      'ENOCSI': 111,
      'EL2HLT': 112,
      'EDEADLK': 16,
      'ENOLCK': 46,
      'EBADE': 113,
      'EBADR': 114,
      'EXFULL': 115,
      'ENOANO': 104,
      'EBADRQC': 103,
      'EBADSLT': 102,
      'EDEADLOCK': 16,
      'EBFONT': 101,
      'ENOSTR': 100,
      'ENODATA': 116,
      'ETIME': 117,
      'ENOSR': 118,
      'ENONET': 119,
      'ENOPKG': 120,
      'EREMOTE': 121,
      'ENOLINK': 47,
      'EADV': 122,
      'ESRMNT': 123,
      'ECOMM': 124,
      'EPROTO': 65,
      'EMULTIHOP': 36,
      'EDOTDOT': 125,
      'EBADMSG': 9,
      'ENOTUNIQ': 126,
      'EBADFD': 127,
      'EREMCHG': 128,
      'ELIBACC': 129,
      'ELIBBAD': 130,
      'ELIBSCN': 131,
      'ELIBMAX': 132,
      'ELIBEXEC': 133,
      'ENOSYS': 52,
      'ENOTEMPTY': 55,
      'ENAMETOOLONG': 37,
      'ELOOP': 32,
      'EOPNOTSUPP': 138,
      'EPFNOSUPPORT': 139,
      'ECONNRESET': 15,
      'ENOBUFS': 42,
      'EAFNOSUPPORT': 5,
      'EPROTOTYPE': 67,
      'ENOTSOCK': 57,
      'ENOPROTOOPT': 50,
      'ESHUTDOWN': 140,
      'ECONNREFUSED': 14,
      'EADDRINUSE': 3,
      'ECONNABORTED': 13,
      'ENETUNREACH': 40,
      'ENETDOWN': 38,
      'ETIMEDOUT': 73,
      'EHOSTDOWN': 142,
      'EHOSTUNREACH': 23,
      'EINPROGRESS': 26,
      'EALREADY': 7,
      'EDESTADDRREQ': 17,
      'EMSGSIZE': 35,
      'EPROTONOSUPPORT': 66,
      'ESOCKTNOSUPPORT': 137,
      'EADDRNOTAVAIL': 4,
      'ENETRESET': 39,
      'EISCONN': 30,
      'ENOTCONN': 53,
      'ETOOMANYREFS': 141,
      'EUSERS': 136,
      'EDQUOT': 19,
      'ESTALE': 72,
      'ENOTSUP': 138,
      'ENOMEDIUM': 148,
      'EILSEQ': 25,
      'EOVERFLOW': 61,
      'ECANCELED': 11,
      'ENOTRECOVERABLE': 56,
      'EOWNERDEAD': 62,
      'ESTRPIPE': 135,
    };;
embind_init_charCodes();
BindingError = Module['BindingError'] = extendError(Error, 'BindingError');;
InternalError = Module['InternalError'] = extendError(Error, 'InternalError');;
init_emval();;
var GLctx;;
for (var i = 0; i < 32; ++i) tempFixedLengthArray.push(new Array(i));;
var miniTempWebGLFloatBuffersStorage = new Float32Array(288);
  for (/**@suppress{duplicate}*/var i = 0; i < 288; ++i) {
  miniTempWebGLFloatBuffers[i] = miniTempWebGLFloatBuffersStorage.subarray(0, i+1);
  }
  ;
var __miniTempWebGLIntBuffersStorage = new Int32Array(288);
  for (/**@suppress{duplicate}*/var i = 0; i < 288; ++i) {
  __miniTempWebGLIntBuffers[i] = __miniTempWebGLIntBuffersStorage.subarray(0, i+1);
  }
  ;
var ASSERTIONS = true;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


var asmLibraryArg = {
  "__cxa_atexit": ___cxa_atexit,
  "__sys_fcntl64": ___sys_fcntl64,
  "__sys_fstat64": ___sys_fstat64,
  "__sys_getpid": ___sys_getpid,
  "__sys_ioctl": ___sys_ioctl,
  "__sys_mmap2": ___sys_mmap2,
  "__sys_munmap": ___sys_munmap,
  "__sys_open": ___sys_open,
  "__sys_stat64": ___sys_stat64,
  "_embind_register_bigint": __embind_register_bigint,
  "_embind_register_bool": __embind_register_bool,
  "_embind_register_emval": __embind_register_emval,
  "_embind_register_float": __embind_register_float,
  "_embind_register_integer": __embind_register_integer,
  "_embind_register_memory_view": __embind_register_memory_view,
  "_embind_register_std_string": __embind_register_std_string,
  "_embind_register_std_wstring": __embind_register_std_wstring,
  "_embind_register_void": __embind_register_void,
  "_emscripten_throw_longjmp": __emscripten_throw_longjmp,
  "abort": _abort,
  "clock_gettime": _clock_gettime,
  "emscripten_asm_const_int": _emscripten_asm_const_int,
  "emscripten_glActiveTexture": _emscripten_glActiveTexture,
  "emscripten_glAttachShader": _emscripten_glAttachShader,
  "emscripten_glBindAttribLocation": _emscripten_glBindAttribLocation,
  "emscripten_glBindBuffer": _emscripten_glBindBuffer,
  "emscripten_glBindFramebuffer": _emscripten_glBindFramebuffer,
  "emscripten_glBindRenderbuffer": _emscripten_glBindRenderbuffer,
  "emscripten_glBindSampler": _emscripten_glBindSampler,
  "emscripten_glBindTexture": _emscripten_glBindTexture,
  "emscripten_glBindVertexArray": _emscripten_glBindVertexArray,
  "emscripten_glBindVertexArrayOES": _emscripten_glBindVertexArrayOES,
  "emscripten_glBlendColor": _emscripten_glBlendColor,
  "emscripten_glBlendEquation": _emscripten_glBlendEquation,
  "emscripten_glBlendFunc": _emscripten_glBlendFunc,
  "emscripten_glBlitFramebuffer": _emscripten_glBlitFramebuffer,
  "emscripten_glBufferData": _emscripten_glBufferData,
  "emscripten_glBufferSubData": _emscripten_glBufferSubData,
  "emscripten_glCheckFramebufferStatus": _emscripten_glCheckFramebufferStatus,
  "emscripten_glClear": _emscripten_glClear,
  "emscripten_glClearColor": _emscripten_glClearColor,
  "emscripten_glClearStencil": _emscripten_glClearStencil,
  "emscripten_glClientWaitSync": _emscripten_glClientWaitSync,
  "emscripten_glColorMask": _emscripten_glColorMask,
  "emscripten_glCompileShader": _emscripten_glCompileShader,
  "emscripten_glCompressedTexImage2D": _emscripten_glCompressedTexImage2D,
  "emscripten_glCompressedTexSubImage2D": _emscripten_glCompressedTexSubImage2D,
  "emscripten_glCopyBufferSubData": _emscripten_glCopyBufferSubData,
  "emscripten_glCopyTexSubImage2D": _emscripten_glCopyTexSubImage2D,
  "emscripten_glCreateProgram": _emscripten_glCreateProgram,
  "emscripten_glCreateShader": _emscripten_glCreateShader,
  "emscripten_glCullFace": _emscripten_glCullFace,
  "emscripten_glDeleteBuffers": _emscripten_glDeleteBuffers,
  "emscripten_glDeleteFramebuffers": _emscripten_glDeleteFramebuffers,
  "emscripten_glDeleteProgram": _emscripten_glDeleteProgram,
  "emscripten_glDeleteRenderbuffers": _emscripten_glDeleteRenderbuffers,
  "emscripten_glDeleteSamplers": _emscripten_glDeleteSamplers,
  "emscripten_glDeleteShader": _emscripten_glDeleteShader,
  "emscripten_glDeleteSync": _emscripten_glDeleteSync,
  "emscripten_glDeleteTextures": _emscripten_glDeleteTextures,
  "emscripten_glDeleteVertexArrays": _emscripten_glDeleteVertexArrays,
  "emscripten_glDeleteVertexArraysOES": _emscripten_glDeleteVertexArraysOES,
  "emscripten_glDepthMask": _emscripten_glDepthMask,
  "emscripten_glDisable": _emscripten_glDisable,
  "emscripten_glDisableVertexAttribArray": _emscripten_glDisableVertexAttribArray,
  "emscripten_glDrawArrays": _emscripten_glDrawArrays,
  "emscripten_glDrawArraysInstanced": _emscripten_glDrawArraysInstanced,
  "emscripten_glDrawArraysInstancedBaseInstanceWEBGL": _emscripten_glDrawArraysInstancedBaseInstanceWEBGL,
  "emscripten_glDrawBuffers": _emscripten_glDrawBuffers,
  "emscripten_glDrawElements": _emscripten_glDrawElements,
  "emscripten_glDrawElementsInstanced": _emscripten_glDrawElementsInstanced,
  "emscripten_glDrawElementsInstancedBaseVertexBaseInstanceWEBGL": _emscripten_glDrawElementsInstancedBaseVertexBaseInstanceWEBGL,
  "emscripten_glDrawRangeElements": _emscripten_glDrawRangeElements,
  "emscripten_glEnable": _emscripten_glEnable,
  "emscripten_glEnableVertexAttribArray": _emscripten_glEnableVertexAttribArray,
  "emscripten_glFenceSync": _emscripten_glFenceSync,
  "emscripten_glFinish": _emscripten_glFinish,
  "emscripten_glFlush": _emscripten_glFlush,
  "emscripten_glFramebufferRenderbuffer": _emscripten_glFramebufferRenderbuffer,
  "emscripten_glFramebufferTexture2D": _emscripten_glFramebufferTexture2D,
  "emscripten_glFrontFace": _emscripten_glFrontFace,
  "emscripten_glGenBuffers": _emscripten_glGenBuffers,
  "emscripten_glGenFramebuffers": _emscripten_glGenFramebuffers,
  "emscripten_glGenRenderbuffers": _emscripten_glGenRenderbuffers,
  "emscripten_glGenSamplers": _emscripten_glGenSamplers,
  "emscripten_glGenTextures": _emscripten_glGenTextures,
  "emscripten_glGenVertexArrays": _emscripten_glGenVertexArrays,
  "emscripten_glGenVertexArraysOES": _emscripten_glGenVertexArraysOES,
  "emscripten_glGenerateMipmap": _emscripten_glGenerateMipmap,
  "emscripten_glGetBufferParameteriv": _emscripten_glGetBufferParameteriv,
  "emscripten_glGetError": _emscripten_glGetError,
  "emscripten_glGetFloatv": _emscripten_glGetFloatv,
  "emscripten_glGetFramebufferAttachmentParameteriv": _emscripten_glGetFramebufferAttachmentParameteriv,
  "emscripten_glGetIntegerv": _emscripten_glGetIntegerv,
  "emscripten_glGetProgramInfoLog": _emscripten_glGetProgramInfoLog,
  "emscripten_glGetProgramiv": _emscripten_glGetProgramiv,
  "emscripten_glGetRenderbufferParameteriv": _emscripten_glGetRenderbufferParameteriv,
  "emscripten_glGetShaderInfoLog": _emscripten_glGetShaderInfoLog,
  "emscripten_glGetShaderPrecisionFormat": _emscripten_glGetShaderPrecisionFormat,
  "emscripten_glGetShaderiv": _emscripten_glGetShaderiv,
  "emscripten_glGetString": _emscripten_glGetString,
  "emscripten_glGetStringi": _emscripten_glGetStringi,
  "emscripten_glGetUniformLocation": _emscripten_glGetUniformLocation,
  "emscripten_glInvalidateFramebuffer": _emscripten_glInvalidateFramebuffer,
  "emscripten_glInvalidateSubFramebuffer": _emscripten_glInvalidateSubFramebuffer,
  "emscripten_glIsSync": _emscripten_glIsSync,
  "emscripten_glIsTexture": _emscripten_glIsTexture,
  "emscripten_glLineWidth": _emscripten_glLineWidth,
  "emscripten_glLinkProgram": _emscripten_glLinkProgram,
  "emscripten_glMultiDrawArraysInstancedBaseInstanceWEBGL": _emscripten_glMultiDrawArraysInstancedBaseInstanceWEBGL,
  "emscripten_glMultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL": _emscripten_glMultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL,
  "emscripten_glPixelStorei": _emscripten_glPixelStorei,
  "emscripten_glReadBuffer": _emscripten_glReadBuffer,
  "emscripten_glReadPixels": _emscripten_glReadPixels,
  "emscripten_glRenderbufferStorage": _emscripten_glRenderbufferStorage,
  "emscripten_glRenderbufferStorageMultisample": _emscripten_glRenderbufferStorageMultisample,
  "emscripten_glSamplerParameterf": _emscripten_glSamplerParameterf,
  "emscripten_glSamplerParameteri": _emscripten_glSamplerParameteri,
  "emscripten_glSamplerParameteriv": _emscripten_glSamplerParameteriv,
  "emscripten_glScissor": _emscripten_glScissor,
  "emscripten_glShaderSource": _emscripten_glShaderSource,
  "emscripten_glStencilFunc": _emscripten_glStencilFunc,
  "emscripten_glStencilFuncSeparate": _emscripten_glStencilFuncSeparate,
  "emscripten_glStencilMask": _emscripten_glStencilMask,
  "emscripten_glStencilMaskSeparate": _emscripten_glStencilMaskSeparate,
  "emscripten_glStencilOp": _emscripten_glStencilOp,
  "emscripten_glStencilOpSeparate": _emscripten_glStencilOpSeparate,
  "emscripten_glTexImage2D": _emscripten_glTexImage2D,
  "emscripten_glTexParameterf": _emscripten_glTexParameterf,
  "emscripten_glTexParameterfv": _emscripten_glTexParameterfv,
  "emscripten_glTexParameteri": _emscripten_glTexParameteri,
  "emscripten_glTexParameteriv": _emscripten_glTexParameteriv,
  "emscripten_glTexStorage2D": _emscripten_glTexStorage2D,
  "emscripten_glTexSubImage2D": _emscripten_glTexSubImage2D,
  "emscripten_glUniform1f": _emscripten_glUniform1f,
  "emscripten_glUniform1fv": _emscripten_glUniform1fv,
  "emscripten_glUniform1i": _emscripten_glUniform1i,
  "emscripten_glUniform1iv": _emscripten_glUniform1iv,
  "emscripten_glUniform2f": _emscripten_glUniform2f,
  "emscripten_glUniform2fv": _emscripten_glUniform2fv,
  "emscripten_glUniform2i": _emscripten_glUniform2i,
  "emscripten_glUniform2iv": _emscripten_glUniform2iv,
  "emscripten_glUniform3f": _emscripten_glUniform3f,
  "emscripten_glUniform3fv": _emscripten_glUniform3fv,
  "emscripten_glUniform3i": _emscripten_glUniform3i,
  "emscripten_glUniform3iv": _emscripten_glUniform3iv,
  "emscripten_glUniform4f": _emscripten_glUniform4f,
  "emscripten_glUniform4fv": _emscripten_glUniform4fv,
  "emscripten_glUniform4i": _emscripten_glUniform4i,
  "emscripten_glUniform4iv": _emscripten_glUniform4iv,
  "emscripten_glUniformMatrix2fv": _emscripten_glUniformMatrix2fv,
  "emscripten_glUniformMatrix3fv": _emscripten_glUniformMatrix3fv,
  "emscripten_glUniformMatrix4fv": _emscripten_glUniformMatrix4fv,
  "emscripten_glUseProgram": _emscripten_glUseProgram,
  "emscripten_glVertexAttrib1f": _emscripten_glVertexAttrib1f,
  "emscripten_glVertexAttrib2fv": _emscripten_glVertexAttrib2fv,
  "emscripten_glVertexAttrib3fv": _emscripten_glVertexAttrib3fv,
  "emscripten_glVertexAttrib4fv": _emscripten_glVertexAttrib4fv,
  "emscripten_glVertexAttribDivisor": _emscripten_glVertexAttribDivisor,
  "emscripten_glVertexAttribIPointer": _emscripten_glVertexAttribIPointer,
  "emscripten_glVertexAttribPointer": _emscripten_glVertexAttribPointer,
  "emscripten_glViewport": _emscripten_glViewport,
  "emscripten_glWaitSync": _emscripten_glWaitSync,
  "emscripten_memcpy_big": _emscripten_memcpy_big,
  "emscripten_resize_heap": _emscripten_resize_heap,
  "environ_get": _environ_get,
  "environ_sizes_get": _environ_sizes_get,
  "exit": _exit,
  "fd_close": _fd_close,
  "fd_fdstat_get": _fd_fdstat_get,
  "fd_pread": _fd_pread,
  "fd_read": _fd_read,
  "fd_seek": _fd_seek,
  "fd_write": _fd_write,
  "getTempRet0": _getTempRet0,
  "gettimeofday": _gettimeofday,
  "invoke_ii": invoke_ii,
  "invoke_iii": invoke_iii,
  "invoke_iiii": invoke_iiii,
  "invoke_iiiii": invoke_iiiii,
  "invoke_iiiiii": invoke_iiiiii,
  "invoke_iiiiiii": invoke_iiiiiii,
  "invoke_iiiiiiiiii": invoke_iiiiiiiiii,
  "invoke_v": invoke_v,
  "invoke_vi": invoke_vi,
  "invoke_vii": invoke_vii,
  "invoke_viii": invoke_viii,
  "invoke_viiii": invoke_viiii,
  "invoke_viiiii": invoke_viiiii,
  "invoke_viiiiii": invoke_viiiiii,
  "invoke_viiiiiiiii": invoke_viiiiiiiii,
  "setTempRet0": _setTempRet0,
  "strftime_l": _strftime_l
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlobBuilder__1nGetFinalizer = Module["org_jetbrains_skia_TextBlobBuilder__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_TextBlobBuilder__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlobBuilder__1nMake = Module["org_jetbrains_skia_TextBlobBuilder__1nMake"] = createExportWrapper("org_jetbrains_skia_TextBlobBuilder__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlobBuilder__1nBuild = Module["org_jetbrains_skia_TextBlobBuilder__1nBuild"] = createExportWrapper("org_jetbrains_skia_TextBlobBuilder__1nBuild");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlobBuilder__1nAppendRun = Module["org_jetbrains_skia_TextBlobBuilder__1nAppendRun"] = createExportWrapper("org_jetbrains_skia_TextBlobBuilder__1nAppendRun");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlobBuilder__1nAppendRunPosH = Module["org_jetbrains_skia_TextBlobBuilder__1nAppendRunPosH"] = createExportWrapper("org_jetbrains_skia_TextBlobBuilder__1nAppendRunPosH");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlobBuilder__1nAppendRunPos = Module["org_jetbrains_skia_TextBlobBuilder__1nAppendRunPos"] = createExportWrapper("org_jetbrains_skia_TextBlobBuilder__1nAppendRunPos");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlobBuilder__1nAppendRunRSXform = Module["org_jetbrains_skia_TextBlobBuilder__1nAppendRunRSXform"] = createExportWrapper("org_jetbrains_skia_TextBlobBuilder__1nAppendRunRSXform");

/** @type {function(...*):?} */
var org_jetbrains_skia_PaintFilterCanvas__1nInit = Module["org_jetbrains_skia_PaintFilterCanvas__1nInit"] = createExportWrapper("org_jetbrains_skia_PaintFilterCanvas__1nInit");

/** @type {function(...*):?} */
var org_jetbrains_skia_PaintFilterCanvas__1nMake = Module["org_jetbrains_skia_PaintFilterCanvas__1nMake"] = createExportWrapper("org_jetbrains_skia_PaintFilterCanvas__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_PaintFilterCanvas__1nGetOnFilterPaint = Module["org_jetbrains_skia_PaintFilterCanvas__1nGetOnFilterPaint"] = createExportWrapper("org_jetbrains_skia_PaintFilterCanvas__1nGetOnFilterPaint");

/** @type {function(...*):?} */
var org_jetbrains_skia_PictureRecorder__1nMake = Module["org_jetbrains_skia_PictureRecorder__1nMake"] = createExportWrapper("org_jetbrains_skia_PictureRecorder__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_PictureRecorder__1nGetFinalizer = Module["org_jetbrains_skia_PictureRecorder__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_PictureRecorder__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_PictureRecorder__1nBeginRecording = Module["org_jetbrains_skia_PictureRecorder__1nBeginRecording"] = createExportWrapper("org_jetbrains_skia_PictureRecorder__1nBeginRecording");

/** @type {function(...*):?} */
var org_jetbrains_skia_PictureRecorder__1nGetRecordingCanvas = Module["org_jetbrains_skia_PictureRecorder__1nGetRecordingCanvas"] = createExportWrapper("org_jetbrains_skia_PictureRecorder__1nGetRecordingCanvas");

/** @type {function(...*):?} */
var org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture = Module["org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture"] = createExportWrapper("org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture");

/** @type {function(...*):?} */
var org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPictureWithCull = Module["org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPictureWithCull"] = createExportWrapper("org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPictureWithCull");

/** @type {function(...*):?} */
var org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsDrawable = Module["org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsDrawable"] = createExportWrapper("org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsDrawable");

/** @type {function(...*):?} */
var org_jetbrains_skia_Drawable__1nGetFinalizer = Module["org_jetbrains_skia_Drawable__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_Drawable__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_Drawable__1nSetBounds = Module["org_jetbrains_skia_Drawable__1nSetBounds"] = createExportWrapper("org_jetbrains_skia_Drawable__1nSetBounds");

/** @type {function(...*):?} */
var org_jetbrains_skia_Drawable__1nGetBounds = Module["org_jetbrains_skia_Drawable__1nGetBounds"] = createExportWrapper("org_jetbrains_skia_Drawable__1nGetBounds");

/** @type {function(...*):?} */
var org_jetbrains_skia_Drawable__1nGetOnDrawCanvas = Module["org_jetbrains_skia_Drawable__1nGetOnDrawCanvas"] = createExportWrapper("org_jetbrains_skia_Drawable__1nGetOnDrawCanvas");

/** @type {function(...*):?} */
var org_jetbrains_skia_Drawable__1nMake = Module["org_jetbrains_skia_Drawable__1nMake"] = createExportWrapper("org_jetbrains_skia_Drawable__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_Drawable__1nInit = Module["org_jetbrains_skia_Drawable__1nInit"] = createExportWrapper("org_jetbrains_skia_Drawable__1nInit");

/** @type {function(...*):?} */
var org_jetbrains_skia_Drawable__1nDraw = Module["org_jetbrains_skia_Drawable__1nDraw"] = createExportWrapper("org_jetbrains_skia_Drawable__1nDraw");

/** @type {function(...*):?} */
var org_jetbrains_skia_Drawable__1nMakePictureSnapshot = Module["org_jetbrains_skia_Drawable__1nMakePictureSnapshot"] = createExportWrapper("org_jetbrains_skia_Drawable__1nMakePictureSnapshot");

/** @type {function(...*):?} */
var org_jetbrains_skia_Drawable__1nGetGenerationId = Module["org_jetbrains_skia_Drawable__1nGetGenerationId"] = createExportWrapper("org_jetbrains_skia_Drawable__1nGetGenerationId");

/** @type {function(...*):?} */
var org_jetbrains_skia_Drawable__1nNotifyDrawingChanged = Module["org_jetbrains_skia_Drawable__1nNotifyDrawingChanged"] = createExportWrapper("org_jetbrains_skia_Drawable__1nNotifyDrawingChanged");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_TextBlobBuilderRunHandler__1nGetFinalizer = Module["org_jetbrains_skia_shaper_TextBlobBuilderRunHandler__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_shaper_TextBlobBuilderRunHandler__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_TextBlobBuilderRunHandler__1nMake = Module["org_jetbrains_skia_shaper_TextBlobBuilderRunHandler__1nMake"] = createExportWrapper("org_jetbrains_skia_shaper_TextBlobBuilderRunHandler__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_TextBlobBuilderRunHandler__1nMakeBlob = Module["org_jetbrains_skia_shaper_TextBlobBuilderRunHandler__1nMakeBlob"] = createExportWrapper("org_jetbrains_skia_shaper_TextBlobBuilderRunHandler__1nMakeBlob");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_ManagedRunIterator__1nGetFinalizer = Module["org_jetbrains_skia_shaper_ManagedRunIterator__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_shaper_ManagedRunIterator__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_ManagedRunIterator__1nConsume = Module["org_jetbrains_skia_shaper_ManagedRunIterator__1nConsume"] = createExportWrapper("org_jetbrains_skia_shaper_ManagedRunIterator__1nConsume");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_ManagedRunIterator__1nGetEndOfCurrentRun = Module["org_jetbrains_skia_shaper_ManagedRunIterator__1nGetEndOfCurrentRun"] = createExportWrapper("org_jetbrains_skia_shaper_ManagedRunIterator__1nGetEndOfCurrentRun");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_ManagedRunIterator__1nIsAtEnd = Module["org_jetbrains_skia_shaper_ManagedRunIterator__1nIsAtEnd"] = createExportWrapper("org_jetbrains_skia_shaper_ManagedRunIterator__1nIsAtEnd");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_HbIcuScriptRunIterator__1nMake = Module["org_jetbrains_skia_shaper_HbIcuScriptRunIterator__1nMake"] = createExportWrapper("org_jetbrains_skia_shaper_HbIcuScriptRunIterator__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_HbIcuScriptRunIterator__1nGetCurrentScriptTag = Module["org_jetbrains_skia_shaper_HbIcuScriptRunIterator__1nGetCurrentScriptTag"] = createExportWrapper("org_jetbrains_skia_shaper_HbIcuScriptRunIterator__1nGetCurrentScriptTag");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper__1nGetFinalizer = Module["org_jetbrains_skia_shaper_Shaper__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper__1nMakePrimitive = Module["org_jetbrains_skia_shaper_Shaper__1nMakePrimitive"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper__1nMakePrimitive");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper__1nMakeShaperDrivenWrapper = Module["org_jetbrains_skia_shaper_Shaper__1nMakeShaperDrivenWrapper"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper__1nMakeShaperDrivenWrapper");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper__1nMakeShapeThenWrap = Module["org_jetbrains_skia_shaper_Shaper__1nMakeShapeThenWrap"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper__1nMakeShapeThenWrap");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper__1nMakeShapeDontWrapOrReorder = Module["org_jetbrains_skia_shaper_Shaper__1nMakeShapeDontWrapOrReorder"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper__1nMakeShapeDontWrapOrReorder");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper__1nMakeCoreText = Module["org_jetbrains_skia_shaper_Shaper__1nMakeCoreText"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper__1nMakeCoreText");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper__1nMake = Module["org_jetbrains_skia_shaper_Shaper__1nMake"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper__1nShapeBlob = Module["org_jetbrains_skia_shaper_Shaper__1nShapeBlob"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper__1nShapeBlob");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper__1nShapeLine = Module["org_jetbrains_skia_shaper_Shaper__1nShapeLine"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper__1nShapeLine");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper__1nShape = Module["org_jetbrains_skia_shaper_Shaper__1nShape"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper__1nShape");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper_RunIterator_1nGetFinalizer = Module["org_jetbrains_skia_shaper_Shaper_RunIterator_1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper_RunIterator_1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper_RunIterator_1nCreateRunIterator = Module["org_jetbrains_skia_shaper_Shaper_RunIterator_1nCreateRunIterator"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper_RunIterator_1nCreateRunIterator");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper_RunIterator_1nInitRunIterator = Module["org_jetbrains_skia_shaper_Shaper_RunIterator_1nInitRunIterator"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper_RunIterator_1nInitRunIterator");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetFinalizer = Module["org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetRunInfo = Module["org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetRunInfo"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetRunInfo");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetGlyphs = Module["org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetGlyphs"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetGlyphs");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetPositions = Module["org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetPositions"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetPositions");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetClusters = Module["org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetClusters"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper_RunHandler_1nGetClusters");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper_RunHandler_1nSetOffset = Module["org_jetbrains_skia_shaper_Shaper_RunHandler_1nSetOffset"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper_RunHandler_1nSetOffset");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper_RunHandler_1nCreate = Module["org_jetbrains_skia_shaper_Shaper_RunHandler_1nCreate"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper_RunHandler_1nCreate");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_Shaper_RunHandler_1nInit = Module["org_jetbrains_skia_shaper_Shaper_RunHandler_1nInit"] = createExportWrapper("org_jetbrains_skia_shaper_Shaper_RunHandler_1nInit");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_FontMgrRunIterator__1nMake = Module["org_jetbrains_skia_shaper_FontMgrRunIterator__1nMake"] = createExportWrapper("org_jetbrains_skia_shaper_FontMgrRunIterator__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_FontMgrRunIterator__1nGetCurrentFont = Module["org_jetbrains_skia_shaper_FontMgrRunIterator__1nGetCurrentFont"] = createExportWrapper("org_jetbrains_skia_shaper_FontMgrRunIterator__1nGetCurrentFont");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_IcuBidiRunIterator__1nMake = Module["org_jetbrains_skia_shaper_IcuBidiRunIterator__1nMake"] = createExportWrapper("org_jetbrains_skia_shaper_IcuBidiRunIterator__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_shaper_IcuBidiRunIterator__1nGetCurrentLevel = Module["org_jetbrains_skia_shaper_IcuBidiRunIterator__1nGetCurrentLevel"] = createExportWrapper("org_jetbrains_skia_shaper_IcuBidiRunIterator__1nGetCurrentLevel");

/** @type {function(...*):?} */
var org_jetbrains_skiko_RenderTargetsKt_makeGLRenderTargetNative = Module["org_jetbrains_skiko_RenderTargetsKt_makeGLRenderTargetNative"] = createExportWrapper("org_jetbrains_skiko_RenderTargetsKt_makeGLRenderTargetNative");

/** @type {function(...*):?} */
var org_jetbrains_skiko_RenderTargetsKt_makeGLContextNative = Module["org_jetbrains_skiko_RenderTargetsKt_makeGLContextNative"] = createExportWrapper("org_jetbrains_skiko_RenderTargetsKt_makeGLContextNative");

/** @type {function(...*):?} */
var org_jetbrains_skiko_RenderTargetsKt_makeMetalRenderTargetNative = Module["org_jetbrains_skiko_RenderTargetsKt_makeMetalRenderTargetNative"] = createExportWrapper("org_jetbrains_skiko_RenderTargetsKt_makeMetalRenderTargetNative");

/** @type {function(...*):?} */
var org_jetbrains_skiko_RenderTargetsKt_makeMetalContextNative = Module["org_jetbrains_skiko_RenderTargetsKt_makeMetalContextNative"] = createExportWrapper("org_jetbrains_skiko_RenderTargetsKt_makeMetalContextNative");

/** @type {function(...*):?} */
var org_jetbrains_skia_PixelRef__1nGetWidth = Module["org_jetbrains_skia_PixelRef__1nGetWidth"] = createExportWrapper("org_jetbrains_skia_PixelRef__1nGetWidth");

/** @type {function(...*):?} */
var org_jetbrains_skia_PixelRef__1nGetHeight = Module["org_jetbrains_skia_PixelRef__1nGetHeight"] = createExportWrapper("org_jetbrains_skia_PixelRef__1nGetHeight");

/** @type {function(...*):?} */
var org_jetbrains_skia_PixelRef__1nGetRowBytes = Module["org_jetbrains_skia_PixelRef__1nGetRowBytes"] = createExportWrapper("org_jetbrains_skia_PixelRef__1nGetRowBytes");

/** @type {function(...*):?} */
var org_jetbrains_skia_PixelRef__1nGetGenerationId = Module["org_jetbrains_skia_PixelRef__1nGetGenerationId"] = createExportWrapper("org_jetbrains_skia_PixelRef__1nGetGenerationId");

/** @type {function(...*):?} */
var org_jetbrains_skia_PixelRef__1nNotifyPixelsChanged = Module["org_jetbrains_skia_PixelRef__1nNotifyPixelsChanged"] = createExportWrapper("org_jetbrains_skia_PixelRef__1nNotifyPixelsChanged");

/** @type {function(...*):?} */
var org_jetbrains_skia_PixelRef__1nIsImmutable = Module["org_jetbrains_skia_PixelRef__1nIsImmutable"] = createExportWrapper("org_jetbrains_skia_PixelRef__1nIsImmutable");

/** @type {function(...*):?} */
var org_jetbrains_skia_PixelRef__1nSetImmutable = Module["org_jetbrains_skia_PixelRef__1nSetImmutable"] = createExportWrapper("org_jetbrains_skia_PixelRef__1nSetImmutable");

/** @type {function(...*):?} */
var org_jetbrains_skia_Image__1nMakeRaster = Module["org_jetbrains_skia_Image__1nMakeRaster"] = createExportWrapper("org_jetbrains_skia_Image__1nMakeRaster");

/** @type {function(...*):?} */
var org_jetbrains_skia_Image__1nMakeRasterData = Module["org_jetbrains_skia_Image__1nMakeRasterData"] = createExportWrapper("org_jetbrains_skia_Image__1nMakeRasterData");

/** @type {function(...*):?} */
var org_jetbrains_skia_Image__1nMakeFromBitmap = Module["org_jetbrains_skia_Image__1nMakeFromBitmap"] = createExportWrapper("org_jetbrains_skia_Image__1nMakeFromBitmap");

/** @type {function(...*):?} */
var org_jetbrains_skia_Image__1nMakeFromPixmap = Module["org_jetbrains_skia_Image__1nMakeFromPixmap"] = createExportWrapper("org_jetbrains_skia_Image__1nMakeFromPixmap");

/** @type {function(...*):?} */
var org_jetbrains_skia_Image__1nMakeFromEncoded = Module["org_jetbrains_skia_Image__1nMakeFromEncoded"] = createExportWrapper("org_jetbrains_skia_Image__1nMakeFromEncoded");

/** @type {function(...*):?} */
var org_jetbrains_skia_Image__1nGetImageInfo = Module["org_jetbrains_skia_Image__1nGetImageInfo"] = createExportWrapper("org_jetbrains_skia_Image__1nGetImageInfo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Image__1nEncodeToData = Module["org_jetbrains_skia_Image__1nEncodeToData"] = createExportWrapper("org_jetbrains_skia_Image__1nEncodeToData");

/** @type {function(...*):?} */
var org_jetbrains_skia_Image__1nMakeShader = Module["org_jetbrains_skia_Image__1nMakeShader"] = createExportWrapper("org_jetbrains_skia_Image__1nMakeShader");

/** @type {function(...*):?} */
var org_jetbrains_skia_Image__1nPeekPixels = Module["org_jetbrains_skia_Image__1nPeekPixels"] = createExportWrapper("org_jetbrains_skia_Image__1nPeekPixels");

/** @type {function(...*):?} */
var org_jetbrains_skia_Image__1nPeekPixelsToPixmap = Module["org_jetbrains_skia_Image__1nPeekPixelsToPixmap"] = createExportWrapper("org_jetbrains_skia_Image__1nPeekPixelsToPixmap");

/** @type {function(...*):?} */
var org_jetbrains_skia_Image__1nReadPixelsBitmap = Module["org_jetbrains_skia_Image__1nReadPixelsBitmap"] = createExportWrapper("org_jetbrains_skia_Image__1nReadPixelsBitmap");

/** @type {function(...*):?} */
var org_jetbrains_skia_Image__1nReadPixelsPixmap = Module["org_jetbrains_skia_Image__1nReadPixelsPixmap"] = createExportWrapper("org_jetbrains_skia_Image__1nReadPixelsPixmap");

/** @type {function(...*):?} */
var org_jetbrains_skia_Image__1nScalePixels = Module["org_jetbrains_skia_Image__1nScalePixels"] = createExportWrapper("org_jetbrains_skia_Image__1nScalePixels");

/** @type {function(...*):?} */
var org_jetbrains_skia_OutputWStream__1nGetFinalizer = Module["org_jetbrains_skia_OutputWStream__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_OutputWStream__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_OutputWStream__1nMake = Module["org_jetbrains_skia_OutputWStream__1nMake"] = createExportWrapper("org_jetbrains_skia_OutputWStream__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nGetFinalizer = Module["org_jetbrains_skia_Canvas__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_Canvas__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nMakeFromBitmap = Module["org_jetbrains_skia_Canvas__1nMakeFromBitmap"] = createExportWrapper("org_jetbrains_skia_Canvas__1nMakeFromBitmap");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawPoint = Module["org_jetbrains_skia_Canvas__1nDrawPoint"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawPoint");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawPoints = Module["org_jetbrains_skia_Canvas__1nDrawPoints"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawPoints");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawLine = Module["org_jetbrains_skia_Canvas__1nDrawLine"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawLine");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawArc = Module["org_jetbrains_skia_Canvas__1nDrawArc"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawArc");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawRect = Module["org_jetbrains_skia_Canvas__1nDrawRect"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawOval = Module["org_jetbrains_skia_Canvas__1nDrawOval"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawOval");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawRRect = Module["org_jetbrains_skia_Canvas__1nDrawRRect"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawRRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawDRRect = Module["org_jetbrains_skia_Canvas__1nDrawDRRect"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawDRRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawPath = Module["org_jetbrains_skia_Canvas__1nDrawPath"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawPath");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawImageRect = Module["org_jetbrains_skia_Canvas__1nDrawImageRect"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawImageRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawImageNine = Module["org_jetbrains_skia_Canvas__1nDrawImageNine"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawImageNine");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawRegion = Module["org_jetbrains_skia_Canvas__1nDrawRegion"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawRegion");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawString = Module["org_jetbrains_skia_Canvas__1nDrawString"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawString");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawTextBlob = Module["org_jetbrains_skia_Canvas__1nDrawTextBlob"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawTextBlob");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawPicture = Module["org_jetbrains_skia_Canvas__1nDrawPicture"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawPicture");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawVertices = Module["org_jetbrains_skia_Canvas__1nDrawVertices"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawVertices");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawPatch = Module["org_jetbrains_skia_Canvas__1nDrawPatch"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawPatch");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawDrawable = Module["org_jetbrains_skia_Canvas__1nDrawDrawable"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawDrawable");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nClear = Module["org_jetbrains_skia_Canvas__1nClear"] = createExportWrapper("org_jetbrains_skia_Canvas__1nClear");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nDrawPaint = Module["org_jetbrains_skia_Canvas__1nDrawPaint"] = createExportWrapper("org_jetbrains_skia_Canvas__1nDrawPaint");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nSetMatrix = Module["org_jetbrains_skia_Canvas__1nSetMatrix"] = createExportWrapper("org_jetbrains_skia_Canvas__1nSetMatrix");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nResetMatrix = Module["org_jetbrains_skia_Canvas__1nResetMatrix"] = createExportWrapper("org_jetbrains_skia_Canvas__1nResetMatrix");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nGetLocalToDevice = Module["org_jetbrains_skia_Canvas__1nGetLocalToDevice"] = createExportWrapper("org_jetbrains_skia_Canvas__1nGetLocalToDevice");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nClipRect = Module["org_jetbrains_skia_Canvas__1nClipRect"] = createExportWrapper("org_jetbrains_skia_Canvas__1nClipRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nClipRRect = Module["org_jetbrains_skia_Canvas__1nClipRRect"] = createExportWrapper("org_jetbrains_skia_Canvas__1nClipRRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nClipPath = Module["org_jetbrains_skia_Canvas__1nClipPath"] = createExportWrapper("org_jetbrains_skia_Canvas__1nClipPath");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nClipRegion = Module["org_jetbrains_skia_Canvas__1nClipRegion"] = createExportWrapper("org_jetbrains_skia_Canvas__1nClipRegion");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nConcat = Module["org_jetbrains_skia_Canvas__1nConcat"] = createExportWrapper("org_jetbrains_skia_Canvas__1nConcat");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nConcat44 = Module["org_jetbrains_skia_Canvas__1nConcat44"] = createExportWrapper("org_jetbrains_skia_Canvas__1nConcat44");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nReadPixels = Module["org_jetbrains_skia_Canvas__1nReadPixels"] = createExportWrapper("org_jetbrains_skia_Canvas__1nReadPixels");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nWritePixels = Module["org_jetbrains_skia_Canvas__1nWritePixels"] = createExportWrapper("org_jetbrains_skia_Canvas__1nWritePixels");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nSave = Module["org_jetbrains_skia_Canvas__1nSave"] = createExportWrapper("org_jetbrains_skia_Canvas__1nSave");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nSaveLayer = Module["org_jetbrains_skia_Canvas__1nSaveLayer"] = createExportWrapper("org_jetbrains_skia_Canvas__1nSaveLayer");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nSaveLayerRect = Module["org_jetbrains_skia_Canvas__1nSaveLayerRect"] = createExportWrapper("org_jetbrains_skia_Canvas__1nSaveLayerRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nGetSaveCount = Module["org_jetbrains_skia_Canvas__1nGetSaveCount"] = createExportWrapper("org_jetbrains_skia_Canvas__1nGetSaveCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nRestore = Module["org_jetbrains_skia_Canvas__1nRestore"] = createExportWrapper("org_jetbrains_skia_Canvas__1nRestore");

/** @type {function(...*):?} */
var org_jetbrains_skia_Canvas__1nRestoreToCount = Module["org_jetbrains_skia_Canvas__1nRestoreToCount"] = createExportWrapper("org_jetbrains_skia_Canvas__1nRestoreToCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_StdVectorDecoder__1nGetArraySize = Module["org_jetbrains_skia_StdVectorDecoder__1nGetArraySize"] = createExportWrapper("org_jetbrains_skia_StdVectorDecoder__1nGetArraySize");

/** @type {function(...*):?} */
var org_jetbrains_skia_StdVectorDecoder__1nReleaseElement = Module["org_jetbrains_skia_StdVectorDecoder__1nReleaseElement"] = createExportWrapper("org_jetbrains_skia_StdVectorDecoder__1nReleaseElement");

/** @type {function(...*):?} */
var org_jetbrains_skia_StdVectorDecoder__1nDisposeArray = Module["org_jetbrains_skia_StdVectorDecoder__1nDisposeArray"] = createExportWrapper("org_jetbrains_skia_StdVectorDecoder__1nDisposeArray");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGDOM__1nMakeFromData = Module["org_jetbrains_skia_svg_SVGDOM__1nMakeFromData"] = createExportWrapper("org_jetbrains_skia_svg_SVGDOM__1nMakeFromData");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGDOM__1nGetRoot = Module["org_jetbrains_skia_svg_SVGDOM__1nGetRoot"] = createExportWrapper("org_jetbrains_skia_svg_SVGDOM__1nGetRoot");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGDOM__1nGetContainerSize = Module["org_jetbrains_skia_svg_SVGDOM__1nGetContainerSize"] = createExportWrapper("org_jetbrains_skia_svg_SVGDOM__1nGetContainerSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGDOM__1nSetContainerSize = Module["org_jetbrains_skia_svg_SVGDOM__1nSetContainerSize"] = createExportWrapper("org_jetbrains_skia_svg_SVGDOM__1nSetContainerSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGDOM__1nRender = Module["org_jetbrains_skia_svg_SVGDOM__1nRender"] = createExportWrapper("org_jetbrains_skia_svg_SVGDOM__1nRender");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGNode__1nGetTag = Module["org_jetbrains_skia_svg_SVGNode__1nGetTag"] = createExportWrapper("org_jetbrains_skia_svg_SVGNode__1nGetTag");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGSVG__1nGetTag = Module["org_jetbrains_skia_svg_SVGSVG__1nGetTag"] = createExportWrapper("org_jetbrains_skia_svg_SVGSVG__1nGetTag");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGSVG__1nGetX = Module["org_jetbrains_skia_svg_SVGSVG__1nGetX"] = createExportWrapper("org_jetbrains_skia_svg_SVGSVG__1nGetX");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGSVG__1nGetY = Module["org_jetbrains_skia_svg_SVGSVG__1nGetY"] = createExportWrapper("org_jetbrains_skia_svg_SVGSVG__1nGetY");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGSVG__1nGetHeight = Module["org_jetbrains_skia_svg_SVGSVG__1nGetHeight"] = createExportWrapper("org_jetbrains_skia_svg_SVGSVG__1nGetHeight");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGSVG__1nGetWidth = Module["org_jetbrains_skia_svg_SVGSVG__1nGetWidth"] = createExportWrapper("org_jetbrains_skia_svg_SVGSVG__1nGetWidth");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGSVG__1nGetPreserveAspectRatio = Module["org_jetbrains_skia_svg_SVGSVG__1nGetPreserveAspectRatio"] = createExportWrapper("org_jetbrains_skia_svg_SVGSVG__1nGetPreserveAspectRatio");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGSVG__1nGetViewBox = Module["org_jetbrains_skia_svg_SVGSVG__1nGetViewBox"] = createExportWrapper("org_jetbrains_skia_svg_SVGSVG__1nGetViewBox");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGSVG__1nGetIntrinsicSize = Module["org_jetbrains_skia_svg_SVGSVG__1nGetIntrinsicSize"] = createExportWrapper("org_jetbrains_skia_svg_SVGSVG__1nGetIntrinsicSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGSVG__1nSetX = Module["org_jetbrains_skia_svg_SVGSVG__1nSetX"] = createExportWrapper("org_jetbrains_skia_svg_SVGSVG__1nSetX");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGSVG__1nSetY = Module["org_jetbrains_skia_svg_SVGSVG__1nSetY"] = createExportWrapper("org_jetbrains_skia_svg_SVGSVG__1nSetY");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGSVG__1nSetWidth = Module["org_jetbrains_skia_svg_SVGSVG__1nSetWidth"] = createExportWrapper("org_jetbrains_skia_svg_SVGSVG__1nSetWidth");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGSVG__1nSetHeight = Module["org_jetbrains_skia_svg_SVGSVG__1nSetHeight"] = createExportWrapper("org_jetbrains_skia_svg_SVGSVG__1nSetHeight");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGSVG__1nSetPreserveAspectRatio = Module["org_jetbrains_skia_svg_SVGSVG__1nSetPreserveAspectRatio"] = createExportWrapper("org_jetbrains_skia_svg_SVGSVG__1nSetPreserveAspectRatio");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGSVG__1nSetViewBox = Module["org_jetbrains_skia_svg_SVGSVG__1nSetViewBox"] = createExportWrapper("org_jetbrains_skia_svg_SVGSVG__1nSetViewBox");

/** @type {function(...*):?} */
var org_jetbrains_skia_svg_SVGCanvas__1nMake = Module["org_jetbrains_skia_svg_SVGCanvas__1nMake"] = createExportWrapper("org_jetbrains_skia_svg_SVGCanvas__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_DirectContext__1nMakeGL = Module["org_jetbrains_skia_DirectContext__1nMakeGL"] = createExportWrapper("org_jetbrains_skia_DirectContext__1nMakeGL");

/** @type {function(...*):?} */
var org_jetbrains_skia_DirectContext__1nMakeGLWithInterface = Module["org_jetbrains_skia_DirectContext__1nMakeGLWithInterface"] = createExportWrapper("org_jetbrains_skia_DirectContext__1nMakeGLWithInterface");

/** @type {function(...*):?} */
var org_jetbrains_skia_DirectContext__1nMakeDirect3D = Module["org_jetbrains_skia_DirectContext__1nMakeDirect3D"] = createExportWrapper("org_jetbrains_skia_DirectContext__1nMakeDirect3D");

/** @type {function(...*):?} */
var org_jetbrains_skia_DirectContext__1nFlush = Module["org_jetbrains_skia_DirectContext__1nFlush"] = createExportWrapper("org_jetbrains_skia_DirectContext__1nFlush");

/** @type {function(...*):?} */
var org_jetbrains_skia_DirectContext__1nSubmit = Module["org_jetbrains_skia_DirectContext__1nSubmit"] = createExportWrapper("org_jetbrains_skia_DirectContext__1nSubmit");

/** @type {function(...*):?} */
var org_jetbrains_skia_DirectContext__1nReset = Module["org_jetbrains_skia_DirectContext__1nReset"] = createExportWrapper("org_jetbrains_skia_DirectContext__1nReset");

/** @type {function(...*):?} */
var org_jetbrains_skia_DirectContext__1nAbandon = Module["org_jetbrains_skia_DirectContext__1nAbandon"] = createExportWrapper("org_jetbrains_skia_DirectContext__1nAbandon");

/** @type {function(...*):?} */
var org_jetbrains_skia_GraphicsKt__1nGetFontCacheLimit = Module["org_jetbrains_skia_GraphicsKt__1nGetFontCacheLimit"] = createExportWrapper("org_jetbrains_skia_GraphicsKt__1nGetFontCacheLimit");

/** @type {function(...*):?} */
var org_jetbrains_skia_GraphicsKt__1nSetFontCacheLimit = Module["org_jetbrains_skia_GraphicsKt__1nSetFontCacheLimit"] = createExportWrapper("org_jetbrains_skia_GraphicsKt__1nSetFontCacheLimit");

/** @type {function(...*):?} */
var org_jetbrains_skia_GraphicsKt__1nGetFontCacheUsed = Module["org_jetbrains_skia_GraphicsKt__1nGetFontCacheUsed"] = createExportWrapper("org_jetbrains_skia_GraphicsKt__1nGetFontCacheUsed");

/** @type {function(...*):?} */
var org_jetbrains_skia_GraphicsKt__1nGetFontCacheCountLimit = Module["org_jetbrains_skia_GraphicsKt__1nGetFontCacheCountLimit"] = createExportWrapper("org_jetbrains_skia_GraphicsKt__1nGetFontCacheCountLimit");

/** @type {function(...*):?} */
var org_jetbrains_skia_GraphicsKt__1nSetFontCacheCountLimit = Module["org_jetbrains_skia_GraphicsKt__1nSetFontCacheCountLimit"] = createExportWrapper("org_jetbrains_skia_GraphicsKt__1nSetFontCacheCountLimit");

/** @type {function(...*):?} */
var org_jetbrains_skia_GraphicsKt__1nGetFontCacheCountUsed = Module["org_jetbrains_skia_GraphicsKt__1nGetFontCacheCountUsed"] = createExportWrapper("org_jetbrains_skia_GraphicsKt__1nGetFontCacheCountUsed");

/** @type {function(...*):?} */
var org_jetbrains_skia_GraphicsKt__1nGetResourceCacheTotalByteLimit = Module["org_jetbrains_skia_GraphicsKt__1nGetResourceCacheTotalByteLimit"] = createExportWrapper("org_jetbrains_skia_GraphicsKt__1nGetResourceCacheTotalByteLimit");

/** @type {function(...*):?} */
var org_jetbrains_skia_GraphicsKt__1nSetResourceCacheTotalByteLimit = Module["org_jetbrains_skia_GraphicsKt__1nSetResourceCacheTotalByteLimit"] = createExportWrapper("org_jetbrains_skia_GraphicsKt__1nSetResourceCacheTotalByteLimit");

/** @type {function(...*):?} */
var org_jetbrains_skia_GraphicsKt__1nGetResourceCacheSingleAllocationByteLimit = Module["org_jetbrains_skia_GraphicsKt__1nGetResourceCacheSingleAllocationByteLimit"] = createExportWrapper("org_jetbrains_skia_GraphicsKt__1nGetResourceCacheSingleAllocationByteLimit");

/** @type {function(...*):?} */
var org_jetbrains_skia_GraphicsKt__1nSetResourceCacheSingleAllocationByteLimit = Module["org_jetbrains_skia_GraphicsKt__1nSetResourceCacheSingleAllocationByteLimit"] = createExportWrapper("org_jetbrains_skia_GraphicsKt__1nSetResourceCacheSingleAllocationByteLimit");

/** @type {function(...*):?} */
var org_jetbrains_skia_GraphicsKt__1nGetResourceCacheTotalBytesUsed = Module["org_jetbrains_skia_GraphicsKt__1nGetResourceCacheTotalBytesUsed"] = createExportWrapper("org_jetbrains_skia_GraphicsKt__1nGetResourceCacheTotalBytesUsed");

/** @type {function(...*):?} */
var org_jetbrains_skia_GraphicsKt__1nPurgeFontCache = Module["org_jetbrains_skia_GraphicsKt__1nPurgeFontCache"] = createExportWrapper("org_jetbrains_skia_GraphicsKt__1nPurgeFontCache");

/** @type {function(...*):?} */
var org_jetbrains_skia_GraphicsKt__1nPurgeResourceCache = Module["org_jetbrains_skia_GraphicsKt__1nPurgeResourceCache"] = createExportWrapper("org_jetbrains_skia_GraphicsKt__1nPurgeResourceCache");

/** @type {function(...*):?} */
var org_jetbrains_skia_GraphicsKt__1nPurgeAllCaches = Module["org_jetbrains_skia_GraphicsKt__1nPurgeAllCaches"] = createExportWrapper("org_jetbrains_skia_GraphicsKt__1nPurgeAllCaches");

/** @type {function(...*):?} */
var org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer = Module["org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_BackendRenderTarget__1nMakeGL = Module["org_jetbrains_skia_BackendRenderTarget__1nMakeGL"] = createExportWrapper("org_jetbrains_skia_BackendRenderTarget__1nMakeGL");

/** @type {function(...*):?} */
var _BackendRenderTarget_nMakeMetal = Module["_BackendRenderTarget_nMakeMetal"] = createExportWrapper("BackendRenderTarget_nMakeMetal");

/** @type {function(...*):?} */
var _BackendRenderTarget_MakeDirect3D = Module["_BackendRenderTarget_MakeDirect3D"] = createExportWrapper("BackendRenderTarget_MakeDirect3D");

/** @type {function(...*):?} */
var org_jetbrains_skia_Data__1nGetFinalizer = Module["org_jetbrains_skia_Data__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_Data__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_Data__1nSize = Module["org_jetbrains_skia_Data__1nSize"] = createExportWrapper("org_jetbrains_skia_Data__1nSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_Data__1nBytes = Module["org_jetbrains_skia_Data__1nBytes"] = createExportWrapper("org_jetbrains_skia_Data__1nBytes");

/** @type {function(...*):?} */
var org_jetbrains_skia_Data__1nEquals = Module["org_jetbrains_skia_Data__1nEquals"] = createExportWrapper("org_jetbrains_skia_Data__1nEquals");

/** @type {function(...*):?} */
var org_jetbrains_skia_Data__1nMakeFromBytes = Module["org_jetbrains_skia_Data__1nMakeFromBytes"] = createExportWrapper("org_jetbrains_skia_Data__1nMakeFromBytes");

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = createExportWrapper("malloc");

/** @type {function(...*):?} */
var org_jetbrains_skia_Data__1nMakeWithoutCopy = Module["org_jetbrains_skia_Data__1nMakeWithoutCopy"] = createExportWrapper("org_jetbrains_skia_Data__1nMakeWithoutCopy");

/** @type {function(...*):?} */
var org_jetbrains_skia_Data__1nMakeFromFileName = Module["org_jetbrains_skia_Data__1nMakeFromFileName"] = createExportWrapper("org_jetbrains_skia_Data__1nMakeFromFileName");

/** @type {function(...*):?} */
var org_jetbrains_skia_Data__1nMakeSubset = Module["org_jetbrains_skia_Data__1nMakeSubset"] = createExportWrapper("org_jetbrains_skia_Data__1nMakeSubset");

/** @type {function(...*):?} */
var org_jetbrains_skia_Data__1nMakeEmpty = Module["org_jetbrains_skia_Data__1nMakeEmpty"] = createExportWrapper("org_jetbrains_skia_Data__1nMakeEmpty");

/** @type {function(...*):?} */
var org_jetbrains_skia_Data__1nMakeUninitialized = Module["org_jetbrains_skia_Data__1nMakeUninitialized"] = createExportWrapper("org_jetbrains_skia_Data__1nMakeUninitialized");

/** @type {function(...*):?} */
var org_jetbrains_skia_Data__1nWritableData = Module["org_jetbrains_skia_Data__1nWritableData"] = createExportWrapper("org_jetbrains_skia_Data__1nWritableData");

/** @type {function(...*):?} */
var org_jetbrains_skia_FontMgr__1nGetFamiliesCount = Module["org_jetbrains_skia_FontMgr__1nGetFamiliesCount"] = createExportWrapper("org_jetbrains_skia_FontMgr__1nGetFamiliesCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_FontMgr__1nGetFamilyName = Module["org_jetbrains_skia_FontMgr__1nGetFamilyName"] = createExportWrapper("org_jetbrains_skia_FontMgr__1nGetFamilyName");

/** @type {function(...*):?} */
var org_jetbrains_skia_FontMgr__1nMakeStyleSet = Module["org_jetbrains_skia_FontMgr__1nMakeStyleSet"] = createExportWrapper("org_jetbrains_skia_FontMgr__1nMakeStyleSet");

/** @type {function(...*):?} */
var org_jetbrains_skia_FontMgr__1nMatchFamily = Module["org_jetbrains_skia_FontMgr__1nMatchFamily"] = createExportWrapper("org_jetbrains_skia_FontMgr__1nMatchFamily");

/** @type {function(...*):?} */
var org_jetbrains_skia_FontMgr__1nMatchFamilyStyle = Module["org_jetbrains_skia_FontMgr__1nMatchFamilyStyle"] = createExportWrapper("org_jetbrains_skia_FontMgr__1nMatchFamilyStyle");

/** @type {function(...*):?} */
var org_jetbrains_skia_FontMgr__1nMatchFamilyStyleCharacter = Module["org_jetbrains_skia_FontMgr__1nMatchFamilyStyleCharacter"] = createExportWrapper("org_jetbrains_skia_FontMgr__1nMatchFamilyStyleCharacter");

/** @type {function(...*):?} */
var org_jetbrains_skia_FontMgr__1nMakeFromData = Module["org_jetbrains_skia_FontMgr__1nMakeFromData"] = createExportWrapper("org_jetbrains_skia_FontMgr__1nMakeFromData");

/** @type {function(...*):?} */
var org_jetbrains_skia_FontMgr__1nDefault = Module["org_jetbrains_skia_FontMgr__1nDefault"] = createExportWrapper("org_jetbrains_skia_FontMgr__1nDefault");

/** @type {function(...*):?} */
var org_jetbrains_skia_ShadowUtils__1nDrawShadow = Module["org_jetbrains_skia_ShadowUtils__1nDrawShadow"] = createExportWrapper("org_jetbrains_skia_ShadowUtils__1nDrawShadow");

/** @type {function(...*):?} */
var org_jetbrains_skia_ShadowUtils__1nComputeTonalAmbientColor = Module["org_jetbrains_skia_ShadowUtils__1nComputeTonalAmbientColor"] = createExportWrapper("org_jetbrains_skia_ShadowUtils__1nComputeTonalAmbientColor");

/** @type {function(...*):?} */
var org_jetbrains_skia_ShadowUtils__1nComputeTonalSpotColor = Module["org_jetbrains_skia_ShadowUtils__1nComputeTonalSpotColor"] = createExportWrapper("org_jetbrains_skia_ShadowUtils__1nComputeTonalSpotColor");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeEffect__1nMakeShader = Module["org_jetbrains_skia_RuntimeEffect__1nMakeShader"] = createExportWrapper("org_jetbrains_skia_RuntimeEffect__1nMakeShader");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeEffect__1nMakeForShader = Module["org_jetbrains_skia_RuntimeEffect__1nMakeForShader"] = createExportWrapper("org_jetbrains_skia_RuntimeEffect__1nMakeForShader");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeEffect__1nMakeForColorFilter = Module["org_jetbrains_skia_RuntimeEffect__1nMakeForColorFilter"] = createExportWrapper("org_jetbrains_skia_RuntimeEffect__1nMakeForColorFilter");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeEffect__1Result_nGetPtr = Module["org_jetbrains_skia_RuntimeEffect__1Result_nGetPtr"] = createExportWrapper("org_jetbrains_skia_RuntimeEffect__1Result_nGetPtr");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeEffect__1Result_nGetError = Module["org_jetbrains_skia_RuntimeEffect__1Result_nGetError"] = createExportWrapper("org_jetbrains_skia_RuntimeEffect__1Result_nGetError");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeEffect__1Result_nDestroy = Module["org_jetbrains_skia_RuntimeEffect__1Result_nDestroy"] = createExportWrapper("org_jetbrains_skia_RuntimeEffect__1Result_nDestroy");

/** @type {function(...*):?} */
var org_jetbrains_skia_Shader__1nMakeWithColorFilter = Module["org_jetbrains_skia_Shader__1nMakeWithColorFilter"] = createExportWrapper("org_jetbrains_skia_Shader__1nMakeWithColorFilter");

/** @type {function(...*):?} */
var org_jetbrains_skia_Shader__1nMakeLinearGradient = Module["org_jetbrains_skia_Shader__1nMakeLinearGradient"] = createExportWrapper("org_jetbrains_skia_Shader__1nMakeLinearGradient");

/** @type {function(...*):?} */
var org_jetbrains_skia_Shader__1nMakeLinearGradientCS = Module["org_jetbrains_skia_Shader__1nMakeLinearGradientCS"] = createExportWrapper("org_jetbrains_skia_Shader__1nMakeLinearGradientCS");

/** @type {function(...*):?} */
var org_jetbrains_skia_Shader__1nMakeRadialGradient = Module["org_jetbrains_skia_Shader__1nMakeRadialGradient"] = createExportWrapper("org_jetbrains_skia_Shader__1nMakeRadialGradient");

/** @type {function(...*):?} */
var org_jetbrains_skia_Shader__1nMakeRadialGradientCS = Module["org_jetbrains_skia_Shader__1nMakeRadialGradientCS"] = createExportWrapper("org_jetbrains_skia_Shader__1nMakeRadialGradientCS");

/** @type {function(...*):?} */
var org_jetbrains_skia_Shader__1nMakeTwoPointConicalGradient = Module["org_jetbrains_skia_Shader__1nMakeTwoPointConicalGradient"] = createExportWrapper("org_jetbrains_skia_Shader__1nMakeTwoPointConicalGradient");

/** @type {function(...*):?} */
var org_jetbrains_skia_Shader__1nMakeTwoPointConicalGradientCS = Module["org_jetbrains_skia_Shader__1nMakeTwoPointConicalGradientCS"] = createExportWrapper("org_jetbrains_skia_Shader__1nMakeTwoPointConicalGradientCS");

/** @type {function(...*):?} */
var org_jetbrains_skia_Shader__1nMakeSweepGradient = Module["org_jetbrains_skia_Shader__1nMakeSweepGradient"] = createExportWrapper("org_jetbrains_skia_Shader__1nMakeSweepGradient");

/** @type {function(...*):?} */
var org_jetbrains_skia_Shader__1nMakeSweepGradientCS = Module["org_jetbrains_skia_Shader__1nMakeSweepGradientCS"] = createExportWrapper("org_jetbrains_skia_Shader__1nMakeSweepGradientCS");

/** @type {function(...*):?} */
var org_jetbrains_skia_Shader__1nMakeEmpty = Module["org_jetbrains_skia_Shader__1nMakeEmpty"] = createExportWrapper("org_jetbrains_skia_Shader__1nMakeEmpty");

/** @type {function(...*):?} */
var org_jetbrains_skia_Shader__1nMakeColor = Module["org_jetbrains_skia_Shader__1nMakeColor"] = createExportWrapper("org_jetbrains_skia_Shader__1nMakeColor");

/** @type {function(...*):?} */
var org_jetbrains_skia_Shader__1nMakeColorCS = Module["org_jetbrains_skia_Shader__1nMakeColorCS"] = createExportWrapper("org_jetbrains_skia_Shader__1nMakeColorCS");

/** @type {function(...*):?} */
var org_jetbrains_skia_Shader__1nMakeBlend = Module["org_jetbrains_skia_Shader__1nMakeBlend"] = createExportWrapper("org_jetbrains_skia_Shader__1nMakeBlend");

/** @type {function(...*):?} */
var org_jetbrains_skia_Shader__1nMakeFractalNoise = Module["org_jetbrains_skia_Shader__1nMakeFractalNoise"] = createExportWrapper("org_jetbrains_skia_Shader__1nMakeFractalNoise");

/** @type {function(...*):?} */
var org_jetbrains_skia_Shader__1nMakeTurbulence = Module["org_jetbrains_skia_Shader__1nMakeTurbulence"] = createExportWrapper("org_jetbrains_skia_Shader__1nMakeTurbulence");

/** @type {function(...*):?} */
var org_jetbrains_skia_MaskFilter__1nMakeBlur = Module["org_jetbrains_skia_MaskFilter__1nMakeBlur"] = createExportWrapper("org_jetbrains_skia_MaskFilter__1nMakeBlur");

/** @type {function(...*):?} */
var org_jetbrains_skia_MaskFilter__1nMakeShader = Module["org_jetbrains_skia_MaskFilter__1nMakeShader"] = createExportWrapper("org_jetbrains_skia_MaskFilter__1nMakeShader");

/** @type {function(...*):?} */
var org_jetbrains_skia_MaskFilter__1nMakeTable = Module["org_jetbrains_skia_MaskFilter__1nMakeTable"] = createExportWrapper("org_jetbrains_skia_MaskFilter__1nMakeTable");

/** @type {function(...*):?} */
var org_jetbrains_skia_MaskFilter__1nMakeGamma = Module["org_jetbrains_skia_MaskFilter__1nMakeGamma"] = createExportWrapper("org_jetbrains_skia_MaskFilter__1nMakeGamma");

/** @type {function(...*):?} */
var org_jetbrains_skia_MaskFilter__1nMakeClip = Module["org_jetbrains_skia_MaskFilter__1nMakeClip"] = createExportWrapper("org_jetbrains_skia_MaskFilter__1nMakeClip");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nGetFinalizer = Module["org_jetbrains_skia_Bitmap__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nMake = Module["org_jetbrains_skia_Bitmap__1nMake"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nMakeClone = Module["org_jetbrains_skia_Bitmap__1nMakeClone"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nMakeClone");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nSwap = Module["org_jetbrains_skia_Bitmap__1nSwap"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nSwap");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nGetImageInfo = Module["org_jetbrains_skia_Bitmap__1nGetImageInfo"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nGetImageInfo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nGetRowBytesAsPixels = Module["org_jetbrains_skia_Bitmap__1nGetRowBytesAsPixels"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nGetRowBytesAsPixels");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nIsNull = Module["org_jetbrains_skia_Bitmap__1nIsNull"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nIsNull");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nGetRowBytes = Module["org_jetbrains_skia_Bitmap__1nGetRowBytes"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nGetRowBytes");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nSetAlphaType = Module["org_jetbrains_skia_Bitmap__1nSetAlphaType"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nSetAlphaType");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nComputeByteSize = Module["org_jetbrains_skia_Bitmap__1nComputeByteSize"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nComputeByteSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nIsImmutable = Module["org_jetbrains_skia_Bitmap__1nIsImmutable"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nIsImmutable");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nSetImmutable = Module["org_jetbrains_skia_Bitmap__1nSetImmutable"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nSetImmutable");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nReset = Module["org_jetbrains_skia_Bitmap__1nReset"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nReset");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nComputeIsOpaque = Module["org_jetbrains_skia_Bitmap__1nComputeIsOpaque"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nComputeIsOpaque");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nSetImageInfo = Module["org_jetbrains_skia_Bitmap__1nSetImageInfo"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nSetImageInfo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nAllocPixelsFlags = Module["org_jetbrains_skia_Bitmap__1nAllocPixelsFlags"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nAllocPixelsFlags");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nAllocPixelsRowBytes = Module["org_jetbrains_skia_Bitmap__1nAllocPixelsRowBytes"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nAllocPixelsRowBytes");

/** @type {function(...*):?} */
var _free = Module["_free"] = createExportWrapper("free");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nInstallPixels = Module["org_jetbrains_skia_Bitmap__1nInstallPixels"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nInstallPixels");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nAllocPixels = Module["org_jetbrains_skia_Bitmap__1nAllocPixels"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nAllocPixels");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nGetPixelRef = Module["org_jetbrains_skia_Bitmap__1nGetPixelRef"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nGetPixelRef");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nGetPixelRefOriginX = Module["org_jetbrains_skia_Bitmap__1nGetPixelRefOriginX"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nGetPixelRefOriginX");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nGetPixelRefOriginY = Module["org_jetbrains_skia_Bitmap__1nGetPixelRefOriginY"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nGetPixelRefOriginY");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nSetPixelRef = Module["org_jetbrains_skia_Bitmap__1nSetPixelRef"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nSetPixelRef");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nIsReadyToDraw = Module["org_jetbrains_skia_Bitmap__1nIsReadyToDraw"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nIsReadyToDraw");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nGetGenerationId = Module["org_jetbrains_skia_Bitmap__1nGetGenerationId"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nGetGenerationId");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nNotifyPixelsChanged = Module["org_jetbrains_skia_Bitmap__1nNotifyPixelsChanged"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nNotifyPixelsChanged");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nEraseColor = Module["org_jetbrains_skia_Bitmap__1nEraseColor"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nEraseColor");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nErase = Module["org_jetbrains_skia_Bitmap__1nErase"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nErase");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nGetColor = Module["org_jetbrains_skia_Bitmap__1nGetColor"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nGetColor");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nGetAlphaf = Module["org_jetbrains_skia_Bitmap__1nGetAlphaf"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nGetAlphaf");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nExtractSubset = Module["org_jetbrains_skia_Bitmap__1nExtractSubset"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nExtractSubset");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nReadPixels = Module["org_jetbrains_skia_Bitmap__1nReadPixels"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nReadPixels");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nExtractAlpha = Module["org_jetbrains_skia_Bitmap__1nExtractAlpha"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nExtractAlpha");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nPeekPixels = Module["org_jetbrains_skia_Bitmap__1nPeekPixels"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nPeekPixels");

/** @type {function(...*):?} */
var org_jetbrains_skia_Bitmap__1nMakeShader = Module["org_jetbrains_skia_Bitmap__1nMakeShader"] = createExportWrapper("org_jetbrains_skia_Bitmap__1nMakeShader");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorFilter__1nMakeComposed = Module["org_jetbrains_skia_ColorFilter__1nMakeComposed"] = createExportWrapper("org_jetbrains_skia_ColorFilter__1nMakeComposed");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorFilter__1nMakeBlend = Module["org_jetbrains_skia_ColorFilter__1nMakeBlend"] = createExportWrapper("org_jetbrains_skia_ColorFilter__1nMakeBlend");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorFilter__1nMakeMatrix = Module["org_jetbrains_skia_ColorFilter__1nMakeMatrix"] = createExportWrapper("org_jetbrains_skia_ColorFilter__1nMakeMatrix");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorFilter__1nMakeHSLAMatrix = Module["org_jetbrains_skia_ColorFilter__1nMakeHSLAMatrix"] = createExportWrapper("org_jetbrains_skia_ColorFilter__1nMakeHSLAMatrix");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorFilter__1nGetLinearToSRGBGamma = Module["org_jetbrains_skia_ColorFilter__1nGetLinearToSRGBGamma"] = createExportWrapper("org_jetbrains_skia_ColorFilter__1nGetLinearToSRGBGamma");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorFilter__1nGetSRGBToLinearGamma = Module["org_jetbrains_skia_ColorFilter__1nGetSRGBToLinearGamma"] = createExportWrapper("org_jetbrains_skia_ColorFilter__1nGetSRGBToLinearGamma");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorFilter__1nMakeLerp = Module["org_jetbrains_skia_ColorFilter__1nMakeLerp"] = createExportWrapper("org_jetbrains_skia_ColorFilter__1nMakeLerp");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorFilter__1nMakeLighting = Module["org_jetbrains_skia_ColorFilter__1nMakeLighting"] = createExportWrapper("org_jetbrains_skia_ColorFilter__1nMakeLighting");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorFilter__1nMakeHighContrast = Module["org_jetbrains_skia_ColorFilter__1nMakeHighContrast"] = createExportWrapper("org_jetbrains_skia_ColorFilter__1nMakeHighContrast");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorFilter__1nMakeTable = Module["org_jetbrains_skia_ColorFilter__1nMakeTable"] = createExportWrapper("org_jetbrains_skia_ColorFilter__1nMakeTable");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorFilter__1nMakeTableARGB = Module["org_jetbrains_skia_ColorFilter__1nMakeTableARGB"] = createExportWrapper("org_jetbrains_skia_ColorFilter__1nMakeTableARGB");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorFilter__1nMakeOverdraw = Module["org_jetbrains_skia_ColorFilter__1nMakeOverdraw"] = createExportWrapper("org_jetbrains_skia_ColorFilter__1nMakeOverdraw");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorFilter__1nGetLuma = Module["org_jetbrains_skia_ColorFilter__1nGetLuma"] = createExportWrapper("org_jetbrains_skia_ColorFilter__1nGetLuma");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorType__1nIsAlwaysOpaque = Module["org_jetbrains_skia_ColorType__1nIsAlwaysOpaque"] = createExportWrapper("org_jetbrains_skia_ColorType__1nIsAlwaysOpaque");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nGetFinalizer = Module["org_jetbrains_skia_Paint__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_Paint__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nMake = Module["org_jetbrains_skia_Paint__1nMake"] = createExportWrapper("org_jetbrains_skia_Paint__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nMakeClone = Module["org_jetbrains_skia_Paint__1nMakeClone"] = createExportWrapper("org_jetbrains_skia_Paint__1nMakeClone");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nEquals = Module["org_jetbrains_skia_Paint__1nEquals"] = createExportWrapper("org_jetbrains_skia_Paint__1nEquals");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nReset = Module["org_jetbrains_skia_Paint__1nReset"] = createExportWrapper("org_jetbrains_skia_Paint__1nReset");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nIsAntiAlias = Module["org_jetbrains_skia_Paint__1nIsAntiAlias"] = createExportWrapper("org_jetbrains_skia_Paint__1nIsAntiAlias");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nSetAntiAlias = Module["org_jetbrains_skia_Paint__1nSetAntiAlias"] = createExportWrapper("org_jetbrains_skia_Paint__1nSetAntiAlias");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nIsDither = Module["org_jetbrains_skia_Paint__1nIsDither"] = createExportWrapper("org_jetbrains_skia_Paint__1nIsDither");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nSetDither = Module["org_jetbrains_skia_Paint__1nSetDither"] = createExportWrapper("org_jetbrains_skia_Paint__1nSetDither");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nGetColor = Module["org_jetbrains_skia_Paint__1nGetColor"] = createExportWrapper("org_jetbrains_skia_Paint__1nGetColor");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nSetColor = Module["org_jetbrains_skia_Paint__1nSetColor"] = createExportWrapper("org_jetbrains_skia_Paint__1nSetColor");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nGetColor4f = Module["org_jetbrains_skia_Paint__1nGetColor4f"] = createExportWrapper("org_jetbrains_skia_Paint__1nGetColor4f");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nSetColor4f = Module["org_jetbrains_skia_Paint__1nSetColor4f"] = createExportWrapper("org_jetbrains_skia_Paint__1nSetColor4f");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nGetMode = Module["org_jetbrains_skia_Paint__1nGetMode"] = createExportWrapper("org_jetbrains_skia_Paint__1nGetMode");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nSetMode = Module["org_jetbrains_skia_Paint__1nSetMode"] = createExportWrapper("org_jetbrains_skia_Paint__1nSetMode");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nGetStrokeWidth = Module["org_jetbrains_skia_Paint__1nGetStrokeWidth"] = createExportWrapper("org_jetbrains_skia_Paint__1nGetStrokeWidth");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nSetStrokeWidth = Module["org_jetbrains_skia_Paint__1nSetStrokeWidth"] = createExportWrapper("org_jetbrains_skia_Paint__1nSetStrokeWidth");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nGetStrokeMiter = Module["org_jetbrains_skia_Paint__1nGetStrokeMiter"] = createExportWrapper("org_jetbrains_skia_Paint__1nGetStrokeMiter");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nSetStrokeMiter = Module["org_jetbrains_skia_Paint__1nSetStrokeMiter"] = createExportWrapper("org_jetbrains_skia_Paint__1nSetStrokeMiter");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nGetStrokeCap = Module["org_jetbrains_skia_Paint__1nGetStrokeCap"] = createExportWrapper("org_jetbrains_skia_Paint__1nGetStrokeCap");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nSetStrokeCap = Module["org_jetbrains_skia_Paint__1nSetStrokeCap"] = createExportWrapper("org_jetbrains_skia_Paint__1nSetStrokeCap");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nGetStrokeJoin = Module["org_jetbrains_skia_Paint__1nGetStrokeJoin"] = createExportWrapper("org_jetbrains_skia_Paint__1nGetStrokeJoin");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nSetStrokeJoin = Module["org_jetbrains_skia_Paint__1nSetStrokeJoin"] = createExportWrapper("org_jetbrains_skia_Paint__1nSetStrokeJoin");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nGetMaskFilter = Module["org_jetbrains_skia_Paint__1nGetMaskFilter"] = createExportWrapper("org_jetbrains_skia_Paint__1nGetMaskFilter");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nSetMaskFilter = Module["org_jetbrains_skia_Paint__1nSetMaskFilter"] = createExportWrapper("org_jetbrains_skia_Paint__1nSetMaskFilter");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nGetImageFilter = Module["org_jetbrains_skia_Paint__1nGetImageFilter"] = createExportWrapper("org_jetbrains_skia_Paint__1nGetImageFilter");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nSetImageFilter = Module["org_jetbrains_skia_Paint__1nSetImageFilter"] = createExportWrapper("org_jetbrains_skia_Paint__1nSetImageFilter");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nGetBlendMode = Module["org_jetbrains_skia_Paint__1nGetBlendMode"] = createExportWrapper("org_jetbrains_skia_Paint__1nGetBlendMode");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nSetBlendMode = Module["org_jetbrains_skia_Paint__1nSetBlendMode"] = createExportWrapper("org_jetbrains_skia_Paint__1nSetBlendMode");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nGetPathEffect = Module["org_jetbrains_skia_Paint__1nGetPathEffect"] = createExportWrapper("org_jetbrains_skia_Paint__1nGetPathEffect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nSetPathEffect = Module["org_jetbrains_skia_Paint__1nSetPathEffect"] = createExportWrapper("org_jetbrains_skia_Paint__1nSetPathEffect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nGetShader = Module["org_jetbrains_skia_Paint__1nGetShader"] = createExportWrapper("org_jetbrains_skia_Paint__1nGetShader");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nSetShader = Module["org_jetbrains_skia_Paint__1nSetShader"] = createExportWrapper("org_jetbrains_skia_Paint__1nSetShader");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nGetColorFilter = Module["org_jetbrains_skia_Paint__1nGetColorFilter"] = createExportWrapper("org_jetbrains_skia_Paint__1nGetColorFilter");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nSetColorFilter = Module["org_jetbrains_skia_Paint__1nSetColorFilter"] = createExportWrapper("org_jetbrains_skia_Paint__1nSetColorFilter");

/** @type {function(...*):?} */
var org_jetbrains_skia_Paint__1nHasNothingToDraw = Module["org_jetbrains_skia_Paint__1nHasNothingToDraw"] = createExportWrapper("org_jetbrains_skia_Paint__1nHasNothingToDraw");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathEffect__1nMakeSum = Module["org_jetbrains_skia_PathEffect__1nMakeSum"] = createExportWrapper("org_jetbrains_skia_PathEffect__1nMakeSum");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathEffect__1nMakeCompose = Module["org_jetbrains_skia_PathEffect__1nMakeCompose"] = createExportWrapper("org_jetbrains_skia_PathEffect__1nMakeCompose");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathEffect__1nMakePath1D = Module["org_jetbrains_skia_PathEffect__1nMakePath1D"] = createExportWrapper("org_jetbrains_skia_PathEffect__1nMakePath1D");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathEffect__1nMakePath2D = Module["org_jetbrains_skia_PathEffect__1nMakePath2D"] = createExportWrapper("org_jetbrains_skia_PathEffect__1nMakePath2D");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathEffect__1nMakeLine2D = Module["org_jetbrains_skia_PathEffect__1nMakeLine2D"] = createExportWrapper("org_jetbrains_skia_PathEffect__1nMakeLine2D");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathEffect__1nMakeCorner = Module["org_jetbrains_skia_PathEffect__1nMakeCorner"] = createExportWrapper("org_jetbrains_skia_PathEffect__1nMakeCorner");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathEffect__1nMakeDash = Module["org_jetbrains_skia_PathEffect__1nMakeDash"] = createExportWrapper("org_jetbrains_skia_PathEffect__1nMakeDash");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathEffect__1nMakeDiscrete = Module["org_jetbrains_skia_PathEffect__1nMakeDiscrete"] = createExportWrapper("org_jetbrains_skia_PathEffect__1nMakeDiscrete");

/** @type {function(...*):?} */
var org_jetbrains_skia_Picture__1nMakeFromData = Module["org_jetbrains_skia_Picture__1nMakeFromData"] = createExportWrapper("org_jetbrains_skia_Picture__1nMakeFromData");

/** @type {function(...*):?} */
var org_jetbrains_skia_Picture__1nPlayback = Module["org_jetbrains_skia_Picture__1nPlayback"] = createExportWrapper("org_jetbrains_skia_Picture__1nPlayback");

/** @type {function(...*):?} */
var org_jetbrains_skia_Picture__1nGetCullRect = Module["org_jetbrains_skia_Picture__1nGetCullRect"] = createExportWrapper("org_jetbrains_skia_Picture__1nGetCullRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Picture__1nGetUniqueId = Module["org_jetbrains_skia_Picture__1nGetUniqueId"] = createExportWrapper("org_jetbrains_skia_Picture__1nGetUniqueId");

/** @type {function(...*):?} */
var org_jetbrains_skia_Picture__1nSerializeToData = Module["org_jetbrains_skia_Picture__1nSerializeToData"] = createExportWrapper("org_jetbrains_skia_Picture__1nSerializeToData");

/** @type {function(...*):?} */
var org_jetbrains_skia_Picture__1nMakePlaceholder = Module["org_jetbrains_skia_Picture__1nMakePlaceholder"] = createExportWrapper("org_jetbrains_skia_Picture__1nMakePlaceholder");

/** @type {function(...*):?} */
var org_jetbrains_skia_Picture__1nGetApproximateOpCount = Module["org_jetbrains_skia_Picture__1nGetApproximateOpCount"] = createExportWrapper("org_jetbrains_skia_Picture__1nGetApproximateOpCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_Picture__1nGetApproximateBytesUsed = Module["org_jetbrains_skia_Picture__1nGetApproximateBytesUsed"] = createExportWrapper("org_jetbrains_skia_Picture__1nGetApproximateBytesUsed");

/** @type {function(...*):?} */
var org_jetbrains_skia_Picture__1nMakeShader = Module["org_jetbrains_skia_Picture__1nMakeShader"] = createExportWrapper("org_jetbrains_skia_Picture__1nMakeShader");

/** @type {function(...*):?} */
var org_jetbrains_skia_U16String__1nGetFinalizer = Module["org_jetbrains_skia_U16String__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_U16String__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nGetFinalizer = Module["org_jetbrains_skia_TextBlob__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nBounds = Module["org_jetbrains_skia_TextBlob__1nBounds"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nBounds");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nGetUniqueId = Module["org_jetbrains_skia_TextBlob__1nGetUniqueId"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nGetUniqueId");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nGetInterceptsLength = Module["org_jetbrains_skia_TextBlob__1nGetInterceptsLength"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nGetInterceptsLength");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nGetIntercepts = Module["org_jetbrains_skia_TextBlob__1nGetIntercepts"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nGetIntercepts");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nMakeFromPosH = Module["org_jetbrains_skia_TextBlob__1nMakeFromPosH"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nMakeFromPosH");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nMakeFromPos = Module["org_jetbrains_skia_TextBlob__1nMakeFromPos"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nMakeFromPos");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nMakeFromRSXform = Module["org_jetbrains_skia_TextBlob__1nMakeFromRSXform"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nMakeFromRSXform");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nSerializeToData = Module["org_jetbrains_skia_TextBlob__1nSerializeToData"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nSerializeToData");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nMakeFromData = Module["org_jetbrains_skia_TextBlob__1nMakeFromData"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nMakeFromData");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nGetGlyphsLength = Module["org_jetbrains_skia_TextBlob__1nGetGlyphsLength"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nGetGlyphsLength");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nGetGlyphs = Module["org_jetbrains_skia_TextBlob__1nGetGlyphs"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nGetGlyphs");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nGetPositionsLength = Module["org_jetbrains_skia_TextBlob__1nGetPositionsLength"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nGetPositionsLength");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nGetPositions = Module["org_jetbrains_skia_TextBlob__1nGetPositions"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nGetPositions");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nGetClustersLength = Module["org_jetbrains_skia_TextBlob__1nGetClustersLength"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nGetClustersLength");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nGetClusters = Module["org_jetbrains_skia_TextBlob__1nGetClusters"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nGetClusters");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nGetTightBounds = Module["org_jetbrains_skia_TextBlob__1nGetTightBounds"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nGetTightBounds");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nGetBlockBounds = Module["org_jetbrains_skia_TextBlob__1nGetBlockBounds"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nGetBlockBounds");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nGetFirstBaseline = Module["org_jetbrains_skia_TextBlob__1nGetFirstBaseline"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nGetFirstBaseline");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob__1nGetLastBaseline = Module["org_jetbrains_skia_TextBlob__1nGetLastBaseline"] = createExportWrapper("org_jetbrains_skia_TextBlob__1nGetLastBaseline");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob_Iter__1nCreate = Module["org_jetbrains_skia_TextBlob_Iter__1nCreate"] = createExportWrapper("org_jetbrains_skia_TextBlob_Iter__1nCreate");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob_Iter__1nGetFinalizer = Module["org_jetbrains_skia_TextBlob_Iter__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_TextBlob_Iter__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob_Iter__1nFetch = Module["org_jetbrains_skia_TextBlob_Iter__1nFetch"] = createExportWrapper("org_jetbrains_skia_TextBlob_Iter__1nFetch");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob_Iter__1nHasNext = Module["org_jetbrains_skia_TextBlob_Iter__1nHasNext"] = createExportWrapper("org_jetbrains_skia_TextBlob_Iter__1nHasNext");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob_Iter__1nGetTypeface = Module["org_jetbrains_skia_TextBlob_Iter__1nGetTypeface"] = createExportWrapper("org_jetbrains_skia_TextBlob_Iter__1nGetTypeface");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob_Iter__1nGetGlyphCount = Module["org_jetbrains_skia_TextBlob_Iter__1nGetGlyphCount"] = createExportWrapper("org_jetbrains_skia_TextBlob_Iter__1nGetGlyphCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextBlob_Iter__1nGetGlyphs = Module["org_jetbrains_skia_TextBlob_Iter__1nGetGlyphs"] = createExportWrapper("org_jetbrains_skia_TextBlob_Iter__1nGetGlyphs");

/** @type {function(...*):?} */
var org_jetbrains_skia_BreakIterator__1nGetFinalizer = Module["org_jetbrains_skia_BreakIterator__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_BreakIterator__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_BreakIterator__1nMake = Module["org_jetbrains_skia_BreakIterator__1nMake"] = createExportWrapper("org_jetbrains_skia_BreakIterator__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_BreakIterator__1nClone = Module["org_jetbrains_skia_BreakIterator__1nClone"] = createExportWrapper("org_jetbrains_skia_BreakIterator__1nClone");

/** @type {function(...*):?} */
var org_jetbrains_skia_BreakIterator__1nCurrent = Module["org_jetbrains_skia_BreakIterator__1nCurrent"] = createExportWrapper("org_jetbrains_skia_BreakIterator__1nCurrent");

/** @type {function(...*):?} */
var org_jetbrains_skia_BreakIterator__1nNext = Module["org_jetbrains_skia_BreakIterator__1nNext"] = createExportWrapper("org_jetbrains_skia_BreakIterator__1nNext");

/** @type {function(...*):?} */
var org_jetbrains_skia_BreakIterator__1nPrevious = Module["org_jetbrains_skia_BreakIterator__1nPrevious"] = createExportWrapper("org_jetbrains_skia_BreakIterator__1nPrevious");

/** @type {function(...*):?} */
var org_jetbrains_skia_BreakIterator__1nFirst = Module["org_jetbrains_skia_BreakIterator__1nFirst"] = createExportWrapper("org_jetbrains_skia_BreakIterator__1nFirst");

/** @type {function(...*):?} */
var org_jetbrains_skia_BreakIterator__1nLast = Module["org_jetbrains_skia_BreakIterator__1nLast"] = createExportWrapper("org_jetbrains_skia_BreakIterator__1nLast");

/** @type {function(...*):?} */
var org_jetbrains_skia_BreakIterator__1nPreceding = Module["org_jetbrains_skia_BreakIterator__1nPreceding"] = createExportWrapper("org_jetbrains_skia_BreakIterator__1nPreceding");

/** @type {function(...*):?} */
var org_jetbrains_skia_BreakIterator__1nFollowing = Module["org_jetbrains_skia_BreakIterator__1nFollowing"] = createExportWrapper("org_jetbrains_skia_BreakIterator__1nFollowing");

/** @type {function(...*):?} */
var org_jetbrains_skia_BreakIterator__1nIsBoundary = Module["org_jetbrains_skia_BreakIterator__1nIsBoundary"] = createExportWrapper("org_jetbrains_skia_BreakIterator__1nIsBoundary");

/** @type {function(...*):?} */
var org_jetbrains_skia_BreakIterator__1nGetRuleStatus = Module["org_jetbrains_skia_BreakIterator__1nGetRuleStatus"] = createExportWrapper("org_jetbrains_skia_BreakIterator__1nGetRuleStatus");

/** @type {function(...*):?} */
var org_jetbrains_skia_BreakIterator__1nGetRuleStatusesLen = Module["org_jetbrains_skia_BreakIterator__1nGetRuleStatusesLen"] = createExportWrapper("org_jetbrains_skia_BreakIterator__1nGetRuleStatusesLen");

/** @type {function(...*):?} */
var org_jetbrains_skia_BreakIterator__1nGetRuleStatuses = Module["org_jetbrains_skia_BreakIterator__1nGetRuleStatuses"] = createExportWrapper("org_jetbrains_skia_BreakIterator__1nGetRuleStatuses");

/** @type {function(...*):?} */
var org_jetbrains_skia_BreakIterator__1nSetText = Module["org_jetbrains_skia_BreakIterator__1nSetText"] = createExportWrapper("org_jetbrains_skia_BreakIterator__1nSetText");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetFinalizer = Module["org_jetbrains_skia_Font__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_Font__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nMakeDefault = Module["org_jetbrains_skia_Font__1nMakeDefault"] = createExportWrapper("org_jetbrains_skia_Font__1nMakeDefault");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nMakeTypeface = Module["org_jetbrains_skia_Font__1nMakeTypeface"] = createExportWrapper("org_jetbrains_skia_Font__1nMakeTypeface");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nMakeTypefaceSize = Module["org_jetbrains_skia_Font__1nMakeTypefaceSize"] = createExportWrapper("org_jetbrains_skia_Font__1nMakeTypefaceSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nMakeTypefaceSizeScaleSkew = Module["org_jetbrains_skia_Font__1nMakeTypefaceSizeScaleSkew"] = createExportWrapper("org_jetbrains_skia_Font__1nMakeTypefaceSizeScaleSkew");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nMakeClone = Module["org_jetbrains_skia_Font__1nMakeClone"] = createExportWrapper("org_jetbrains_skia_Font__1nMakeClone");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nEquals = Module["org_jetbrains_skia_Font__1nEquals"] = createExportWrapper("org_jetbrains_skia_Font__1nEquals");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nIsAutoHintingForced = Module["org_jetbrains_skia_Font__1nIsAutoHintingForced"] = createExportWrapper("org_jetbrains_skia_Font__1nIsAutoHintingForced");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nAreBitmapsEmbedded = Module["org_jetbrains_skia_Font__1nAreBitmapsEmbedded"] = createExportWrapper("org_jetbrains_skia_Font__1nAreBitmapsEmbedded");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nIsSubpixel = Module["org_jetbrains_skia_Font__1nIsSubpixel"] = createExportWrapper("org_jetbrains_skia_Font__1nIsSubpixel");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nAreMetricsLinear = Module["org_jetbrains_skia_Font__1nAreMetricsLinear"] = createExportWrapper("org_jetbrains_skia_Font__1nAreMetricsLinear");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nIsEmboldened = Module["org_jetbrains_skia_Font__1nIsEmboldened"] = createExportWrapper("org_jetbrains_skia_Font__1nIsEmboldened");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nIsBaselineSnapped = Module["org_jetbrains_skia_Font__1nIsBaselineSnapped"] = createExportWrapper("org_jetbrains_skia_Font__1nIsBaselineSnapped");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nSetAutoHintingForced = Module["org_jetbrains_skia_Font__1nSetAutoHintingForced"] = createExportWrapper("org_jetbrains_skia_Font__1nSetAutoHintingForced");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nSetBitmapsEmbedded = Module["org_jetbrains_skia_Font__1nSetBitmapsEmbedded"] = createExportWrapper("org_jetbrains_skia_Font__1nSetBitmapsEmbedded");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nSetSubpixel = Module["org_jetbrains_skia_Font__1nSetSubpixel"] = createExportWrapper("org_jetbrains_skia_Font__1nSetSubpixel");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nSetMetricsLinear = Module["org_jetbrains_skia_Font__1nSetMetricsLinear"] = createExportWrapper("org_jetbrains_skia_Font__1nSetMetricsLinear");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nSetEmboldened = Module["org_jetbrains_skia_Font__1nSetEmboldened"] = createExportWrapper("org_jetbrains_skia_Font__1nSetEmboldened");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nSetBaselineSnapped = Module["org_jetbrains_skia_Font__1nSetBaselineSnapped"] = createExportWrapper("org_jetbrains_skia_Font__1nSetBaselineSnapped");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetEdging = Module["org_jetbrains_skia_Font__1nGetEdging"] = createExportWrapper("org_jetbrains_skia_Font__1nGetEdging");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nSetEdging = Module["org_jetbrains_skia_Font__1nSetEdging"] = createExportWrapper("org_jetbrains_skia_Font__1nSetEdging");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetHinting = Module["org_jetbrains_skia_Font__1nGetHinting"] = createExportWrapper("org_jetbrains_skia_Font__1nGetHinting");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nSetHinting = Module["org_jetbrains_skia_Font__1nSetHinting"] = createExportWrapper("org_jetbrains_skia_Font__1nSetHinting");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetTypeface = Module["org_jetbrains_skia_Font__1nGetTypeface"] = createExportWrapper("org_jetbrains_skia_Font__1nGetTypeface");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetTypefaceOrDefault = Module["org_jetbrains_skia_Font__1nGetTypefaceOrDefault"] = createExportWrapper("org_jetbrains_skia_Font__1nGetTypefaceOrDefault");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetSize = Module["org_jetbrains_skia_Font__1nGetSize"] = createExportWrapper("org_jetbrains_skia_Font__1nGetSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetScaleX = Module["org_jetbrains_skia_Font__1nGetScaleX"] = createExportWrapper("org_jetbrains_skia_Font__1nGetScaleX");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetSkewX = Module["org_jetbrains_skia_Font__1nGetSkewX"] = createExportWrapper("org_jetbrains_skia_Font__1nGetSkewX");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nSetTypeface = Module["org_jetbrains_skia_Font__1nSetTypeface"] = createExportWrapper("org_jetbrains_skia_Font__1nSetTypeface");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nSetSize = Module["org_jetbrains_skia_Font__1nSetSize"] = createExportWrapper("org_jetbrains_skia_Font__1nSetSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nSetScaleX = Module["org_jetbrains_skia_Font__1nSetScaleX"] = createExportWrapper("org_jetbrains_skia_Font__1nSetScaleX");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nSetSkewX = Module["org_jetbrains_skia_Font__1nSetSkewX"] = createExportWrapper("org_jetbrains_skia_Font__1nSetSkewX");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetUTF32Glyphs = Module["org_jetbrains_skia_Font__1nGetUTF32Glyphs"] = createExportWrapper("org_jetbrains_skia_Font__1nGetUTF32Glyphs");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetUTF32Glyph = Module["org_jetbrains_skia_Font__1nGetUTF32Glyph"] = createExportWrapper("org_jetbrains_skia_Font__1nGetUTF32Glyph");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetStringGlyphsCount = Module["org_jetbrains_skia_Font__1nGetStringGlyphsCount"] = createExportWrapper("org_jetbrains_skia_Font__1nGetStringGlyphsCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nMeasureText = Module["org_jetbrains_skia_Font__1nMeasureText"] = createExportWrapper("org_jetbrains_skia_Font__1nMeasureText");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nMeasureTextWidth = Module["org_jetbrains_skia_Font__1nMeasureTextWidth"] = createExportWrapper("org_jetbrains_skia_Font__1nMeasureTextWidth");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetWidths = Module["org_jetbrains_skia_Font__1nGetWidths"] = createExportWrapper("org_jetbrains_skia_Font__1nGetWidths");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetBounds = Module["org_jetbrains_skia_Font__1nGetBounds"] = createExportWrapper("org_jetbrains_skia_Font__1nGetBounds");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetPositions = Module["org_jetbrains_skia_Font__1nGetPositions"] = createExportWrapper("org_jetbrains_skia_Font__1nGetPositions");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetXPositions = Module["org_jetbrains_skia_Font__1nGetXPositions"] = createExportWrapper("org_jetbrains_skia_Font__1nGetXPositions");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetPath = Module["org_jetbrains_skia_Font__1nGetPath"] = createExportWrapper("org_jetbrains_skia_Font__1nGetPath");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetPaths = Module["org_jetbrains_skia_Font__1nGetPaths"] = createExportWrapper("org_jetbrains_skia_Font__1nGetPaths");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetMetrics = Module["org_jetbrains_skia_Font__1nGetMetrics"] = createExportWrapper("org_jetbrains_skia_Font__1nGetMetrics");

/** @type {function(...*):?} */
var org_jetbrains_skia_Font__1nGetSpacing = Module["org_jetbrains_skia_Font__1nGetSpacing"] = createExportWrapper("org_jetbrains_skia_Font__1nGetSpacing");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathMeasure__1nGetFinalizer = Module["org_jetbrains_skia_PathMeasure__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_PathMeasure__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathMeasure__1nMake = Module["org_jetbrains_skia_PathMeasure__1nMake"] = createExportWrapper("org_jetbrains_skia_PathMeasure__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathMeasure__1nMakePath = Module["org_jetbrains_skia_PathMeasure__1nMakePath"] = createExportWrapper("org_jetbrains_skia_PathMeasure__1nMakePath");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathMeasure__1nSetPath = Module["org_jetbrains_skia_PathMeasure__1nSetPath"] = createExportWrapper("org_jetbrains_skia_PathMeasure__1nSetPath");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathMeasure__1nGetLength = Module["org_jetbrains_skia_PathMeasure__1nGetLength"] = createExportWrapper("org_jetbrains_skia_PathMeasure__1nGetLength");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathMeasure__1nGetPosition = Module["org_jetbrains_skia_PathMeasure__1nGetPosition"] = createExportWrapper("org_jetbrains_skia_PathMeasure__1nGetPosition");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathMeasure__1nGetTangent = Module["org_jetbrains_skia_PathMeasure__1nGetTangent"] = createExportWrapper("org_jetbrains_skia_PathMeasure__1nGetTangent");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathMeasure__1nGetRSXform = Module["org_jetbrains_skia_PathMeasure__1nGetRSXform"] = createExportWrapper("org_jetbrains_skia_PathMeasure__1nGetRSXform");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathMeasure__1nGetMatrix = Module["org_jetbrains_skia_PathMeasure__1nGetMatrix"] = createExportWrapper("org_jetbrains_skia_PathMeasure__1nGetMatrix");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathMeasure__1nGetSegment = Module["org_jetbrains_skia_PathMeasure__1nGetSegment"] = createExportWrapper("org_jetbrains_skia_PathMeasure__1nGetSegment");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathMeasure__1nIsClosed = Module["org_jetbrains_skia_PathMeasure__1nIsClosed"] = createExportWrapper("org_jetbrains_skia_PathMeasure__1nIsClosed");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathMeasure__1nNextContour = Module["org_jetbrains_skia_PathMeasure__1nNextContour"] = createExportWrapper("org_jetbrains_skia_PathMeasure__1nNextContour");

/** @type {function(...*):?} */
var org_jetbrains_skia_Codec__1nGetFinalizer = Module["org_jetbrains_skia_Codec__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_Codec__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_Codec__1nMakeFromData = Module["org_jetbrains_skia_Codec__1nMakeFromData"] = createExportWrapper("org_jetbrains_skia_Codec__1nMakeFromData");

/** @type {function(...*):?} */
var org_jetbrains_skia_Codec__1nGetImageInfo = Module["org_jetbrains_skia_Codec__1nGetImageInfo"] = createExportWrapper("org_jetbrains_skia_Codec__1nGetImageInfo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Codec__1nGetSizeWidth = Module["org_jetbrains_skia_Codec__1nGetSizeWidth"] = createExportWrapper("org_jetbrains_skia_Codec__1nGetSizeWidth");

/** @type {function(...*):?} */
var org_jetbrains_skia_Codec__1nGetSizeHeight = Module["org_jetbrains_skia_Codec__1nGetSizeHeight"] = createExportWrapper("org_jetbrains_skia_Codec__1nGetSizeHeight");

/** @type {function(...*):?} */
var org_jetbrains_skia_Codec__1nGetEncodedOrigin = Module["org_jetbrains_skia_Codec__1nGetEncodedOrigin"] = createExportWrapper("org_jetbrains_skia_Codec__1nGetEncodedOrigin");

/** @type {function(...*):?} */
var org_jetbrains_skia_Codec__1nGetEncodedImageFormat = Module["org_jetbrains_skia_Codec__1nGetEncodedImageFormat"] = createExportWrapper("org_jetbrains_skia_Codec__1nGetEncodedImageFormat");

/** @type {function(...*):?} */
var org_jetbrains_skia_Codec__1nReadPixels = Module["org_jetbrains_skia_Codec__1nReadPixels"] = createExportWrapper("org_jetbrains_skia_Codec__1nReadPixels");

/** @type {function(...*):?} */
var org_jetbrains_skia_Codec__1nGetFrameCount = Module["org_jetbrains_skia_Codec__1nGetFrameCount"] = createExportWrapper("org_jetbrains_skia_Codec__1nGetFrameCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_Codec__1nGetFrameInfo = Module["org_jetbrains_skia_Codec__1nGetFrameInfo"] = createExportWrapper("org_jetbrains_skia_Codec__1nGetFrameInfo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Codec__1nGetFramesInfo = Module["org_jetbrains_skia_Codec__1nGetFramesInfo"] = createExportWrapper("org_jetbrains_skia_Codec__1nGetFramesInfo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Codec__1nFramesInfo_Delete = Module["org_jetbrains_skia_Codec__1nFramesInfo_Delete"] = createExportWrapper("org_jetbrains_skia_Codec__1nFramesInfo_Delete");

/** @type {function(...*):?} */
var org_jetbrains_skia_Codec__1nFramesInfo_GetSize = Module["org_jetbrains_skia_Codec__1nFramesInfo_GetSize"] = createExportWrapper("org_jetbrains_skia_Codec__1nFramesInfo_GetSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_Codec__1nFramesInfo_GetInfos = Module["org_jetbrains_skia_Codec__1nFramesInfo_GetInfos"] = createExportWrapper("org_jetbrains_skia_Codec__1nFramesInfo_GetInfos");

/** @type {function(...*):?} */
var org_jetbrains_skia_Codec__1nGetRepetitionCount = Module["org_jetbrains_skia_Codec__1nGetRepetitionCount"] = createExportWrapper("org_jetbrains_skia_Codec__1nGetRepetitionCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathSegmentIterator__1nMake = Module["org_jetbrains_skia_PathSegmentIterator__1nMake"] = createExportWrapper("org_jetbrains_skia_PathSegmentIterator__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer = Module["org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_PathSegmentIterator__1nNext = Module["org_jetbrains_skia_PathSegmentIterator__1nNext"] = createExportWrapper("org_jetbrains_skia_PathSegmentIterator__1nNext");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextBox__1nGetArraySize = Module["org_jetbrains_skia_paragraph_TextBox__1nGetArraySize"] = createExportWrapper("org_jetbrains_skia_paragraph_TextBox__1nGetArraySize");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextBox__1nDisposeArray = Module["org_jetbrains_skia_paragraph_TextBox__1nDisposeArray"] = createExportWrapper("org_jetbrains_skia_paragraph_TextBox__1nDisposeArray");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement = Module["org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement"] = createExportWrapper("org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize = Module["org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize"] = createExportWrapper("org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray = Module["org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray"] = createExportWrapper("org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement = Module["org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement"] = createExportWrapper("org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_FontCollection__1nMake = Module["org_jetbrains_skia_paragraph_FontCollection__1nMake"] = createExportWrapper("org_jetbrains_skia_paragraph_FontCollection__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_FontCollection__1nGetFontManagersCount = Module["org_jetbrains_skia_paragraph_FontCollection__1nGetFontManagersCount"] = createExportWrapper("org_jetbrains_skia_paragraph_FontCollection__1nGetFontManagersCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager = Module["org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager"] = createExportWrapper("org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_FontCollection__1nSetDynamicFontManager = Module["org_jetbrains_skia_paragraph_FontCollection__1nSetDynamicFontManager"] = createExportWrapper("org_jetbrains_skia_paragraph_FontCollection__1nSetDynamicFontManager");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_FontCollection__1nSetTestFontManager = Module["org_jetbrains_skia_paragraph_FontCollection__1nSetTestFontManager"] = createExportWrapper("org_jetbrains_skia_paragraph_FontCollection__1nSetTestFontManager");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager = Module["org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager"] = createExportWrapper("org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_FontCollection__1nGetFallbackManager = Module["org_jetbrains_skia_paragraph_FontCollection__1nGetFallbackManager"] = createExportWrapper("org_jetbrains_skia_paragraph_FontCollection__1nGetFallbackManager");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces = Module["org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces"] = createExportWrapper("org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_FontCollection__1nDefaultFallbackChar = Module["org_jetbrains_skia_paragraph_FontCollection__1nDefaultFallbackChar"] = createExportWrapper("org_jetbrains_skia_paragraph_FontCollection__1nDefaultFallbackChar");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_FontCollection__1nDefaultFallback = Module["org_jetbrains_skia_paragraph_FontCollection__1nDefaultFallback"] = createExportWrapper("org_jetbrains_skia_paragraph_FontCollection__1nDefaultFallback");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_FontCollection__1nSetEnableFallback = Module["org_jetbrains_skia_paragraph_FontCollection__1nSetEnableFallback"] = createExportWrapper("org_jetbrains_skia_paragraph_FontCollection__1nSetEnableFallback");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_FontCollection__1nGetParagraphCache = Module["org_jetbrains_skia_paragraph_FontCollection__1nGetParagraphCache"] = createExportWrapper("org_jetbrains_skia_paragraph_FontCollection__1nGetParagraphCache");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake = Module["org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake"] = createExportWrapper("org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TypefaceFontProvider__1nRegisterTypeface = Module["org_jetbrains_skia_paragraph_TypefaceFontProvider__1nRegisterTypeface"] = createExportWrapper("org_jetbrains_skia_paragraph_TypefaceFontProvider__1nRegisterTypeface");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nMake = Module["org_jetbrains_skia_paragraph_TextStyle__1nMake"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nEquals = Module["org_jetbrains_skia_paragraph_TextStyle__1nEquals"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nEquals");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nAttributeEquals = Module["org_jetbrains_skia_paragraph_TextStyle__1nAttributeEquals"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nAttributeEquals");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetColor = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetColor"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetColor");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nSetColor = Module["org_jetbrains_skia_paragraph_TextStyle__1nSetColor"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nSetColor");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetForeground = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetForeground"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetForeground");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nSetForeground = Module["org_jetbrains_skia_paragraph_TextStyle__1nSetForeground"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nSetForeground");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetBackground = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetBackground"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetBackground");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nSetBackground = Module["org_jetbrains_skia_paragraph_TextStyle__1nSetBackground"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nSetBackground");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetDecorationStyle = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetDecorationStyle"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetDecorationStyle");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle = Module["org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle = Module["org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetShadowsCount = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetShadowsCount"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetShadowsCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetShadows = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetShadows"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetShadows");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nAddShadow = Module["org_jetbrains_skia_paragraph_TextStyle__1nAddShadow"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nAddShadow");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nClearShadows = Module["org_jetbrains_skia_paragraph_TextStyle__1nClearShadows"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nClearShadows");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetFontFeaturesSize = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetFontFeaturesSize"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetFontFeaturesSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetFontFeatures = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetFontFeatures"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetFontFeatures");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature = Module["org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nClearFontFeatures = Module["org_jetbrains_skia_paragraph_TextStyle__1nClearFontFeatures"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nClearFontFeatures");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetFontSize = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetFontSize"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetFontSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize = Module["org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetFontFamilies = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetFontFamilies"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetFontFamilies");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies = Module["org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetHeight = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetHeight"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetHeight");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nSetHeight = Module["org_jetbrains_skia_paragraph_TextStyle__1nSetHeight"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nSetHeight");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetHalfLeading = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetHalfLeading"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetHalfLeading");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nSetHalfLeading = Module["org_jetbrains_skia_paragraph_TextStyle__1nSetHalfLeading"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nSetHalfLeading");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetBaselineShift = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetBaselineShift"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetBaselineShift");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift = Module["org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetLetterSpacing = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetLetterSpacing"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetLetterSpacing");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing = Module["org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetWordSpacing = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetWordSpacing"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetWordSpacing");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nSetWordSpacing = Module["org_jetbrains_skia_paragraph_TextStyle__1nSetWordSpacing"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nSetWordSpacing");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetTypeface = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetTypeface"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetTypeface");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nSetTypeface = Module["org_jetbrains_skia_paragraph_TextStyle__1nSetTypeface"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nSetTypeface");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetLocale = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetLocale"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetLocale");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nSetLocale = Module["org_jetbrains_skia_paragraph_TextStyle__1nSetLocale"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nSetLocale");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetBaselineMode = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetBaselineMode"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetBaselineMode");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineMode = Module["org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineMode"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineMode");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics = Module["org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nIsPlaceholder = Module["org_jetbrains_skia_paragraph_TextStyle__1nIsPlaceholder"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nIsPlaceholder");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_TextStyle__1nSetPlaceholder = Module["org_jetbrains_skia_paragraph_TextStyle__1nSetPlaceholder"] = createExportWrapper("org_jetbrains_skia_paragraph_TextStyle__1nSetPlaceholder");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphCache__1nAbandon = Module["org_jetbrains_skia_paragraph_ParagraphCache__1nAbandon"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphCache__1nAbandon");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphCache__1nReset = Module["org_jetbrains_skia_paragraph_ParagraphCache__1nReset"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphCache__1nReset");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphCache__1nUpdateParagraph = Module["org_jetbrains_skia_paragraph_ParagraphCache__1nUpdateParagraph"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphCache__1nUpdateParagraph");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphCache__1nFindParagraph = Module["org_jetbrains_skia_paragraph_ParagraphCache__1nFindParagraph"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphCache__1nFindParagraph");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphCache__1nPrintStatistics = Module["org_jetbrains_skia_paragraph_ParagraphCache__1nPrintStatistics"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphCache__1nPrintStatistics");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphCache__1nSetEnabled = Module["org_jetbrains_skia_paragraph_ParagraphCache__1nSetEnabled"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphCache__1nSetEnabled");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphCache__1nGetCount = Module["org_jetbrains_skia_paragraph_ParagraphCache__1nGetCount"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphCache__1nGetCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nMake = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nMake"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nGetStrutStyle = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nGetStrutStyle"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nGetStrutStyle");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nSetStrutStyle = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nSetStrutStyle"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nSetStrutStyle");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nGetTextStyle = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nGetTextStyle"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nGetTextStyle");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nGetDirection = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nGetDirection"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nGetDirection");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nGetAlignment = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nGetAlignment"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nGetAlignment");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nGetMaxLinesCount = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nGetMaxLinesCount"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nGetMaxLinesCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEllipsis = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEllipsis"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEllipsis");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHeight = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHeight"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHeight");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeight = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeight"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeight");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHeightMode = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHeightMode"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHeightMode");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeightMode = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeightMode"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeightMode");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEffectiveAlignment = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEffectiveAlignment"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEffectiveAlignment");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nIsHintingEnabled = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nIsHintingEnabled"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nIsHintingEnabled");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nDisableHinting = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nDisableHinting"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nDisableHinting");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nSetFontRastrSettings = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nSetFontRastrSettings"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nSetFontRastrSettings");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEdging = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEdging"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nGetEdging");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHinting = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHinting"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nGetHinting");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nGetSubpixel = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nGetSubpixel"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nGetSubpixel");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphStyle__1nGetTextIndent = Module["org_jetbrains_skia_paragraph_ParagraphStyle__1nGetTextIndent"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphStyle__1nGetTextIndent");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer = Module["org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nGetMaxWidth = Module["org_jetbrains_skia_paragraph_Paragraph__1nGetMaxWidth"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nGetMaxWidth");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nGetHeight = Module["org_jetbrains_skia_paragraph_Paragraph__1nGetHeight"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nGetHeight");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth = Module["org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth = Module["org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline = Module["org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nGetIdeographicBaseline = Module["org_jetbrains_skia_paragraph_Paragraph__1nGetIdeographicBaseline"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nGetIdeographicBaseline");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nGetLongestLine = Module["org_jetbrains_skia_paragraph_Paragraph__1nGetLongestLine"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nGetLongestLine");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines = Module["org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nLayout = Module["org_jetbrains_skia_paragraph_Paragraph__1nLayout"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nLayout");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nPaint = Module["org_jetbrains_skia_paragraph_Paragraph__1nPaint"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nPaint");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange = Module["org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders = Module["org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nGetGlyphPositionAtCoordinate = Module["org_jetbrains_skia_paragraph_Paragraph__1nGetGlyphPositionAtCoordinate"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nGetGlyphPositionAtCoordinate");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nGetWordBoundary = Module["org_jetbrains_skia_paragraph_Paragraph__1nGetWordBoundary"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nGetWordBoundary");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics = Module["org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber = Module["org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nMarkDirty = Module["org_jetbrains_skia_paragraph_Paragraph__1nMarkDirty"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nMarkDirty");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nGetUnresolvedGlyphsCount = Module["org_jetbrains_skia_paragraph_Paragraph__1nGetUnresolvedGlyphsCount"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nGetUnresolvedGlyphsCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nUpdateAlignment = Module["org_jetbrains_skia_paragraph_Paragraph__1nUpdateAlignment"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nUpdateAlignment");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nUpdateFontSize = Module["org_jetbrains_skia_paragraph_Paragraph__1nUpdateFontSize"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nUpdateFontSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nUpdateForegroundPaint = Module["org_jetbrains_skia_paragraph_Paragraph__1nUpdateForegroundPaint"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nUpdateForegroundPaint");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_Paragraph__1nUpdateBackgroundPaint = Module["org_jetbrains_skia_paragraph_Paragraph__1nUpdateBackgroundPaint"] = createExportWrapper("org_jetbrains_skia_paragraph_Paragraph__1nUpdateBackgroundPaint");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake = Module["org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer = Module["org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle = Module["org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphBuilder__1nPopStyle = Module["org_jetbrains_skia_paragraph_ParagraphBuilder__1nPopStyle"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphBuilder__1nPopStyle");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText = Module["org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder = Module["org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild = Module["org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild"] = createExportWrapper("org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nGetFinalizer = Module["org_jetbrains_skia_paragraph_StrutStyle__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nMake = Module["org_jetbrains_skia_paragraph_StrutStyle__1nMake"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nEquals = Module["org_jetbrains_skia_paragraph_StrutStyle__1nEquals"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nEquals");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nGetFontFamilies = Module["org_jetbrains_skia_paragraph_StrutStyle__1nGetFontFamilies"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nGetFontFamilies");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nSetFontFamilies = Module["org_jetbrains_skia_paragraph_StrutStyle__1nSetFontFamilies"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nSetFontFamilies");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nGetFontStyle = Module["org_jetbrains_skia_paragraph_StrutStyle__1nGetFontStyle"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nGetFontStyle");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nSetFontStyle = Module["org_jetbrains_skia_paragraph_StrutStyle__1nSetFontStyle"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nSetFontStyle");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nGetFontSize = Module["org_jetbrains_skia_paragraph_StrutStyle__1nGetFontSize"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nGetFontSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nSetFontSize = Module["org_jetbrains_skia_paragraph_StrutStyle__1nSetFontSize"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nSetFontSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nGetHeight = Module["org_jetbrains_skia_paragraph_StrutStyle__1nGetHeight"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nGetHeight");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nSetHeight = Module["org_jetbrains_skia_paragraph_StrutStyle__1nSetHeight"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nSetHeight");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nGetLeading = Module["org_jetbrains_skia_paragraph_StrutStyle__1nGetLeading"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nGetLeading");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nSetLeading = Module["org_jetbrains_skia_paragraph_StrutStyle__1nSetLeading"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nSetLeading");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nIsEnabled = Module["org_jetbrains_skia_paragraph_StrutStyle__1nIsEnabled"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nIsEnabled");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nSetEnabled = Module["org_jetbrains_skia_paragraph_StrutStyle__1nSetEnabled"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nSetEnabled");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightForced = Module["org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightForced"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightForced");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightForced = Module["org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightForced"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightForced");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightOverridden = Module["org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightOverridden"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightOverridden");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightOverridden = Module["org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightOverridden"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightOverridden");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nIsHalfLeading = Module["org_jetbrains_skia_paragraph_StrutStyle__1nIsHalfLeading"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nIsHalfLeading");

/** @type {function(...*):?} */
var org_jetbrains_skia_paragraph_StrutStyle__1nSetHalfLeading = Module["org_jetbrains_skia_paragraph_StrutStyle__1nSetHalfLeading"] = createExportWrapper("org_jetbrains_skia_paragraph_StrutStyle__1nSetHalfLeading");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nMakeRasterDirect = Module["org_jetbrains_skia_Surface__1nMakeRasterDirect"] = createExportWrapper("org_jetbrains_skia_Surface__1nMakeRasterDirect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nMakeRasterDirectWithPixmap = Module["org_jetbrains_skia_Surface__1nMakeRasterDirectWithPixmap"] = createExportWrapper("org_jetbrains_skia_Surface__1nMakeRasterDirectWithPixmap");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nMakeRaster = Module["org_jetbrains_skia_Surface__1nMakeRaster"] = createExportWrapper("org_jetbrains_skia_Surface__1nMakeRaster");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nMakeRasterN32Premul = Module["org_jetbrains_skia_Surface__1nMakeRasterN32Premul"] = createExportWrapper("org_jetbrains_skia_Surface__1nMakeRasterN32Premul");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget = Module["org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget"] = createExportWrapper("org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nMakeFromMTKView = Module["org_jetbrains_skia_Surface__1nMakeFromMTKView"] = createExportWrapper("org_jetbrains_skia_Surface__1nMakeFromMTKView");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nMakeRenderTarget = Module["org_jetbrains_skia_Surface__1nMakeRenderTarget"] = createExportWrapper("org_jetbrains_skia_Surface__1nMakeRenderTarget");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nMakeNull = Module["org_jetbrains_skia_Surface__1nMakeNull"] = createExportWrapper("org_jetbrains_skia_Surface__1nMakeNull");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nGetCanvas = Module["org_jetbrains_skia_Surface__1nGetCanvas"] = createExportWrapper("org_jetbrains_skia_Surface__1nGetCanvas");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nGetWidth = Module["org_jetbrains_skia_Surface__1nGetWidth"] = createExportWrapper("org_jetbrains_skia_Surface__1nGetWidth");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nGetHeight = Module["org_jetbrains_skia_Surface__1nGetHeight"] = createExportWrapper("org_jetbrains_skia_Surface__1nGetHeight");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nMakeImageSnapshot = Module["org_jetbrains_skia_Surface__1nMakeImageSnapshot"] = createExportWrapper("org_jetbrains_skia_Surface__1nMakeImageSnapshot");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nMakeImageSnapshotR = Module["org_jetbrains_skia_Surface__1nMakeImageSnapshotR"] = createExportWrapper("org_jetbrains_skia_Surface__1nMakeImageSnapshotR");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nGenerationId = Module["org_jetbrains_skia_Surface__1nGenerationId"] = createExportWrapper("org_jetbrains_skia_Surface__1nGenerationId");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nReadPixelsToPixmap = Module["org_jetbrains_skia_Surface__1nReadPixelsToPixmap"] = createExportWrapper("org_jetbrains_skia_Surface__1nReadPixelsToPixmap");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nReadPixels = Module["org_jetbrains_skia_Surface__1nReadPixels"] = createExportWrapper("org_jetbrains_skia_Surface__1nReadPixels");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nWritePixelsFromPixmap = Module["org_jetbrains_skia_Surface__1nWritePixelsFromPixmap"] = createExportWrapper("org_jetbrains_skia_Surface__1nWritePixelsFromPixmap");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nWritePixels = Module["org_jetbrains_skia_Surface__1nWritePixels"] = createExportWrapper("org_jetbrains_skia_Surface__1nWritePixels");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nFlushAndSubmit = Module["org_jetbrains_skia_Surface__1nFlushAndSubmit"] = createExportWrapper("org_jetbrains_skia_Surface__1nFlushAndSubmit");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nFlush = Module["org_jetbrains_skia_Surface__1nFlush"] = createExportWrapper("org_jetbrains_skia_Surface__1nFlush");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nUnique = Module["org_jetbrains_skia_Surface__1nUnique"] = createExportWrapper("org_jetbrains_skia_Surface__1nUnique");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nGetImageInfo = Module["org_jetbrains_skia_Surface__1nGetImageInfo"] = createExportWrapper("org_jetbrains_skia_Surface__1nGetImageInfo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nMakeSurface = Module["org_jetbrains_skia_Surface__1nMakeSurface"] = createExportWrapper("org_jetbrains_skia_Surface__1nMakeSurface");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nMakeSurfaceI = Module["org_jetbrains_skia_Surface__1nMakeSurfaceI"] = createExportWrapper("org_jetbrains_skia_Surface__1nMakeSurfaceI");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nDraw = Module["org_jetbrains_skia_Surface__1nDraw"] = createExportWrapper("org_jetbrains_skia_Surface__1nDraw");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nPeekPixels = Module["org_jetbrains_skia_Surface__1nPeekPixels"] = createExportWrapper("org_jetbrains_skia_Surface__1nPeekPixels");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nNotifyContentWillChange = Module["org_jetbrains_skia_Surface__1nNotifyContentWillChange"] = createExportWrapper("org_jetbrains_skia_Surface__1nNotifyContentWillChange");

/** @type {function(...*):?} */
var org_jetbrains_skia_Surface__1nGetRecordingContext = Module["org_jetbrains_skia_Surface__1nGetRecordingContext"] = createExportWrapper("org_jetbrains_skia_Surface__1nGetRecordingContext");

/** @type {function(...*):?} */
var org_jetbrains_skia_ManagedString__1nGetFinalizer = Module["org_jetbrains_skia_ManagedString__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_ManagedString__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_ManagedString__1nMake = Module["org_jetbrains_skia_ManagedString__1nMake"] = createExportWrapper("org_jetbrains_skia_ManagedString__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_ManagedString__nStringSize = Module["org_jetbrains_skia_ManagedString__nStringSize"] = createExportWrapper("org_jetbrains_skia_ManagedString__nStringSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_ManagedString__nStringData = Module["org_jetbrains_skia_ManagedString__nStringData"] = createExportWrapper("org_jetbrains_skia_ManagedString__nStringData");

/** @type {function(...*):?} */
var org_jetbrains_skia_ManagedString__1nInsert = Module["org_jetbrains_skia_ManagedString__1nInsert"] = createExportWrapper("org_jetbrains_skia_ManagedString__1nInsert");

/** @type {function(...*):?} */
var org_jetbrains_skia_ManagedString__1nAppend = Module["org_jetbrains_skia_ManagedString__1nAppend"] = createExportWrapper("org_jetbrains_skia_ManagedString__1nAppend");

/** @type {function(...*):?} */
var org_jetbrains_skia_ManagedString__1nRemoveSuffix = Module["org_jetbrains_skia_ManagedString__1nRemoveSuffix"] = createExportWrapper("org_jetbrains_skia_ManagedString__1nRemoveSuffix");

/** @type {function(...*):?} */
var org_jetbrains_skia_ManagedString__1nRemove = Module["org_jetbrains_skia_ManagedString__1nRemove"] = createExportWrapper("org_jetbrains_skia_ManagedString__1nRemove");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nMake = Module["org_jetbrains_skia_Region__1nMake"] = createExportWrapper("org_jetbrains_skia_Region__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nGetFinalizer = Module["org_jetbrains_skia_Region__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_Region__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nSet = Module["org_jetbrains_skia_Region__1nSet"] = createExportWrapper("org_jetbrains_skia_Region__1nSet");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nIsEmpty = Module["org_jetbrains_skia_Region__1nIsEmpty"] = createExportWrapper("org_jetbrains_skia_Region__1nIsEmpty");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nIsRect = Module["org_jetbrains_skia_Region__1nIsRect"] = createExportWrapper("org_jetbrains_skia_Region__1nIsRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nIsComplex = Module["org_jetbrains_skia_Region__1nIsComplex"] = createExportWrapper("org_jetbrains_skia_Region__1nIsComplex");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nGetBounds = Module["org_jetbrains_skia_Region__1nGetBounds"] = createExportWrapper("org_jetbrains_skia_Region__1nGetBounds");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nComputeRegionComplexity = Module["org_jetbrains_skia_Region__1nComputeRegionComplexity"] = createExportWrapper("org_jetbrains_skia_Region__1nComputeRegionComplexity");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nGetBoundaryPath = Module["org_jetbrains_skia_Region__1nGetBoundaryPath"] = createExportWrapper("org_jetbrains_skia_Region__1nGetBoundaryPath");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nSetEmpty = Module["org_jetbrains_skia_Region__1nSetEmpty"] = createExportWrapper("org_jetbrains_skia_Region__1nSetEmpty");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nSetRect = Module["org_jetbrains_skia_Region__1nSetRect"] = createExportWrapper("org_jetbrains_skia_Region__1nSetRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nSetRects = Module["org_jetbrains_skia_Region__1nSetRects"] = createExportWrapper("org_jetbrains_skia_Region__1nSetRects");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nSetRegion = Module["org_jetbrains_skia_Region__1nSetRegion"] = createExportWrapper("org_jetbrains_skia_Region__1nSetRegion");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nSetPath = Module["org_jetbrains_skia_Region__1nSetPath"] = createExportWrapper("org_jetbrains_skia_Region__1nSetPath");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nIntersectsIRect = Module["org_jetbrains_skia_Region__1nIntersectsIRect"] = createExportWrapper("org_jetbrains_skia_Region__1nIntersectsIRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nIntersectsRegion = Module["org_jetbrains_skia_Region__1nIntersectsRegion"] = createExportWrapper("org_jetbrains_skia_Region__1nIntersectsRegion");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nContainsIPoint = Module["org_jetbrains_skia_Region__1nContainsIPoint"] = createExportWrapper("org_jetbrains_skia_Region__1nContainsIPoint");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nContainsIRect = Module["org_jetbrains_skia_Region__1nContainsIRect"] = createExportWrapper("org_jetbrains_skia_Region__1nContainsIRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nContainsRegion = Module["org_jetbrains_skia_Region__1nContainsRegion"] = createExportWrapper("org_jetbrains_skia_Region__1nContainsRegion");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nQuickContains = Module["org_jetbrains_skia_Region__1nQuickContains"] = createExportWrapper("org_jetbrains_skia_Region__1nQuickContains");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nQuickRejectIRect = Module["org_jetbrains_skia_Region__1nQuickRejectIRect"] = createExportWrapper("org_jetbrains_skia_Region__1nQuickRejectIRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nQuickRejectRegion = Module["org_jetbrains_skia_Region__1nQuickRejectRegion"] = createExportWrapper("org_jetbrains_skia_Region__1nQuickRejectRegion");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nTranslate = Module["org_jetbrains_skia_Region__1nTranslate"] = createExportWrapper("org_jetbrains_skia_Region__1nTranslate");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nOpIRect = Module["org_jetbrains_skia_Region__1nOpIRect"] = createExportWrapper("org_jetbrains_skia_Region__1nOpIRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nOpRegion = Module["org_jetbrains_skia_Region__1nOpRegion"] = createExportWrapper("org_jetbrains_skia_Region__1nOpRegion");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nOpIRectRegion = Module["org_jetbrains_skia_Region__1nOpIRectRegion"] = createExportWrapper("org_jetbrains_skia_Region__1nOpIRectRegion");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nOpRegionIRect = Module["org_jetbrains_skia_Region__1nOpRegionIRect"] = createExportWrapper("org_jetbrains_skia_Region__1nOpRegionIRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Region__1nOpRegionRegion = Module["org_jetbrains_skia_Region__1nOpRegionRegion"] = createExportWrapper("org_jetbrains_skia_Region__1nOpRegionRegion");

/** @type {function(...*):?} */
var org_jetbrains_skia_FontStyleSet__1nMakeEmpty = Module["org_jetbrains_skia_FontStyleSet__1nMakeEmpty"] = createExportWrapper("org_jetbrains_skia_FontStyleSet__1nMakeEmpty");

/** @type {function(...*):?} */
var org_jetbrains_skia_FontStyleSet__1nCount = Module["org_jetbrains_skia_FontStyleSet__1nCount"] = createExportWrapper("org_jetbrains_skia_FontStyleSet__1nCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_FontStyleSet__1nGetStyle = Module["org_jetbrains_skia_FontStyleSet__1nGetStyle"] = createExportWrapper("org_jetbrains_skia_FontStyleSet__1nGetStyle");

/** @type {function(...*):?} */
var org_jetbrains_skia_FontStyleSet__1nGetStyleName = Module["org_jetbrains_skia_FontStyleSet__1nGetStyleName"] = createExportWrapper("org_jetbrains_skia_FontStyleSet__1nGetStyleName");

/** @type {function(...*):?} */
var org_jetbrains_skia_FontStyleSet__1nGetTypeface = Module["org_jetbrains_skia_FontStyleSet__1nGetTypeface"] = createExportWrapper("org_jetbrains_skia_FontStyleSet__1nGetTypeface");

/** @type {function(...*):?} */
var org_jetbrains_skia_FontStyleSet__1nMatchStyle = Module["org_jetbrains_skia_FontStyleSet__1nMatchStyle"] = createExportWrapper("org_jetbrains_skia_FontStyleSet__1nMatchStyle");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetFinalizer = Module["org_jetbrains_skia_TextLine__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetAscent = Module["org_jetbrains_skia_TextLine__1nGetAscent"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetAscent");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetCapHeight = Module["org_jetbrains_skia_TextLine__1nGetCapHeight"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetCapHeight");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetXHeight = Module["org_jetbrains_skia_TextLine__1nGetXHeight"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetXHeight");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetDescent = Module["org_jetbrains_skia_TextLine__1nGetDescent"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetDescent");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetLeading = Module["org_jetbrains_skia_TextLine__1nGetLeading"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetLeading");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetWidth = Module["org_jetbrains_skia_TextLine__1nGetWidth"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetWidth");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetHeight = Module["org_jetbrains_skia_TextLine__1nGetHeight"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetHeight");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetTextBlob = Module["org_jetbrains_skia_TextLine__1nGetTextBlob"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetTextBlob");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetGlyphsLength = Module["org_jetbrains_skia_TextLine__1nGetGlyphsLength"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetGlyphsLength");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetGlyphs = Module["org_jetbrains_skia_TextLine__1nGetGlyphs"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetGlyphs");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetPositions = Module["org_jetbrains_skia_TextLine__1nGetPositions"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetPositions");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetRunPositionsCount = Module["org_jetbrains_skia_TextLine__1nGetRunPositionsCount"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetRunPositionsCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetRunPositions = Module["org_jetbrains_skia_TextLine__1nGetRunPositions"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetRunPositions");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetBreakPositionsCount = Module["org_jetbrains_skia_TextLine__1nGetBreakPositionsCount"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetBreakPositionsCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetBreakPositions = Module["org_jetbrains_skia_TextLine__1nGetBreakPositions"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetBreakPositions");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetBreakOffsetsCount = Module["org_jetbrains_skia_TextLine__1nGetBreakOffsetsCount"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetBreakOffsetsCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetBreakOffsets = Module["org_jetbrains_skia_TextLine__1nGetBreakOffsets"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetBreakOffsets");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetOffsetAtCoord = Module["org_jetbrains_skia_TextLine__1nGetOffsetAtCoord"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetOffsetAtCoord");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetLeftOffsetAtCoord = Module["org_jetbrains_skia_TextLine__1nGetLeftOffsetAtCoord"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetLeftOffsetAtCoord");

/** @type {function(...*):?} */
var org_jetbrains_skia_TextLine__1nGetCoordAtOffset = Module["org_jetbrains_skia_TextLine__1nGetCoordAtOffset"] = createExportWrapper("org_jetbrains_skia_TextLine__1nGetCoordAtOffset");

/** @type {function(...*):?} */
var org_jetbrains_skia_impl_Managed__invokeFinalizer = Module["org_jetbrains_skia_impl_Managed__invokeFinalizer"] = createExportWrapper("org_jetbrains_skia_impl_Managed__invokeFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_sksg_InvalidationController_nGetFinalizer = Module["org_jetbrains_skia_sksg_InvalidationController_nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_sksg_InvalidationController_nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_sksg_InvalidationController_nMake = Module["org_jetbrains_skia_sksg_InvalidationController_nMake"] = createExportWrapper("org_jetbrains_skia_sksg_InvalidationController_nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_sksg_InvalidationController_nInvalidate = Module["org_jetbrains_skia_sksg_InvalidationController_nInvalidate"] = createExportWrapper("org_jetbrains_skia_sksg_InvalidationController_nInvalidate");

/** @type {function(...*):?} */
var org_jetbrains_skia_sksg_InvalidationController_nGetBounds = Module["org_jetbrains_skia_sksg_InvalidationController_nGetBounds"] = createExportWrapper("org_jetbrains_skia_sksg_InvalidationController_nGetBounds");

/** @type {function(...*):?} */
var org_jetbrains_skia_sksg_InvalidationController_nReset = Module["org_jetbrains_skia_sksg_InvalidationController_nReset"] = createExportWrapper("org_jetbrains_skia_sksg_InvalidationController_nReset");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Logger__1nMake = Module["org_jetbrains_skia_skottie_Logger__1nMake"] = createExportWrapper("org_jetbrains_skia_skottie_Logger__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Logger__1nInit = Module["org_jetbrains_skia_skottie_Logger__1nInit"] = createExportWrapper("org_jetbrains_skia_skottie_Logger__1nInit");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Logger__1nGetLogMessage = Module["org_jetbrains_skia_skottie_Logger__1nGetLogMessage"] = createExportWrapper("org_jetbrains_skia_skottie_Logger__1nGetLogMessage");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Logger__1nGetLogJson = Module["org_jetbrains_skia_skottie_Logger__1nGetLogJson"] = createExportWrapper("org_jetbrains_skia_skottie_Logger__1nGetLogJson");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Logger__1nGetLogLevel = Module["org_jetbrains_skia_skottie_Logger__1nGetLogLevel"] = createExportWrapper("org_jetbrains_skia_skottie_Logger__1nGetLogLevel");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_AnimationBuilder__1nGetFinalizer = Module["org_jetbrains_skia_skottie_AnimationBuilder__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_skottie_AnimationBuilder__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_AnimationBuilder__1nMake = Module["org_jetbrains_skia_skottie_AnimationBuilder__1nMake"] = createExportWrapper("org_jetbrains_skia_skottie_AnimationBuilder__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_AnimationBuilder__1nSetFontManager = Module["org_jetbrains_skia_skottie_AnimationBuilder__1nSetFontManager"] = createExportWrapper("org_jetbrains_skia_skottie_AnimationBuilder__1nSetFontManager");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_AnimationBuilder__1nSetLogger = Module["org_jetbrains_skia_skottie_AnimationBuilder__1nSetLogger"] = createExportWrapper("org_jetbrains_skia_skottie_AnimationBuilder__1nSetLogger");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromString = Module["org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromString"] = createExportWrapper("org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromString");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromFile = Module["org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromFile"] = createExportWrapper("org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromFile");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromData = Module["org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromData"] = createExportWrapper("org_jetbrains_skia_skottie_AnimationBuilder__1nBuildFromData");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Animation__1nGetFinalizer = Module["org_jetbrains_skia_skottie_Animation__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_skottie_Animation__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Animation__1nMakeFromString = Module["org_jetbrains_skia_skottie_Animation__1nMakeFromString"] = createExportWrapper("org_jetbrains_skia_skottie_Animation__1nMakeFromString");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Animation__1nMakeFromFile = Module["org_jetbrains_skia_skottie_Animation__1nMakeFromFile"] = createExportWrapper("org_jetbrains_skia_skottie_Animation__1nMakeFromFile");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Animation__1nMakeFromData = Module["org_jetbrains_skia_skottie_Animation__1nMakeFromData"] = createExportWrapper("org_jetbrains_skia_skottie_Animation__1nMakeFromData");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Animation__1nRender = Module["org_jetbrains_skia_skottie_Animation__1nRender"] = createExportWrapper("org_jetbrains_skia_skottie_Animation__1nRender");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Animation__1nSeek = Module["org_jetbrains_skia_skottie_Animation__1nSeek"] = createExportWrapper("org_jetbrains_skia_skottie_Animation__1nSeek");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Animation__1nSeekFrame = Module["org_jetbrains_skia_skottie_Animation__1nSeekFrame"] = createExportWrapper("org_jetbrains_skia_skottie_Animation__1nSeekFrame");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Animation__1nSeekFrameTime = Module["org_jetbrains_skia_skottie_Animation__1nSeekFrameTime"] = createExportWrapper("org_jetbrains_skia_skottie_Animation__1nSeekFrameTime");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Animation__1nGetDuration = Module["org_jetbrains_skia_skottie_Animation__1nGetDuration"] = createExportWrapper("org_jetbrains_skia_skottie_Animation__1nGetDuration");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Animation__1nGetFPS = Module["org_jetbrains_skia_skottie_Animation__1nGetFPS"] = createExportWrapper("org_jetbrains_skia_skottie_Animation__1nGetFPS");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Animation__1nGetInPoint = Module["org_jetbrains_skia_skottie_Animation__1nGetInPoint"] = createExportWrapper("org_jetbrains_skia_skottie_Animation__1nGetInPoint");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Animation__1nGetOutPoint = Module["org_jetbrains_skia_skottie_Animation__1nGetOutPoint"] = createExportWrapper("org_jetbrains_skia_skottie_Animation__1nGetOutPoint");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Animation__1nGetVersion = Module["org_jetbrains_skia_skottie_Animation__1nGetVersion"] = createExportWrapper("org_jetbrains_skia_skottie_Animation__1nGetVersion");

/** @type {function(...*):?} */
var org_jetbrains_skia_skottie_Animation__1nGetSize = Module["org_jetbrains_skia_skottie_Animation__1nGetSize"] = createExportWrapper("org_jetbrains_skia_skottie_Animation__1nGetSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetFontStyle = Module["org_jetbrains_skia_Typeface__1nGetFontStyle"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetFontStyle");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nIsFixedPitch = Module["org_jetbrains_skia_Typeface__1nIsFixedPitch"] = createExportWrapper("org_jetbrains_skia_Typeface__1nIsFixedPitch");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetVariationsCount = Module["org_jetbrains_skia_Typeface__1nGetVariationsCount"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetVariationsCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetVariations = Module["org_jetbrains_skia_Typeface__1nGetVariations"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetVariations");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetVariationAxesCount = Module["org_jetbrains_skia_Typeface__1nGetVariationAxesCount"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetVariationAxesCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetVariationAxes = Module["org_jetbrains_skia_Typeface__1nGetVariationAxes"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetVariationAxes");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetUniqueId = Module["org_jetbrains_skia_Typeface__1nGetUniqueId"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetUniqueId");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nEquals = Module["org_jetbrains_skia_Typeface__1nEquals"] = createExportWrapper("org_jetbrains_skia_Typeface__1nEquals");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nMakeDefault = Module["org_jetbrains_skia_Typeface__1nMakeDefault"] = createExportWrapper("org_jetbrains_skia_Typeface__1nMakeDefault");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nMakeFromName = Module["org_jetbrains_skia_Typeface__1nMakeFromName"] = createExportWrapper("org_jetbrains_skia_Typeface__1nMakeFromName");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nMakeFromFile = Module["org_jetbrains_skia_Typeface__1nMakeFromFile"] = createExportWrapper("org_jetbrains_skia_Typeface__1nMakeFromFile");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nMakeFromData = Module["org_jetbrains_skia_Typeface__1nMakeFromData"] = createExportWrapper("org_jetbrains_skia_Typeface__1nMakeFromData");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nMakeClone = Module["org_jetbrains_skia_Typeface__1nMakeClone"] = createExportWrapper("org_jetbrains_skia_Typeface__1nMakeClone");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetUTF32Glyphs = Module["org_jetbrains_skia_Typeface__1nGetUTF32Glyphs"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetUTF32Glyphs");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetUTF32Glyph = Module["org_jetbrains_skia_Typeface__1nGetUTF32Glyph"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetUTF32Glyph");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetGlyphsCount = Module["org_jetbrains_skia_Typeface__1nGetGlyphsCount"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetGlyphsCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetTablesCount = Module["org_jetbrains_skia_Typeface__1nGetTablesCount"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetTablesCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetTableTagsCount = Module["org_jetbrains_skia_Typeface__1nGetTableTagsCount"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetTableTagsCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetTableTags = Module["org_jetbrains_skia_Typeface__1nGetTableTags"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetTableTags");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetTableSize = Module["org_jetbrains_skia_Typeface__1nGetTableSize"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetTableSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetTableData = Module["org_jetbrains_skia_Typeface__1nGetTableData"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetTableData");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetUnitsPerEm = Module["org_jetbrains_skia_Typeface__1nGetUnitsPerEm"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetUnitsPerEm");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetKerningPairAdjustments = Module["org_jetbrains_skia_Typeface__1nGetKerningPairAdjustments"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetKerningPairAdjustments");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetFamilyNames = Module["org_jetbrains_skia_Typeface__1nGetFamilyNames"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetFamilyNames");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetFamilyName = Module["org_jetbrains_skia_Typeface__1nGetFamilyName"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetFamilyName");

/** @type {function(...*):?} */
var org_jetbrains_skia_Typeface__1nGetBounds = Module["org_jetbrains_skia_Typeface__1nGetBounds"] = createExportWrapper("org_jetbrains_skia_Typeface__1nGetBounds");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorSpace__1nGetFinalizer = Module["org_jetbrains_skia_ColorSpace__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_ColorSpace__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorSpace__1nMakeSRGB = Module["org_jetbrains_skia_ColorSpace__1nMakeSRGB"] = createExportWrapper("org_jetbrains_skia_ColorSpace__1nMakeSRGB");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear = Module["org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear"] = createExportWrapper("org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorSpace__1nMakeDisplayP3 = Module["org_jetbrains_skia_ColorSpace__1nMakeDisplayP3"] = createExportWrapper("org_jetbrains_skia_ColorSpace__1nMakeDisplayP3");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorSpace__nConvert = Module["org_jetbrains_skia_ColorSpace__nConvert"] = createExportWrapper("org_jetbrains_skia_ColorSpace__nConvert");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorSpace__1nIsGammaCloseToSRGB = Module["org_jetbrains_skia_ColorSpace__1nIsGammaCloseToSRGB"] = createExportWrapper("org_jetbrains_skia_ColorSpace__1nIsGammaCloseToSRGB");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorSpace__1nIsGammaLinear = Module["org_jetbrains_skia_ColorSpace__1nIsGammaLinear"] = createExportWrapper("org_jetbrains_skia_ColorSpace__1nIsGammaLinear");

/** @type {function(...*):?} */
var org_jetbrains_skia_ColorSpace__1nIsSRGB = Module["org_jetbrains_skia_ColorSpace__1nIsSRGB"] = createExportWrapper("org_jetbrains_skia_ColorSpace__1nIsSRGB");

/** @type {function(...*):?} */
var org_jetbrains_skia_impl_RefCnt__getFinalizer = Module["org_jetbrains_skia_impl_RefCnt__getFinalizer"] = createExportWrapper("org_jetbrains_skia_impl_RefCnt__getFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_impl_RefCnt__getRefCount = Module["org_jetbrains_skia_impl_RefCnt__getRefCount"] = createExportWrapper("org_jetbrains_skia_impl_RefCnt__getRefCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nGetFinalizer = Module["org_jetbrains_skia_Pixmap__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nMakeNull = Module["org_jetbrains_skia_Pixmap__1nMakeNull"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nMakeNull");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nMake = Module["org_jetbrains_skia_Pixmap__1nMake"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nReset = Module["org_jetbrains_skia_Pixmap__1nReset"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nReset");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nResetWithInfo = Module["org_jetbrains_skia_Pixmap__1nResetWithInfo"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nResetWithInfo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nSetColorSpace = Module["org_jetbrains_skia_Pixmap__1nSetColorSpace"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nSetColorSpace");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nExtractSubset = Module["org_jetbrains_skia_Pixmap__1nExtractSubset"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nExtractSubset");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nGetInfo = Module["org_jetbrains_skia_Pixmap__1nGetInfo"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nGetInfo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nGetRowBytes = Module["org_jetbrains_skia_Pixmap__1nGetRowBytes"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nGetRowBytes");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nGetAddr = Module["org_jetbrains_skia_Pixmap__1nGetAddr"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nGetAddr");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nGetRowBytesAsPixels = Module["org_jetbrains_skia_Pixmap__1nGetRowBytesAsPixels"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nGetRowBytesAsPixels");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nComputeByteSize = Module["org_jetbrains_skia_Pixmap__1nComputeByteSize"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nComputeByteSize");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nComputeIsOpaque = Module["org_jetbrains_skia_Pixmap__1nComputeIsOpaque"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nComputeIsOpaque");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nGetColor = Module["org_jetbrains_skia_Pixmap__1nGetColor"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nGetColor");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nGetAlphaF = Module["org_jetbrains_skia_Pixmap__1nGetAlphaF"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nGetAlphaF");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nGetAddrAt = Module["org_jetbrains_skia_Pixmap__1nGetAddrAt"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nGetAddrAt");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nReadPixels = Module["org_jetbrains_skia_Pixmap__1nReadPixels"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nReadPixels");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nReadPixelsFromPoint = Module["org_jetbrains_skia_Pixmap__1nReadPixelsFromPoint"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nReadPixelsFromPoint");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nReadPixelsToPixmap = Module["org_jetbrains_skia_Pixmap__1nReadPixelsToPixmap"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nReadPixelsToPixmap");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nReadPixelsToPixmapFromPoint = Module["org_jetbrains_skia_Pixmap__1nReadPixelsToPixmapFromPoint"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nReadPixelsToPixmapFromPoint");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nScalePixels = Module["org_jetbrains_skia_Pixmap__1nScalePixels"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nScalePixels");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nErase = Module["org_jetbrains_skia_Pixmap__1nErase"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nErase");

/** @type {function(...*):?} */
var org_jetbrains_skia_Pixmap__1nEraseSubset = Module["org_jetbrains_skia_Pixmap__1nEraseSubset"] = createExportWrapper("org_jetbrains_skia_Pixmap__1nEraseSubset");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nGetFinalizer = Module["org_jetbrains_skia_Path__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_Path__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nMake = Module["org_jetbrains_skia_Path__1nMake"] = createExportWrapper("org_jetbrains_skia_Path__1nMake");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nMakeFromSVGString = Module["org_jetbrains_skia_Path__1nMakeFromSVGString"] = createExportWrapper("org_jetbrains_skia_Path__1nMakeFromSVGString");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nEquals = Module["org_jetbrains_skia_Path__1nEquals"] = createExportWrapper("org_jetbrains_skia_Path__1nEquals");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nIsInterpolatable = Module["org_jetbrains_skia_Path__1nIsInterpolatable"] = createExportWrapper("org_jetbrains_skia_Path__1nIsInterpolatable");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nMakeLerp = Module["org_jetbrains_skia_Path__1nMakeLerp"] = createExportWrapper("org_jetbrains_skia_Path__1nMakeLerp");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nGetFillMode = Module["org_jetbrains_skia_Path__1nGetFillMode"] = createExportWrapper("org_jetbrains_skia_Path__1nGetFillMode");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nSetFillMode = Module["org_jetbrains_skia_Path__1nSetFillMode"] = createExportWrapper("org_jetbrains_skia_Path__1nSetFillMode");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nIsConvex = Module["org_jetbrains_skia_Path__1nIsConvex"] = createExportWrapper("org_jetbrains_skia_Path__1nIsConvex");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nIsOval = Module["org_jetbrains_skia_Path__1nIsOval"] = createExportWrapper("org_jetbrains_skia_Path__1nIsOval");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nIsRRect = Module["org_jetbrains_skia_Path__1nIsRRect"] = createExportWrapper("org_jetbrains_skia_Path__1nIsRRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nReset = Module["org_jetbrains_skia_Path__1nReset"] = createExportWrapper("org_jetbrains_skia_Path__1nReset");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nRewind = Module["org_jetbrains_skia_Path__1nRewind"] = createExportWrapper("org_jetbrains_skia_Path__1nRewind");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nIsEmpty = Module["org_jetbrains_skia_Path__1nIsEmpty"] = createExportWrapper("org_jetbrains_skia_Path__1nIsEmpty");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nIsLastContourClosed = Module["org_jetbrains_skia_Path__1nIsLastContourClosed"] = createExportWrapper("org_jetbrains_skia_Path__1nIsLastContourClosed");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nIsFinite = Module["org_jetbrains_skia_Path__1nIsFinite"] = createExportWrapper("org_jetbrains_skia_Path__1nIsFinite");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nIsVolatile = Module["org_jetbrains_skia_Path__1nIsVolatile"] = createExportWrapper("org_jetbrains_skia_Path__1nIsVolatile");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nSetVolatile = Module["org_jetbrains_skia_Path__1nSetVolatile"] = createExportWrapper("org_jetbrains_skia_Path__1nSetVolatile");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nIsLineDegenerate = Module["org_jetbrains_skia_Path__1nIsLineDegenerate"] = createExportWrapper("org_jetbrains_skia_Path__1nIsLineDegenerate");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nIsQuadDegenerate = Module["org_jetbrains_skia_Path__1nIsQuadDegenerate"] = createExportWrapper("org_jetbrains_skia_Path__1nIsQuadDegenerate");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nIsCubicDegenerate = Module["org_jetbrains_skia_Path__1nIsCubicDegenerate"] = createExportWrapper("org_jetbrains_skia_Path__1nIsCubicDegenerate");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nMaybeGetAsLine = Module["org_jetbrains_skia_Path__1nMaybeGetAsLine"] = createExportWrapper("org_jetbrains_skia_Path__1nMaybeGetAsLine");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nGetPointsCount = Module["org_jetbrains_skia_Path__1nGetPointsCount"] = createExportWrapper("org_jetbrains_skia_Path__1nGetPointsCount");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nGetPoint = Module["org_jetbrains_skia_Path__1nGetPoint"] = createExportWrapper("org_jetbrains_skia_Path__1nGetPoint");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nGetPoints = Module["org_jetbrains_skia_Path__1nGetPoints"] = createExportWrapper("org_jetbrains_skia_Path__1nGetPoints");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nCountVerbs = Module["org_jetbrains_skia_Path__1nCountVerbs"] = createExportWrapper("org_jetbrains_skia_Path__1nCountVerbs");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nGetVerbs = Module["org_jetbrains_skia_Path__1nGetVerbs"] = createExportWrapper("org_jetbrains_skia_Path__1nGetVerbs");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nApproximateBytesUsed = Module["org_jetbrains_skia_Path__1nApproximateBytesUsed"] = createExportWrapper("org_jetbrains_skia_Path__1nApproximateBytesUsed");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nSwap = Module["org_jetbrains_skia_Path__1nSwap"] = createExportWrapper("org_jetbrains_skia_Path__1nSwap");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nGetBounds = Module["org_jetbrains_skia_Path__1nGetBounds"] = createExportWrapper("org_jetbrains_skia_Path__1nGetBounds");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nUpdateBoundsCache = Module["org_jetbrains_skia_Path__1nUpdateBoundsCache"] = createExportWrapper("org_jetbrains_skia_Path__1nUpdateBoundsCache");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nComputeTightBounds = Module["org_jetbrains_skia_Path__1nComputeTightBounds"] = createExportWrapper("org_jetbrains_skia_Path__1nComputeTightBounds");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nConservativelyContainsRect = Module["org_jetbrains_skia_Path__1nConservativelyContainsRect"] = createExportWrapper("org_jetbrains_skia_Path__1nConservativelyContainsRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nIncReserve = Module["org_jetbrains_skia_Path__1nIncReserve"] = createExportWrapper("org_jetbrains_skia_Path__1nIncReserve");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nMoveTo = Module["org_jetbrains_skia_Path__1nMoveTo"] = createExportWrapper("org_jetbrains_skia_Path__1nMoveTo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nRMoveTo = Module["org_jetbrains_skia_Path__1nRMoveTo"] = createExportWrapper("org_jetbrains_skia_Path__1nRMoveTo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nLineTo = Module["org_jetbrains_skia_Path__1nLineTo"] = createExportWrapper("org_jetbrains_skia_Path__1nLineTo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nRLineTo = Module["org_jetbrains_skia_Path__1nRLineTo"] = createExportWrapper("org_jetbrains_skia_Path__1nRLineTo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nQuadTo = Module["org_jetbrains_skia_Path__1nQuadTo"] = createExportWrapper("org_jetbrains_skia_Path__1nQuadTo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nRQuadTo = Module["org_jetbrains_skia_Path__1nRQuadTo"] = createExportWrapper("org_jetbrains_skia_Path__1nRQuadTo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nConicTo = Module["org_jetbrains_skia_Path__1nConicTo"] = createExportWrapper("org_jetbrains_skia_Path__1nConicTo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nRConicTo = Module["org_jetbrains_skia_Path__1nRConicTo"] = createExportWrapper("org_jetbrains_skia_Path__1nRConicTo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nCubicTo = Module["org_jetbrains_skia_Path__1nCubicTo"] = createExportWrapper("org_jetbrains_skia_Path__1nCubicTo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nRCubicTo = Module["org_jetbrains_skia_Path__1nRCubicTo"] = createExportWrapper("org_jetbrains_skia_Path__1nRCubicTo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nArcTo = Module["org_jetbrains_skia_Path__1nArcTo"] = createExportWrapper("org_jetbrains_skia_Path__1nArcTo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nTangentArcTo = Module["org_jetbrains_skia_Path__1nTangentArcTo"] = createExportWrapper("org_jetbrains_skia_Path__1nTangentArcTo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nEllipticalArcTo = Module["org_jetbrains_skia_Path__1nEllipticalArcTo"] = createExportWrapper("org_jetbrains_skia_Path__1nEllipticalArcTo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nREllipticalArcTo = Module["org_jetbrains_skia_Path__1nREllipticalArcTo"] = createExportWrapper("org_jetbrains_skia_Path__1nREllipticalArcTo");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nClosePath = Module["org_jetbrains_skia_Path__1nClosePath"] = createExportWrapper("org_jetbrains_skia_Path__1nClosePath");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nConvertConicToQuads = Module["org_jetbrains_skia_Path__1nConvertConicToQuads"] = createExportWrapper("org_jetbrains_skia_Path__1nConvertConicToQuads");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nIsRect = Module["org_jetbrains_skia_Path__1nIsRect"] = createExportWrapper("org_jetbrains_skia_Path__1nIsRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nAddRect = Module["org_jetbrains_skia_Path__1nAddRect"] = createExportWrapper("org_jetbrains_skia_Path__1nAddRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nAddOval = Module["org_jetbrains_skia_Path__1nAddOval"] = createExportWrapper("org_jetbrains_skia_Path__1nAddOval");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nAddCircle = Module["org_jetbrains_skia_Path__1nAddCircle"] = createExportWrapper("org_jetbrains_skia_Path__1nAddCircle");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nAddArc = Module["org_jetbrains_skia_Path__1nAddArc"] = createExportWrapper("org_jetbrains_skia_Path__1nAddArc");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nAddRRect = Module["org_jetbrains_skia_Path__1nAddRRect"] = createExportWrapper("org_jetbrains_skia_Path__1nAddRRect");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nAddPoly = Module["org_jetbrains_skia_Path__1nAddPoly"] = createExportWrapper("org_jetbrains_skia_Path__1nAddPoly");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nAddPath = Module["org_jetbrains_skia_Path__1nAddPath"] = createExportWrapper("org_jetbrains_skia_Path__1nAddPath");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nAddPathOffset = Module["org_jetbrains_skia_Path__1nAddPathOffset"] = createExportWrapper("org_jetbrains_skia_Path__1nAddPathOffset");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nAddPathTransform = Module["org_jetbrains_skia_Path__1nAddPathTransform"] = createExportWrapper("org_jetbrains_skia_Path__1nAddPathTransform");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nReverseAddPath = Module["org_jetbrains_skia_Path__1nReverseAddPath"] = createExportWrapper("org_jetbrains_skia_Path__1nReverseAddPath");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nOffset = Module["org_jetbrains_skia_Path__1nOffset"] = createExportWrapper("org_jetbrains_skia_Path__1nOffset");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nTransform = Module["org_jetbrains_skia_Path__1nTransform"] = createExportWrapper("org_jetbrains_skia_Path__1nTransform");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nGetLastPt = Module["org_jetbrains_skia_Path__1nGetLastPt"] = createExportWrapper("org_jetbrains_skia_Path__1nGetLastPt");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nSetLastPt = Module["org_jetbrains_skia_Path__1nSetLastPt"] = createExportWrapper("org_jetbrains_skia_Path__1nSetLastPt");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nGetSegmentMasks = Module["org_jetbrains_skia_Path__1nGetSegmentMasks"] = createExportWrapper("org_jetbrains_skia_Path__1nGetSegmentMasks");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nContains = Module["org_jetbrains_skia_Path__1nContains"] = createExportWrapper("org_jetbrains_skia_Path__1nContains");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nDump = Module["org_jetbrains_skia_Path__1nDump"] = createExportWrapper("org_jetbrains_skia_Path__1nDump");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nDumpHex = Module["org_jetbrains_skia_Path__1nDumpHex"] = createExportWrapper("org_jetbrains_skia_Path__1nDumpHex");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nSerializeToBytes = Module["org_jetbrains_skia_Path__1nSerializeToBytes"] = createExportWrapper("org_jetbrains_skia_Path__1nSerializeToBytes");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nMakeCombining = Module["org_jetbrains_skia_Path__1nMakeCombining"] = createExportWrapper("org_jetbrains_skia_Path__1nMakeCombining");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nMakeFromBytes = Module["org_jetbrains_skia_Path__1nMakeFromBytes"] = createExportWrapper("org_jetbrains_skia_Path__1nMakeFromBytes");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nGetGenerationId = Module["org_jetbrains_skia_Path__1nGetGenerationId"] = createExportWrapper("org_jetbrains_skia_Path__1nGetGenerationId");

/** @type {function(...*):?} */
var org_jetbrains_skia_Path__1nIsValid = Module["org_jetbrains_skia_Path__1nIsValid"] = createExportWrapper("org_jetbrains_skia_Path__1nIsValid");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeAlphaThreshold = Module["org_jetbrains_skia_ImageFilter__1nMakeAlphaThreshold"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeAlphaThreshold");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeArithmetic = Module["org_jetbrains_skia_ImageFilter__1nMakeArithmetic"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeArithmetic");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeBlend = Module["org_jetbrains_skia_ImageFilter__1nMakeBlend"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeBlend");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeBlur = Module["org_jetbrains_skia_ImageFilter__1nMakeBlur"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeBlur");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeColorFilter = Module["org_jetbrains_skia_ImageFilter__1nMakeColorFilter"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeColorFilter");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeCompose = Module["org_jetbrains_skia_ImageFilter__1nMakeCompose"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeCompose");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeDisplacementMap = Module["org_jetbrains_skia_ImageFilter__1nMakeDisplacementMap"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeDisplacementMap");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeDropShadow = Module["org_jetbrains_skia_ImageFilter__1nMakeDropShadow"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeDropShadow");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeDropShadowOnly = Module["org_jetbrains_skia_ImageFilter__1nMakeDropShadowOnly"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeDropShadowOnly");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeImage = Module["org_jetbrains_skia_ImageFilter__1nMakeImage"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeImage");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeMagnifier = Module["org_jetbrains_skia_ImageFilter__1nMakeMagnifier"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeMagnifier");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeMatrixConvolution = Module["org_jetbrains_skia_ImageFilter__1nMakeMatrixConvolution"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeMatrixConvolution");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeMatrixTransform = Module["org_jetbrains_skia_ImageFilter__1nMakeMatrixTransform"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeMatrixTransform");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeMerge = Module["org_jetbrains_skia_ImageFilter__1nMakeMerge"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeMerge");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeOffset = Module["org_jetbrains_skia_ImageFilter__1nMakeOffset"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeOffset");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeShader = Module["org_jetbrains_skia_ImageFilter__1nMakeShader"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeShader");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakePicture = Module["org_jetbrains_skia_ImageFilter__1nMakePicture"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakePicture");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeRuntimeShader = Module["org_jetbrains_skia_ImageFilter__1nMakeRuntimeShader"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeRuntimeShader");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeRuntimeShaderFromArray = Module["org_jetbrains_skia_ImageFilter__1nMakeRuntimeShaderFromArray"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeRuntimeShaderFromArray");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeTile = Module["org_jetbrains_skia_ImageFilter__1nMakeTile"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeTile");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeDilate = Module["org_jetbrains_skia_ImageFilter__1nMakeDilate"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeDilate");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeErode = Module["org_jetbrains_skia_ImageFilter__1nMakeErode"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeErode");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeDistantLitDiffuse = Module["org_jetbrains_skia_ImageFilter__1nMakeDistantLitDiffuse"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeDistantLitDiffuse");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakePointLitDiffuse = Module["org_jetbrains_skia_ImageFilter__1nMakePointLitDiffuse"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakePointLitDiffuse");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeSpotLitDiffuse = Module["org_jetbrains_skia_ImageFilter__1nMakeSpotLitDiffuse"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeSpotLitDiffuse");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeDistantLitSpecular = Module["org_jetbrains_skia_ImageFilter__1nMakeDistantLitSpecular"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeDistantLitSpecular");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakePointLitSpecular = Module["org_jetbrains_skia_ImageFilter__1nMakePointLitSpecular"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakePointLitSpecular");

/** @type {function(...*):?} */
var org_jetbrains_skia_ImageFilter__1nMakeSpotLitSpecular = Module["org_jetbrains_skia_ImageFilter__1nMakeSpotLitSpecular"] = createExportWrapper("org_jetbrains_skia_ImageFilter__1nMakeSpotLitSpecular");

/** @type {function(...*):?} */
var _fflush = Module["_fflush"] = createExportWrapper("fflush");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeShaderBuilder__1nGetFinalizer = Module["org_jetbrains_skia_RuntimeShaderBuilder__1nGetFinalizer"] = createExportWrapper("org_jetbrains_skia_RuntimeShaderBuilder__1nGetFinalizer");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeShaderBuilder__1nMakeFromRuntimeEffect = Module["org_jetbrains_skia_RuntimeShaderBuilder__1nMakeFromRuntimeEffect"] = createExportWrapper("org_jetbrains_skia_RuntimeShaderBuilder__1nMakeFromRuntimeEffect");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt = Module["org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt"] = createExportWrapper("org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt2 = Module["org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt2"] = createExportWrapper("org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt2");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt3 = Module["org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt3"] = createExportWrapper("org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt3");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt4 = Module["org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt4"] = createExportWrapper("org_jetbrains_skia_RuntimeShaderBuilder__1nUniformInt4");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat = Module["org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat"] = createExportWrapper("org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat2 = Module["org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat2"] = createExportWrapper("org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat2");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat3 = Module["org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat3"] = createExportWrapper("org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat3");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat4 = Module["org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat4"] = createExportWrapper("org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloat4");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix22 = Module["org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix22"] = createExportWrapper("org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix22");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix33 = Module["org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix33"] = createExportWrapper("org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix33");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix44 = Module["org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix44"] = createExportWrapper("org_jetbrains_skia_RuntimeShaderBuilder__1nUniformFloatMatrix44");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeShaderBuilder__1nChildShader = Module["org_jetbrains_skia_RuntimeShaderBuilder__1nChildShader"] = createExportWrapper("org_jetbrains_skia_RuntimeShaderBuilder__1nChildShader");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeShaderBuilder__1nChildColorFilter = Module["org_jetbrains_skia_RuntimeShaderBuilder__1nChildColorFilter"] = createExportWrapper("org_jetbrains_skia_RuntimeShaderBuilder__1nChildColorFilter");

/** @type {function(...*):?} */
var org_jetbrains_skia_RuntimeShaderBuilder__1nMakeShader = Module["org_jetbrains_skia_RuntimeShaderBuilder__1nMakeShader"] = createExportWrapper("org_jetbrains_skia_RuntimeShaderBuilder__1nMakeShader");

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");

/** @type {function(...*):?} */
var _saveSetjmp = Module["_saveSetjmp"] = createExportWrapper("saveSetjmp");

/** @type {function(...*):?} */
var ___getTypeName = Module["___getTypeName"] = createExportWrapper("__getTypeName");

/** @type {function(...*):?} */
var ___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = createExportWrapper("__embind_register_native_and_builtin_types");

/** @type {function(...*):?} */
var _emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = createExportWrapper("emscripten_main_thread_process_queued_calls");

/** @type {function(...*):?} */
var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = function() {
  return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __get_tzname = Module["__get_tzname"] = createExportWrapper("_get_tzname");

/** @type {function(...*):?} */
var __get_daylight = Module["__get_daylight"] = createExportWrapper("_get_daylight");

/** @type {function(...*):?} */
var __get_timezone = Module["__get_timezone"] = createExportWrapper("_get_timezone");

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = createExportWrapper("stackSave");

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");

/** @type {function(...*):?} */
var _emscripten_stack_init = Module["_emscripten_stack_init"] = function() {
  return (_emscripten_stack_init = Module["_emscripten_stack_init"] = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = function() {
  return (_emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _setThrew = Module["_setThrew"] = createExportWrapper("setThrew");

/** @type {function(...*):?} */
var _memalign = Module["_memalign"] = createExportWrapper("memalign");

/** @type {function(...*):?} */
var dynCall_viji = Module["dynCall_viji"] = createExportWrapper("dynCall_viji");

/** @type {function(...*):?} */
var dynCall_vijiii = Module["dynCall_vijiii"] = createExportWrapper("dynCall_vijiii");

/** @type {function(...*):?} */
var dynCall_viiiiij = Module["dynCall_viiiiij"] = createExportWrapper("dynCall_viiiiij");

/** @type {function(...*):?} */
var dynCall_jii = Module["dynCall_jii"] = createExportWrapper("dynCall_jii");

/** @type {function(...*):?} */
var dynCall_vij = Module["dynCall_vij"] = createExportWrapper("dynCall_vij");

/** @type {function(...*):?} */
var dynCall_iiij = Module["dynCall_iiij"] = createExportWrapper("dynCall_iiij");

/** @type {function(...*):?} */
var dynCall_iiiij = Module["dynCall_iiiij"] = createExportWrapper("dynCall_iiiij");

/** @type {function(...*):?} */
var dynCall_viij = Module["dynCall_viij"] = createExportWrapper("dynCall_viij");

/** @type {function(...*):?} */
var dynCall_viiij = Module["dynCall_viiij"] = createExportWrapper("dynCall_viiij");

/** @type {function(...*):?} */
var dynCall_ji = Module["dynCall_ji"] = createExportWrapper("dynCall_ji");

/** @type {function(...*):?} */
var dynCall_iij = Module["dynCall_iij"] = createExportWrapper("dynCall_iij");

/** @type {function(...*):?} */
var dynCall_jiiiii = Module["dynCall_jiiiii"] = createExportWrapper("dynCall_jiiiii");

/** @type {function(...*):?} */
var dynCall_jiiiiii = Module["dynCall_jiiiiii"] = createExportWrapper("dynCall_jiiiiii");

/** @type {function(...*):?} */
var dynCall_jiiiiji = Module["dynCall_jiiiiji"] = createExportWrapper("dynCall_jiiiiji");

/** @type {function(...*):?} */
var dynCall_iijj = Module["dynCall_iijj"] = createExportWrapper("dynCall_iijj");

/** @type {function(...*):?} */
var dynCall_iiji = Module["dynCall_iiji"] = createExportWrapper("dynCall_iiji");

/** @type {function(...*):?} */
var dynCall_iijjiii = Module["dynCall_iijjiii"] = createExportWrapper("dynCall_iijjiii");

/** @type {function(...*):?} */
var dynCall_vijjjii = Module["dynCall_vijjjii"] = createExportWrapper("dynCall_vijjjii");

/** @type {function(...*):?} */
var dynCall_iiiji = Module["dynCall_iiiji"] = createExportWrapper("dynCall_iiiji");

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");

/** @type {function(...*):?} */
var dynCall_iiiiij = Module["dynCall_iiiiij"] = createExportWrapper("dynCall_iiiiij");

/** @type {function(...*):?} */
var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = createExportWrapper("dynCall_iiiiijj");

/** @type {function(...*):?} */
var dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = createExportWrapper("dynCall_iiiiiijj");

/** @type {function(...*):?} */
var dynCall_viijii = Module["dynCall_viijii"] = createExportWrapper("dynCall_viijii");


function invoke_ii(index,a1) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iii(index,a1,a2) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_vi(index,a1) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_v(index) {
  var sp = stackSave();
  try {
    wasmTable.get(index)();
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_vii(index,a1,a2) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}




// === Auto-generated postamble setup entry stuff ===

if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString")) Module["intArrayFromString"] = function() { abort("'intArrayFromString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString")) Module["intArrayToString"] = function() { abort("'intArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ccall")) Module["ccall"] = function() { abort("'ccall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "cwrap")) Module["cwrap"] = function() { abort("'cwrap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setValue")) Module["setValue"] = function() { abort("'setValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getValue")) Module["getValue"] = function() { abort("'getValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocate")) Module["allocate"] = function() { abort("'allocate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString")) Module["UTF8ArrayToString"] = function() { abort("'UTF8ArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF8ToString")) Module["UTF8ToString"] = function() { abort("'UTF8ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array")) Module["stringToUTF8Array"] = function() { abort("'stringToUTF8Array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8")) Module["stringToUTF8"] = function() { abort("'stringToUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8")) Module["lengthBytesUTF8"] = function() { abort("'lengthBytesUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun")) Module["addOnPreRun"] = function() { abort("'addOnPreRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnInit")) Module["addOnInit"] = function() { abort("'addOnInit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain")) Module["addOnPreMain"] = function() { abort("'addOnPreMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnExit")) Module["addOnExit"] = function() { abort("'addOnExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun")) Module["addOnPostRun"] = function() { abort("'addOnPostRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory")) Module["writeStringToMemory"] = function() { abort("'writeStringToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory")) Module["writeArrayToMemory"] = function() { abort("'writeArrayToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory")) Module["writeAsciiToMemory"] = function() { abort("'writeAsciiToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addRunDependency")) Module["addRunDependency"] = function() { abort("'addRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "removeRunDependency")) Module["removeRunDependency"] = function() { abort("'removeRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder")) Module["FS_createFolder"] = function() { abort("'FS_createFolder' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createPath")) Module["FS_createPath"] = function() { abort("'FS_createPath' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createDataFile")) Module["FS_createDataFile"] = function() { abort("'FS_createDataFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createPreloadedFile")) Module["FS_createPreloadedFile"] = function() { abort("'FS_createPreloadedFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createLazyFile")) Module["FS_createLazyFile"] = function() { abort("'FS_createLazyFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink")) Module["FS_createLink"] = function() { abort("'FS_createLink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createDevice")) Module["FS_createDevice"] = function() { abort("'FS_createDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_unlink")) Module["FS_unlink"] = function() { abort("'FS_unlink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "getLEB")) Module["getLEB"] = function() { abort("'getLEB' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables")) Module["getFunctionTables"] = function() { abort("'getFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables")) Module["alignFunctionTables"] = function() { abort("'alignFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions")) Module["registerFunctions"] = function() { abort("'registerFunctions' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addFunction")) Module["addFunction"] = function() { abort("'addFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "removeFunction")) Module["removeFunction"] = function() { abort("'removeFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint")) Module["prettyPrint"] = function() { abort("'prettyPrint' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting")) Module["getCompilerSetting"] = function() { abort("'getCompilerSetting' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "print")) Module["print"] = function() { abort("'print' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "printErr")) Module["printErr"] = function() { abort("'printErr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0")) Module["getTempRet0"] = function() { abort("'getTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0")) Module["setTempRet0"] = function() { abort("'setTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callMain")) Module["callMain"] = function() { abort("'callMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abort")) Module["abort"] = function() { abort("'abort' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "keepRuntimeAlive")) Module["keepRuntimeAlive"] = function() { abort("'keepRuntimeAlive' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "zeroMemory")) Module["zeroMemory"] = function() { abort("'zeroMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8")) Module["stringToNewUTF8"] = function() { abort("'stringToNewUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setFileTime")) Module["setFileTime"] = function() { abort("'setFileTime' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer")) Module["emscripten_realloc_buffer"] = function() { abort("'emscripten_realloc_buffer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ENV")) Module["ENV"] = function() { abort("'ENV' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES")) Module["ERRNO_CODES"] = function() { abort("'ERRNO_CODES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES")) Module["ERRNO_MESSAGES"] = function() { abort("'ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setErrNo")) Module["setErrNo"] = function() { abort("'setErrNo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetPton4")) Module["inetPton4"] = function() { abort("'inetPton4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetNtop4")) Module["inetNtop4"] = function() { abort("'inetNtop4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetPton6")) Module["inetPton6"] = function() { abort("'inetPton6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetNtop6")) Module["inetNtop6"] = function() { abort("'inetNtop6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readSockaddr")) Module["readSockaddr"] = function() { abort("'readSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeSockaddr")) Module["writeSockaddr"] = function() { abort("'writeSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "DNS")) Module["DNS"] = function() { abort("'DNS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getHostByName")) Module["getHostByName"] = function() { abort("'getHostByName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES")) Module["GAI_ERRNO_MESSAGES"] = function() { abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Protocols")) Module["Protocols"] = function() { abort("'Protocols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Sockets")) Module["Sockets"] = function() { abort("'Sockets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getRandomDevice")) Module["getRandomDevice"] = function() { abort("'getRandomDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "traverseStack")) Module["traverseStack"] = function() { abort("'traverseStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE")) Module["UNWIND_CACHE"] = function() { abort("'UNWIND_CACHE' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "withBuiltinMalloc")) Module["withBuiltinMalloc"] = function() { abort("'withBuiltinMalloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray")) Module["readAsmConstArgsArray"] = function() { abort("'readAsmConstArgsArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs")) Module["readAsmConstArgs"] = function() { abort("'readAsmConstArgs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM")) Module["mainThreadEM_ASM"] = function() { abort("'mainThreadEM_ASM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q")) Module["jstoi_q"] = function() { abort("'jstoi_q' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s")) Module["jstoi_s"] = function() { abort("'jstoi_s' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getExecutableName")) Module["getExecutableName"] = function() { abort("'getExecutableName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "listenOnce")) Module["listenOnce"] = function() { abort("'listenOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext")) Module["autoResumeAudioContext"] = function() { abort("'autoResumeAudioContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCallLegacy")) Module["dynCallLegacy"] = function() { abort("'dynCallLegacy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getDynCaller")) Module["getDynCaller"] = function() { abort("'getDynCaller' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks")) Module["callRuntimeCallbacks"] = function() { abort("'callRuntimeCallbacks' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "handleException")) Module["handleException"] = function() { abort("'handleException' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePush")) Module["runtimeKeepalivePush"] = function() { abort("'runtimeKeepalivePush' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePop")) Module["runtimeKeepalivePop"] = function() { abort("'runtimeKeepalivePop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callUserCallback")) Module["callUserCallback"] = function() { abort("'callUserCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "maybeExit")) Module["maybeExit"] = function() { abort("'maybeExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "safeSetTimeout")) Module["safeSetTimeout"] = function() { abort("'safeSetTimeout' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "asmjsMangle")) Module["asmjsMangle"] = function() { abort("'asmjsMangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "asyncLoad")) Module["asyncLoad"] = function() { abort("'asyncLoad' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "alignMemory")) Module["alignMemory"] = function() { abort("'alignMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "mmapAlloc")) Module["mmapAlloc"] = function() { abort("'mmapAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative")) Module["reallyNegative"] = function() { abort("'reallyNegative' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "unSign")) Module["unSign"] = function() { abort("'unSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reSign")) Module["reSign"] = function() { abort("'reSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "formatString")) Module["formatString"] = function() { abort("'formatString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH")) Module["PATH"] = function() { abort("'PATH' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS")) Module["PATH_FS"] = function() { abort("'PATH_FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS")) Module["SYSCALLS"] = function() { abort("'SYSCALLS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2")) Module["syscallMmap2"] = function() { abort("'syscallMmap2' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap")) Module["syscallMunmap"] = function() { abort("'syscallMunmap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getSocketFromFD")) Module["getSocketFromFD"] = function() { abort("'getSocketFromFD' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getSocketAddress")) Module["getSocketAddress"] = function() { abort("'getSocketAddress' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "JSEvents")) Module["JSEvents"] = function() { abort("'JSEvents' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerKeyEventCallback")) Module["registerKeyEventCallback"] = function() { abort("'registerKeyEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets")) Module["specialHTMLTargets"] = function() { abort("'specialHTMLTargets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString")) Module["maybeCStringToJsString"] = function() { abort("'maybeCStringToJsString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "findEventTarget")) Module["findEventTarget"] = function() { abort("'findEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget")) Module["findCanvasEventTarget"] = function() { abort("'findCanvasEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getBoundingClientRect")) Module["getBoundingClientRect"] = function() { abort("'getBoundingClientRect' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillMouseEventData")) Module["fillMouseEventData"] = function() { abort("'fillMouseEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerMouseEventCallback")) Module["registerMouseEventCallback"] = function() { abort("'registerMouseEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerWheelEventCallback")) Module["registerWheelEventCallback"] = function() { abort("'registerWheelEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerUiEventCallback")) Module["registerUiEventCallback"] = function() { abort("'registerUiEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFocusEventCallback")) Module["registerFocusEventCallback"] = function() { abort("'registerFocusEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceOrientationEventData")) Module["fillDeviceOrientationEventData"] = function() { abort("'fillDeviceOrientationEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceOrientationEventCallback")) Module["registerDeviceOrientationEventCallback"] = function() { abort("'registerDeviceOrientationEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceMotionEventData")) Module["fillDeviceMotionEventData"] = function() { abort("'fillDeviceMotionEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceMotionEventCallback")) Module["registerDeviceMotionEventCallback"] = function() { abort("'registerDeviceMotionEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "screenOrientation")) Module["screenOrientation"] = function() { abort("'screenOrientation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillOrientationChangeEventData")) Module["fillOrientationChangeEventData"] = function() { abort("'fillOrientationChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerOrientationChangeEventCallback")) Module["registerOrientationChangeEventCallback"] = function() { abort("'registerOrientationChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillFullscreenChangeEventData")) Module["fillFullscreenChangeEventData"] = function() { abort("'fillFullscreenChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFullscreenChangeEventCallback")) Module["registerFullscreenChangeEventCallback"] = function() { abort("'registerFullscreenChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerRestoreOldStyle")) Module["registerRestoreOldStyle"] = function() { abort("'registerRestoreOldStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "hideEverythingExceptGivenElement")) Module["hideEverythingExceptGivenElement"] = function() { abort("'hideEverythingExceptGivenElement' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "restoreHiddenElements")) Module["restoreHiddenElements"] = function() { abort("'restoreHiddenElements' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setLetterbox")) Module["setLetterbox"] = function() { abort("'setLetterbox' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "currentFullscreenStrategy")) Module["currentFullscreenStrategy"] = function() { abort("'currentFullscreenStrategy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "restoreOldWindowedStyle")) Module["restoreOldWindowedStyle"] = function() { abort("'restoreOldWindowedStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "softFullscreenResizeWebGLRenderTarget")) Module["softFullscreenResizeWebGLRenderTarget"] = function() { abort("'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "doRequestFullscreen")) Module["doRequestFullscreen"] = function() { abort("'doRequestFullscreen' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillPointerlockChangeEventData")) Module["fillPointerlockChangeEventData"] = function() { abort("'fillPointerlockChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockChangeEventCallback")) Module["registerPointerlockChangeEventCallback"] = function() { abort("'registerPointerlockChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockErrorEventCallback")) Module["registerPointerlockErrorEventCallback"] = function() { abort("'registerPointerlockErrorEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "requestPointerLock")) Module["requestPointerLock"] = function() { abort("'requestPointerLock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillVisibilityChangeEventData")) Module["fillVisibilityChangeEventData"] = function() { abort("'fillVisibilityChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerVisibilityChangeEventCallback")) Module["registerVisibilityChangeEventCallback"] = function() { abort("'registerVisibilityChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerTouchEventCallback")) Module["registerTouchEventCallback"] = function() { abort("'registerTouchEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillGamepadEventData")) Module["fillGamepadEventData"] = function() { abort("'fillGamepadEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerGamepadEventCallback")) Module["registerGamepadEventCallback"] = function() { abort("'registerGamepadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerBeforeUnloadEventCallback")) Module["registerBeforeUnloadEventCallback"] = function() { abort("'registerBeforeUnloadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillBatteryEventData")) Module["fillBatteryEventData"] = function() { abort("'fillBatteryEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "battery")) Module["battery"] = function() { abort("'battery' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerBatteryEventCallback")) Module["registerBatteryEventCallback"] = function() { abort("'registerBatteryEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setCanvasElementSize")) Module["setCanvasElementSize"] = function() { abort("'setCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getCanvasElementSize")) Module["getCanvasElementSize"] = function() { abort("'getCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate")) Module["polyfillSetImmediate"] = function() { abort("'polyfillSetImmediate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangle")) Module["demangle"] = function() { abort("'demangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangleAll")) Module["demangleAll"] = function() { abort("'demangleAll' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace")) Module["jsStackTrace"] = function() { abort("'jsStackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings")) Module["getEnvStrings"] = function() { abort("'getEnvStrings' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock")) Module["checkWasiClock"] = function() { abort("'checkWasiClock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64")) Module["writeI53ToI64"] = function() { abort("'writeI53ToI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped")) Module["writeI53ToI64Clamped"] = function() { abort("'writeI53ToI64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling")) Module["writeI53ToI64Signaling"] = function() { abort("'writeI53ToI64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped")) Module["writeI53ToU64Clamped"] = function() { abort("'writeI53ToU64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling")) Module["writeI53ToU64Signaling"] = function() { abort("'writeI53ToU64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64")) Module["readI53FromI64"] = function() { abort("'readI53FromI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64")) Module["readI53FromU64"] = function() { abort("'readI53FromU64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53")) Module["convertI32PairToI53"] = function() { abort("'convertI32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53")) Module["convertU32PairToI53"] = function() { abort("'convertU32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "uncaughtExceptionCount")) Module["uncaughtExceptionCount"] = function() { abort("'uncaughtExceptionCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exceptionLast")) Module["exceptionLast"] = function() { abort("'exceptionLast' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exceptionCaught")) Module["exceptionCaught"] = function() { abort("'exceptionCaught' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfo")) Module["ExceptionInfo"] = function() { abort("'ExceptionInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "CatchInfo")) Module["CatchInfo"] = function() { abort("'CatchInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exception_addRef")) Module["exception_addRef"] = function() { abort("'exception_addRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exception_decRef")) Module["exception_decRef"] = function() { abort("'exception_decRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Browser")) Module["Browser"] = function() { abort("'Browser' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "funcWrappers")) Module["funcWrappers"] = function() { abort("'funcWrappers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setMainLoop")) Module["setMainLoop"] = function() { abort("'setMainLoop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "wget")) Module["wget"] = function() { abort("'wget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "FS")) Module["FS"] = function() { abort("'FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "MEMFS")) Module["MEMFS"] = function() { abort("'MEMFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "TTY")) Module["TTY"] = function() { abort("'TTY' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS")) Module["PIPEFS"] = function() { abort("'PIPEFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS")) Module["SOCKFS"] = function() { abort("'SOCKFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "_setNetworkCallback")) Module["_setNetworkCallback"] = function() { abort("'_setNetworkCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tempFixedLengthArray")) Module["tempFixedLengthArray"] = function() { abort("'tempFixedLengthArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "miniTempWebGLFloatBuffers")) Module["miniTempWebGLFloatBuffers"] = function() { abort("'miniTempWebGLFloatBuffers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heapObjectForWebGLType")) Module["heapObjectForWebGLType"] = function() { abort("'heapObjectForWebGLType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heapAccessShiftForWebGLHeap")) Module["heapAccessShiftForWebGLHeap"] = function() { abort("'heapAccessShiftForWebGLHeap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GL")) Module["GL"] = function() { abort("'GL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet")) Module["emscriptenWebGLGet"] = function() { abort("'emscriptenWebGLGet' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "computeUnpackAlignedImageSize")) Module["computeUnpackAlignedImageSize"] = function() { abort("'computeUnpackAlignedImageSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData")) Module["emscriptenWebGLGetTexPixelData"] = function() { abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform")) Module["emscriptenWebGLGetUniform"] = function() { abort("'emscriptenWebGLGetUniform' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "webglGetUniformLocation")) Module["webglGetUniformLocation"] = function() { abort("'webglGetUniformLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "webglPrepareUniformLocationsBeforeFirstUse")) Module["webglPrepareUniformLocationsBeforeFirstUse"] = function() { abort("'webglPrepareUniformLocationsBeforeFirstUse' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "webglGetLeftBracePos")) Module["webglGetLeftBracePos"] = function() { abort("'webglGetLeftBracePos' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib")) Module["emscriptenWebGLGetVertexAttrib"] = function() { abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeGLArray")) Module["writeGLArray"] = function() { abort("'writeGLArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AL")) Module["AL"] = function() { abort("'AL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode")) Module["SDL_unicode"] = function() { abort("'SDL_unicode' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext")) Module["SDL_ttfContext"] = function() { abort("'SDL_ttfContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio")) Module["SDL_audio"] = function() { abort("'SDL_audio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL")) Module["SDL"] = function() { abort("'SDL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx")) Module["SDL_gfx"] = function() { abort("'SDL_gfx' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLUT")) Module["GLUT"] = function() { abort("'GLUT' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "EGL")) Module["EGL"] = function() { abort("'EGL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window")) Module["GLFW_Window"] = function() { abort("'GLFW_Window' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW")) Module["GLFW"] = function() { abort("'GLFW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLEW")) Module["GLEW"] = function() { abort("'GLEW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "IDBStore")) Module["IDBStore"] = function() { abort("'IDBStore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError")) Module["runAndAbortIfError"] = function() { abort("'runAndAbortIfError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emval_handle_array")) Module["emval_handle_array"] = function() { abort("'emval_handle_array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emval_free_list")) Module["emval_free_list"] = function() { abort("'emval_free_list' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emval_symbols")) Module["emval_symbols"] = function() { abort("'emval_symbols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "init_emval")) Module["init_emval"] = function() { abort("'init_emval' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "count_emval_handles")) Module["count_emval_handles"] = function() { abort("'count_emval_handles' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "get_first_emval")) Module["get_first_emval"] = function() { abort("'get_first_emval' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getStringOrSymbol")) Module["getStringOrSymbol"] = function() { abort("'getStringOrSymbol' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "requireHandle")) Module["requireHandle"] = function() { abort("'requireHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emval_newers")) Module["emval_newers"] = function() { abort("'emval_newers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "craftEmvalAllocator")) Module["craftEmvalAllocator"] = function() { abort("'craftEmvalAllocator' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emval_get_global")) Module["emval_get_global"] = function() { abort("'emval_get_global' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emval_methodCallers")) Module["emval_methodCallers"] = function() { abort("'emval_methodCallers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "InternalError")) Module["InternalError"] = function() { abort("'InternalError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "BindingError")) Module["BindingError"] = function() { abort("'BindingError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UnboundTypeError")) Module["UnboundTypeError"] = function() { abort("'UnboundTypeError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PureVirtualError")) Module["PureVirtualError"] = function() { abort("'PureVirtualError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "init_embind")) Module["init_embind"] = function() { abort("'init_embind' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "throwInternalError")) Module["throwInternalError"] = function() { abort("'throwInternalError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "throwBindingError")) Module["throwBindingError"] = function() { abort("'throwBindingError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "throwUnboundTypeError")) Module["throwUnboundTypeError"] = function() { abort("'throwUnboundTypeError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ensureOverloadTable")) Module["ensureOverloadTable"] = function() { abort("'ensureOverloadTable' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exposePublicSymbol")) Module["exposePublicSymbol"] = function() { abort("'exposePublicSymbol' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "replacePublicSymbol")) Module["replacePublicSymbol"] = function() { abort("'replacePublicSymbol' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "extendError")) Module["extendError"] = function() { abort("'extendError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "createNamedFunction")) Module["createNamedFunction"] = function() { abort("'createNamedFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registeredInstances")) Module["registeredInstances"] = function() { abort("'registeredInstances' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getBasestPointer")) Module["getBasestPointer"] = function() { abort("'getBasestPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerInheritedInstance")) Module["registerInheritedInstance"] = function() { abort("'registerInheritedInstance' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "unregisterInheritedInstance")) Module["unregisterInheritedInstance"] = function() { abort("'unregisterInheritedInstance' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstance")) Module["getInheritedInstance"] = function() { abort("'getInheritedInstance' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstanceCount")) Module["getInheritedInstanceCount"] = function() { abort("'getInheritedInstanceCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getLiveInheritedInstances")) Module["getLiveInheritedInstances"] = function() { abort("'getLiveInheritedInstances' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registeredTypes")) Module["registeredTypes"] = function() { abort("'registeredTypes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "awaitingDependencies")) Module["awaitingDependencies"] = function() { abort("'awaitingDependencies' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "typeDependencies")) Module["typeDependencies"] = function() { abort("'typeDependencies' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registeredPointers")) Module["registeredPointers"] = function() { abort("'registeredPointers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerType")) Module["registerType"] = function() { abort("'registerType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "whenDependentTypesAreResolved")) Module["whenDependentTypesAreResolved"] = function() { abort("'whenDependentTypesAreResolved' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "embind_charCodes")) Module["embind_charCodes"] = function() { abort("'embind_charCodes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "embind_init_charCodes")) Module["embind_init_charCodes"] = function() { abort("'embind_init_charCodes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readLatin1String")) Module["readLatin1String"] = function() { abort("'readLatin1String' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getTypeName")) Module["getTypeName"] = function() { abort("'getTypeName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heap32VectorToArray")) Module["heap32VectorToArray"] = function() { abort("'heap32VectorToArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "requireRegisteredType")) Module["requireRegisteredType"] = function() { abort("'requireRegisteredType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getShiftFromSize")) Module["getShiftFromSize"] = function() { abort("'getShiftFromSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "integerReadValueFromPointer")) Module["integerReadValueFromPointer"] = function() { abort("'integerReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "enumReadValueFromPointer")) Module["enumReadValueFromPointer"] = function() { abort("'enumReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "floatReadValueFromPointer")) Module["floatReadValueFromPointer"] = function() { abort("'floatReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "simpleReadValueFromPointer")) Module["simpleReadValueFromPointer"] = function() { abort("'simpleReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runDestructors")) Module["runDestructors"] = function() { abort("'runDestructors' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "new_")) Module["new_"] = function() { abort("'new_' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "craftInvokerFunction")) Module["craftInvokerFunction"] = function() { abort("'craftInvokerFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "embind__requireFunction")) Module["embind__requireFunction"] = function() { abort("'embind__requireFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tupleRegistrations")) Module["tupleRegistrations"] = function() { abort("'tupleRegistrations' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "structRegistrations")) Module["structRegistrations"] = function() { abort("'structRegistrations' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "genericPointerToWireType")) Module["genericPointerToWireType"] = function() { abort("'genericPointerToWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "constNoSmartPtrRawPointerToWireType")) Module["constNoSmartPtrRawPointerToWireType"] = function() { abort("'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "nonConstNoSmartPtrRawPointerToWireType")) Module["nonConstNoSmartPtrRawPointerToWireType"] = function() { abort("'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "init_RegisteredPointer")) Module["init_RegisteredPointer"] = function() { abort("'init_RegisteredPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer")) Module["RegisteredPointer"] = function() { abort("'RegisteredPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_getPointee")) Module["RegisteredPointer_getPointee"] = function() { abort("'RegisteredPointer_getPointee' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_destructor")) Module["RegisteredPointer_destructor"] = function() { abort("'RegisteredPointer_destructor' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_deleteObject")) Module["RegisteredPointer_deleteObject"] = function() { abort("'RegisteredPointer_deleteObject' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_fromWireType")) Module["RegisteredPointer_fromWireType"] = function() { abort("'RegisteredPointer_fromWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runDestructor")) Module["runDestructor"] = function() { abort("'runDestructor' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "releaseClassHandle")) Module["releaseClassHandle"] = function() { abort("'releaseClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "finalizationGroup")) Module["finalizationGroup"] = function() { abort("'finalizationGroup' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer_deps")) Module["detachFinalizer_deps"] = function() { abort("'detachFinalizer_deps' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer")) Module["detachFinalizer"] = function() { abort("'detachFinalizer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "attachFinalizer")) Module["attachFinalizer"] = function() { abort("'attachFinalizer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "makeClassHandle")) Module["makeClassHandle"] = function() { abort("'makeClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "init_ClassHandle")) Module["init_ClassHandle"] = function() { abort("'init_ClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle")) Module["ClassHandle"] = function() { abort("'ClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isAliasOf")) Module["ClassHandle_isAliasOf"] = function() { abort("'ClassHandle_isAliasOf' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "throwInstanceAlreadyDeleted")) Module["throwInstanceAlreadyDeleted"] = function() { abort("'throwInstanceAlreadyDeleted' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_clone")) Module["ClassHandle_clone"] = function() { abort("'ClassHandle_clone' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_delete")) Module["ClassHandle_delete"] = function() { abort("'ClassHandle_delete' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "deletionQueue")) Module["deletionQueue"] = function() { abort("'deletionQueue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isDeleted")) Module["ClassHandle_isDeleted"] = function() { abort("'ClassHandle_isDeleted' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_deleteLater")) Module["ClassHandle_deleteLater"] = function() { abort("'ClassHandle_deleteLater' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "flushPendingDeletes")) Module["flushPendingDeletes"] = function() { abort("'flushPendingDeletes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "delayFunction")) Module["delayFunction"] = function() { abort("'delayFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setDelayFunction")) Module["setDelayFunction"] = function() { abort("'setDelayFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "RegisteredClass")) Module["RegisteredClass"] = function() { abort("'RegisteredClass' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "shallowCopyInternalPointer")) Module["shallowCopyInternalPointer"] = function() { abort("'shallowCopyInternalPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "downcastPointer")) Module["downcastPointer"] = function() { abort("'downcastPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "upcastPointer")) Module["upcastPointer"] = function() { abort("'upcastPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "validateThis")) Module["validateThis"] = function() { abort("'validateThis' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "char_0")) Module["char_0"] = function() { abort("'char_0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "char_9")) Module["char_9"] = function() { abort("'char_9' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "makeLegalFunctionName")) Module["makeLegalFunctionName"] = function() { abort("'makeLegalFunctionName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetIndexed")) Module["emscriptenWebGLGetIndexed"] = function() { abort("'emscriptenWebGLGetIndexed' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "warnOnce")) Module["warnOnce"] = function() { abort("'warnOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackSave")) Module["stackSave"] = function() { abort("'stackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackRestore")) Module["stackRestore"] = function() { abort("'stackRestore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc")) Module["stackAlloc"] = function() { abort("'stackAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString")) Module["AsciiToString"] = function() { abort("'AsciiToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii")) Module["stringToAscii"] = function() { abort("'stringToAscii' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString")) Module["UTF16ToString"] = function() { abort("'UTF16ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16")) Module["stringToUTF16"] = function() { abort("'stringToUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16")) Module["lengthBytesUTF16"] = function() { abort("'lengthBytesUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString")) Module["UTF32ToString"] = function() { abort("'UTF32ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32")) Module["stringToUTF32"] = function() { abort("'stringToUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32")) Module["lengthBytesUTF32"] = function() { abort("'lengthBytesUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8")) Module["allocateUTF8"] = function() { abort("'allocateUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack")) Module["allocateUTF8OnStack"] = function() { abort("'allocateUTF8OnStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["writeStackCookie"] = writeStackCookie;
Module["checkStackCookie"] = checkStackCookie;
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL")) Object.defineProperty(Module, "ALLOC_NORMAL", { configurable: true, get: function() { abort("'ALLOC_NORMAL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK")) Object.defineProperty(Module, "ALLOC_STACK", { configurable: true, get: function() { abort("'ALLOC_STACK' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") } });

var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function stackCheckInit() {
  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  _emscripten_stack_init();
  writeStackCookie();
}

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  stackCheckInit();

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = run;

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var oldOut = out;
  var oldErr = err;
  var has = false;
  out = err = function(x) {
    has = true;
  }
  try { // it doesn't matter if it fails
    var flush = Module['_fflush'];
    if (flush) flush(0);
    // also flush in the JS FS layer
    ['stdout', 'stderr'].forEach(function(name) {
      var info = FS.analyzePath('/dev/' + name);
      if (!info) return;
      var stream = info.object;
      var rdev = stream.rdev;
      var tty = TTY.ttys[rdev];
      if (tty && tty.output && tty.output.length) {
        has = true;
      }
    });
  } catch(e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');
  }
}

/** @param {boolean|number=} implicit */
function exit(status, implicit) {
  EXITSTATUS = status;

  checkUnflushedContent();

  if (keepRuntimeAlive()) {
    // if exit() was called, we may warn the user if the runtime isn't actually being shut down
    if (!implicit) {
      var msg = 'program exited (with status: ' + status + '), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)';
      err(msg);
    }
  } else {
    exitRuntime();
  }

  procExit(status);
}

function procExit(code) {
  EXITSTATUS = code;
  if (!keepRuntimeAlive()) {
    if (Module['onExit']) Module['onExit'](code);
    ABORT = true;
  }
  quit_(code, new ExitStatus(code));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

run();





var {_callCallback, _registerCallback, _releaseCallback, _createLocalCallbackScope, _releaseLocalCallbackScope} = (() => {
    const CB_NULL = {
        callback: () => { throw new RangeError("attempted to call a callback at NULL") },
        data: null
    };
    const CB_UNDEFINED = {
        callback: () => { throw new RangeError("attempted to call an uninitialized callback") },
        data: null
    };


    class Scope {
        constructor() {
            this.nextId = 1;
            this.callbackMap = new Map();
            this.callbackMap.set(0, CB_NULL);
        }

        addCallback(callback, data) {
            let id = this.nextId++;
            this.callbackMap.set(id, {callback, data});
            return id;
        }

        getCallback(id) {
            return this.callbackMap.get(id) || CB_UNDEFINED;
        }

        deleteCallback(id) {
            this.callbackMap.delete(id);
        }

        release() {
            this.callbackMap = null;
        }
    }

    const GLOBAL_SCOPE = new Scope();
    let scope = GLOBAL_SCOPE;

    return {
        _callCallback(callbackId, global = false) {
            let callback = (global ? GLOBAL_SCOPE : scope).getCallback(callbackId);
            try {
                callback.callback();
                return callback.data;
            } catch (e) {
                console.error(e)
            }
        },
        _registerCallback(callback, data = null, global = false) {
            return (global ? GLOBAL_SCOPE : scope).addCallback(callback, data);
        },
        _releaseCallback(callbackId, global = false) {
            (global ? GLOBAL_SCOPE : scope).deleteCallback(callbackId);
        },
        _createLocalCallbackScope() {
            if (scope !== GLOBAL_SCOPE) {
                throw new Error("attempted to overwrite local scope")
            }
            scope = new Scope()
        },
        _releaseLocalCallbackScope() {
            if (scope === GLOBAL_SCOPE) {
                throw new Error("attempted to release global scope")
            }
            scope.release()
            scope = GLOBAL_SCOPE
        },
    }
})();

var wasmSetup = new Promise(function(resolve, reject) {
    Module['onRuntimeInitialized'] = _ => {
        resolve(Module);
    };
});

function onWasmReady(onReady) { wasmSetup.then(onReady); }