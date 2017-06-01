var StudentsTable = React.createClass({
    getInitialState: function() {
        return { students: this.props.data };
    },

    getDefaultProps: function() {
        return { students: [] };
    },

    render: function() {
        return (<table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>FavoriteMovie</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map(function(student) {
                            return <StudentRow key={student.id} student={student}/>
                        }.bind(this))}
                    </tbody>
                </table>);
    }
});