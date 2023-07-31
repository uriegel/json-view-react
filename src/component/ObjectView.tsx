import { useState } from "react"

interface DataProps {
    data: any
}

const ObjectView = ({ data }: DataProps) => {

    const [opened, setOpened] = useState(false)

    return (
        <>
            <div className="jvr--toggle">         	
                <div className={`jvr--node${opened ? " jvr--opened" : ""}`} onClick={() => setOpened(!opened)}></div>
                {opened && (<span>geöffnet</span>)}
                {!opened && (<span className={`jvr--watermark${opened ? " jvr--opened" : ""}`}>
                    <span>{Object.keys(data).length}</span>
                    Eigenschaft(en)
                </span>)}
            </div>        
            <div className="jvr--container"></div>        
        </>
    )
}

export default ObjectView
