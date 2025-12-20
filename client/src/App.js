import React, { Fragment } from "react";
import "./App.css";

//components

import InputTodo from "./components/InputToDo";
import ListTodos from "./components/ListToDo";

function App() {
	return (
		<Fragment>
			<div className="container">
				<InputTodo />
				<ListTodos />
			</div>
		</Fragment>
	);
}

export default App;
