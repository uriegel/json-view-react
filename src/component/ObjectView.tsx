import React, { useState } from "react"
import JsonView, { DataProps } from "."

export const ObjectView = ({ data, keyName }: DataProps) => {

    const [opened, setOpened] = useState(false)

    return (
        <>
            {keyName && (
                <div className="jvr--toggle" onClick={() => setOpened(!opened)}>         	
                <div className={`jvr--node${opened ? " jvr--opened" : ""}`}></div>
                <span>{keyName}</span>
                {!opened && (<span className={`jvr--watermark${opened ? " jvr--opened" : ""}`}>
                    <span>{Object.keys(data).length}</span>
                    {" Eigenschaft(en)"}
                </span>)}
            </div>        
            )}
            <div className={`jvr--container${!keyName ? " jvr--root" : ""} `}>
                {(!keyName || opened) && Object
                    .keys(data)
                    .sort((a, b) => a.localeCompare(b))
                    .map(k => 
                        (<JsonView data={data[k]} keyName={`"${k}"`} />)
                    )}
            </div>        
        </>
    )
}

