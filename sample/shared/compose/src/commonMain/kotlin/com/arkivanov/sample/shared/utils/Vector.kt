package com.arkivanov.sample.shared.utils

import kotlin.jvm.JvmInline
import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.sin

@JvmInline
internal value class Vector private constructor(
    private val value: Long,
) {
    constructor(x: Float, y: Float) : this(packFloats(val1 = x, val2 = y))

    val x: Float get() = unpackFloat1(value = value)

    val y: Float get() = unpackFloat2(value = value)
}

private fun packFloats(val1: Float, val2: Float): Long {
    val v1 = val1.toBits().toLong()
    val v2 = val2.toBits().toLong()
    return v1.shl(32) or (v2 and 0xFFFFFFFF)
}

private fun unpackFloat1(value: Long): Float =
    Float.fromBits(value.shr(32).toInt())

private fun unpackFloat2(value: Long): Float =
    Float.fromBits(value.and(0xFFFFFFFF).toInt())

internal operator fun Vector.plus(other: Vector): Vector =
    Vector(x = x + other.x, y = y + other.y)

internal operator fun Vector.minus(other: Vector): Vector =
    Vector(x = x - other.x, y = y - other.y)

internal operator fun Vector.times(value: Float): Vector =
    Vector(x = x * value, y = y * value)

@JvmInline
internal value class Radians(val value: Float)

@JvmInline
internal value class Degrees(val value: Float)

internal fun Degrees.toRadians(): Radians =
    Radians(value = value * PI.toFloat() / 180F)

internal fun Vector.rotate(radians: Radians, center: Vector = Vector(x = 0F, y = 0F)): Vector {
    val s = sin(radians.value)
    val c = cos(radians.value)
    val tmp = this - center

    return Vector(x = tmp.x * c - tmp.y * s, y = tmp.x * s + tmp.y * c) + center
}
