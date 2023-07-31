import ObjectView from "./ObjectView"
import "./JsonView.css"

function isObject(value: any) {
    return !isArray(value) && value instanceof Object
}

function isArray(value: any) {
    return Array.isArray(value)
}

function isValue(value: any) {
    return !isObject(value) && !isArray(value)
}        

const jason = {
	name: "Uwe Riegel",
	a: "A",
	count: 123,
	object: {
		nummer: 8908998,
        users: [
            { name: "Uwe", email: "uriegel@hotmail.de" },
            { name: "Paul", email: "paul@hotmail.de" },
            { name: "Masta Killa", email: "masta@hotmail.de" }
		],
		items: [
			12, 34, 45, 657, 768, 789, 890, 
		],
        name: "Objektname"
	},
	b: "B"
}

interface DataProps {
    data: any
}

const ArrayView = ({data}: DataProps) => {
    return (
        <div>Hallo Array</div>
    )
}

const ValueView = ({data}: DataProps) => {
    return (
        <div>Hallo Value</div>
    )
}

const JsonView = () => {

    return isArray(jason)
        ? (<ArrayView data={jason}/>)
        : isObject(jason)
        ? (<ObjectView data={jason}/>)
        : isValue(jason)
        ? (<ValueView data={jason}/>)
        : null
}

export default JsonView