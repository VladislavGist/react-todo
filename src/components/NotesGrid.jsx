var React = require("react");
var Note = require("./Note.jsx");

require("./NotesGrid.css");

var NotesGrid = React.createClass({
	render: function() {
		var onNoteDelete = this.props.handleNoteDelete;
		return (
			<div>
				{
					this.props.mass.map(function(elem, idx) {
						return <Note 
											key={elem.id}
											onDelete={onNoteDelete.bind(null, elem)}
											>{elem.text}</Note>
					})
				}
			</div>
		);
	}
});

module.exports = NotesGrid;