var React = require("react"),
	NoteEditor = require("./NoteEditor.jsx"),
	NotesGrid = require("./NotesGrid.jsx");

require("./NotesApp.css");

var NotesApp = React.createClass({
	getInitialState: function() {
		return {
			mass: [
				
			]
		}
	},

	//сюда приходит новая заметка
	handleNoteAdd: function(newNote) {
		//копируем текущий массив
		var newNotes = this.state.mass.slice();
		//добавляем в него первым эелментом пришедшую заметку
		newNotes.unshift(newNote);
		//изменяем состояние
		this.setState({mass: newNotes});
	},

	componentDidMount: function() {
		//распарлисили строку mass из localStorage приведя её к объекту
		var localNotes = JSON.parse(localStorage.getItem("mass"));
		if(localNotes) {
			this.setState({mass: localNotes});
		}
	},

	componentDidUpdate: function() {
		this._updateLocalStorage();
	},

	handleNoteDelete: function(note) {
		var noteId = note.id;
		var newNotes = this.state.mass.filter(function(note) {
			//отбирает id тех чъе id не == удаляемой заметке
			return note.id !== noteId; 
		});
		this.setState({mass: newNotes});
	},

	render: function() {
		return (
			<div>
				<NoteEditor handleNoteAdd={this.handleNoteAdd} />
				<NotesGrid mass={this.state.mass} handleNoteDelete={this.handleNoteDelete} />
			</div>
		);
	},

	_updateLocalStorage: function() {
		//приводим состояние к виду строки
		var notes = JSON.stringify(this.state.mass);
		//записываем состояние в localStorage
		localStorage.setItem("mass", notes);
	}
});

module.exports = NotesApp;