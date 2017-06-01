var StudentRow = React.createClass({
    render: function() {
        return (<tr>
                    <td>{ this.props.student.firstname }</td>
                    <td>{ this.props.student.favoritemovie }</td>
                </tr>);
    }
});