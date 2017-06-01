var StudentRow = React.createClass({
    render: function() {
        return (<tr>
                    <td>{ this.props.student.name }</td>
                    <td>{ this.props.student.favoritemovie }</td>
                </tr>);
    }
});