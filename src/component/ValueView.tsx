import { DataProps } from "."

const ValueView = ({data, keyName}: DataProps) => (
    <div>
        <div className={`jvr--node jvr--invisible`}></div>
        <span>{keyName}</span>       
        <span>: </span>
        <span>{typeof data == "string" ? `"${data}"` : data}</span>
    </div>    
)

export default ValueView
