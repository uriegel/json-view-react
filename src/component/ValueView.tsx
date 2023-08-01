import React, { DataProps } from "."

export const ValueView = ({data, keyName}: DataProps) => (
    <div>
        <div className={`jvr--node jvr--invisible`}></div>
        <span>{keyName}</span>       
        <span>: </span>
        <span>{typeof data == "string" ? `"${data}"` : data}</span>
    </div>    
)

