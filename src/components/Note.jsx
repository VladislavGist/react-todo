var React = require("react");
require("./Note.css");

var Note = React.createClass({
	render: function() {
		return (
			<div>
				<p>{this.props.children}</p>
				<button onClick={this.props.onDelete}>X</button>
			</div>
		);
	}
});

module.exports = Note;