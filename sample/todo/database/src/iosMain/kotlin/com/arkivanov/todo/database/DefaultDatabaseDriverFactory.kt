package com.arkivanov.todo.database

import com.squareup.sqldelight.db.SqlDriver
import com.squareup.sqldelight.drivers.native.NativeSqliteDriver

class DefaultDatabaseDriverFactory : TodoDatabaseDriverFactory {
    override fun invoke(): SqlDriver = NativeSqliteDriver(TodoDatabase.Schema, "TodoDatabase.db")
}
