package com.arkivanov.todo.database.test

import co.touchlab.sqliter.DatabaseConfiguration
import com.arkivanov.todo.database.TodoDatabase
import com.squareup.sqldelight.drivers.native.NativeSqliteDriver
import com.squareup.sqldelight.drivers.native.wrapConnection

@Suppress("FunctionName") // Factory function
actual fun TestTodoDatabase(): TodoDatabase =
    TodoDatabase(
        NativeSqliteDriver(
            DatabaseConfiguration(
                name = "",
                version = 1,
                create = { wrapConnection(it, TodoDatabase.Schema::create) },
                inMemory = true
            )
        )
    )
