import React from 'react'
import "./JsonView.css"
import { ArrayView } from "./ArrayView"
import { ObjectView } from "./ObjectView"
import { ValueView } from "./ValueView"

function isObject(value: any) {
    return !isArray(value) && value instanceof Object
}

function isArray(value: any) {
    return Array.isArray(value)
}

function isValue(value: any) {
    return !isObject(value) && !isArray(value)
}        

export interface DataProps {
    data: any
    keyName?: string
}

const JsonView = ({data, keyName}: DataProps) => 

    isArray(data)
        ? (<ArrayView data={data} keyName={keyName}/>)
        : isObject(data)
        ? (<ObjectView data={data} keyName={keyName}/>)
        : isValue(data)
        ? (<ValueView data={data} keyName={keyName} />)
        : null

export default JsonView