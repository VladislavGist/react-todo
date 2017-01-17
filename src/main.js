var ReactDOM = require("react-dom"),
	React = require("react"),
	NotesApp = require("./components/NotesApp.jsx");

ReactDOM.render(
	<NotesApp />,
	document.getElementById("mount-point")
);