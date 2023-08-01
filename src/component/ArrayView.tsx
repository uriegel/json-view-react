import { useState } from "react"
import JsonView, { DataProps } from "."

const ArrayView = ({ data, keyName }: DataProps) => {

    const [opened, setOpened] = useState(false)

    return (
        <>
            <div className="jvr--toggle" onClick={() => setOpened(!opened)}>         	
                <div className={`jvr--node${opened ? " jvr--opened" : ""}`}></div>
                <span>{keyName}</span>
                {!opened && (<span className={`jvr--watermark${opened ? " jvr--opened" : ""}`}>
                    <span>{Object.keys(data).length}</span>
                    {" Einträg(e)"}
                </span>)}
            </div>        
            <div className={`jvr--container${!keyName ? " jvr--root" : ""} `}>
                {(!keyName || opened) && data
                    .map((n: any, i: number) => 
                        (<JsonView data={n} keyName={`${i}`} />)
                    )}
            </div>        
        </>
    )
}

export default ArrayView
