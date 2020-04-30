import React from 'react'

const barWFactor = 5
const yFactor = 3
const barHFactor = 12
const background = '#4CAF50'
const rFactor = 14

const sinify = (scale) =>  Math.sin(scale * Math.PI)

const ballStyle = (w, h, scale) => {
    const r = Math.min(w, h) / rFactor
    const y = h / 2 - (h / yFactor) * sinify(scale)
    const width = `${2 * r}px`
    const height = `${2 * r}px`
    const position = 'absolute'
    const left = `${w / 2 - r}px`
    const top = `${y}px`
    const borderRadius = '50%'
    return {position, left, top, width, height, background, borderRadius}
}

const rotateBarStyle = (w, h, scale) => {
    const barW = w / barWFactor
    const barH = h / barHFactor
    const width = `${barW}px`
    const height = `${barH}px`
    const top = `${h / 2 - barH / 2}px`
    const left = `${w / 2 - barW / 2}px`
    const position = 'absolute'
    const WebkitTransform = `rotate(${360 * sinify(scale)}deg)`
    return {position, left, top, width, height, background, WebkitTransform}
}