package com.arkivanov.todo.database

import android.content.Context
import com.squareup.sqldelight.android.AndroidSqliteDriver

@Suppress("FunctionName") // Factory function
fun TodoDatabase(context: Context): TodoDatabase =
    TodoDatabase(AndroidSqliteDriver(TodoDatabase.Schema, context, "TodoDatabase.db"))
