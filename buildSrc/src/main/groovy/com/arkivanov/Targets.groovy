package com.arkivanov

import javax.annotation.Nullable

trait Target {
}

static List<Target> allDefault() {
    return List.of(
            new Android(),
            new Jvm(),
            new Js(),
            new Ios(),
            new Tvos(),
            new Watchos(),
            new Macos(),
    )
}

static Set<Class<? extends Target>> allClasses() {
    return allDefault().collect { it.class }
}

class Android implements Target {
}

class Jvm implements Target {
}

public class Js implements Target {
    Mode mode = Mode.BOTH

    enum Mode {
        BOTH, IR, LEGACY
    }
}

class Ios implements Target {
    @Nullable
    Closure binaries = null
}

class Tvos implements Target {
}

class Watchos implements Target {
    @Nullable
    Closure binaries = null
}

class Macos implements Target {
}
