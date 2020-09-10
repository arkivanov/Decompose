package com.arkivanov.todo.database

import android.content.Context
import com.squareup.sqldelight.android.AndroidSqliteDriver
import com.squareup.sqldelight.db.SqlDriver

@Suppress("FunctionName")
fun TodoDatabaseDriverFactory(context: Context): TodoDatabaseDriverFactory =
    object : TodoDatabaseDriverFactory {
        override fun invoke(): SqlDriver = AndroidSqliteDriver(TodoDatabase.Schema, context, "TodoDatabase.db")
    }
