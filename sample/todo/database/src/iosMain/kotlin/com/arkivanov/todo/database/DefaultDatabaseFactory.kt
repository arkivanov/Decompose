package com.arkivanov.todo.database

import com.squareup.sqldelight.drivers.native.NativeSqliteDriver

object TodoDatabaseFactory {
    fun create(): TodoDatabase =
        TodoDatabase(NativeSqliteDriver(TodoDatabase.Schema, "TodoDatabase.db"))
}
