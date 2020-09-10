package com.arkivanov.todo.database

import com.squareup.sqldelight.db.SqlDriver

interface TodoDatabaseDriverFactory {

    operator fun invoke(): SqlDriver
}
