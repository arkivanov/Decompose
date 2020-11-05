package com.arkivanov.todo.database.test

import com.arkivanov.todo.database.TodoDatabase
import com.squareup.sqldelight.sqlite.driver.JdbcSqliteDriver

@Suppress("FunctionName") // Factory function
actual fun TestTodoDatabase(): TodoDatabase =
    TodoDatabase(JdbcSqliteDriver(JdbcSqliteDriver.IN_MEMORY))
