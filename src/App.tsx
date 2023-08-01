import './App.css'
import JsonView from './component'

const jason = {
	name: "Uwe Riegel",
	a: "A",
	count: 123,
	objekt: {
		nummer: 8908998,
        users: [
            { name: "Uwe", email: "uriegel@hotmail.de" },
            { name: "Paul", email: "paul@hotmail.de" },
            { name: "Masta Killa", email: "masta@hotmail.de" }
		],
		items: [
			12, 34, 45, 657, 768, 789, 890, 
		],
        name: "Objektname",
		test: { name: "Masta Killa", email: "masta@hotmail.de" }
	},
	b: "B"
}

const App = () => {
  	return (
		<div className="App">
			<h1>Hallo Test</h1>
			<JsonView data={jason} />		
	    </div>
  	)
}

export default App
