var React = require("react");
require("./NoteEditor.css");

var NoteEditor = React.createClass({
	getInitialState: function() {
		return {
			text: ""
		};
	},

	//получили текст и положили в состояние
	changeText: function(e) {
		this.setState({
			text: e.target.value
		});
		//JSON.stringify(text);
	},

	//создаем новую заметку
	handleNoteAdd: function() {
		//берем текст из состояния
		var newNote = {
			text: this.state.text,
			id: Date.now()
		}
		//отправляем новую заметку в метод
		this.props.handleNoteAdd(newNote);
		this.setState({
			text: ""
		});
	},

	render: function() {
		return (
			<div>
				<textarea 
					placeholder="Enter"
					value={this.state.text} 
					onChange={this.changeText} 
					ref="textarea" />
				<button onClick={this.handleNoteAdd}>Send</button>
			</div>
		);
	}
});

module.exports = NoteEditor;