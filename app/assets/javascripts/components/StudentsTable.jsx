var StudentsTable = React.createClass({
    getInitialState: function() {
        return { students: this.props.data,
                 sortByColumn: 'name',
                 sortAlpha: true
                };
    },

    getDefaultProps: function() {
        return { students: [],
                 sortByColumn: 'name',
                 sortAlpha: true
                };
    },

    refreshTable: function(data) {
        this.setState({ students: data,
                        sortByColumn: 'name',
                        sortAlpha: true
                        })
    },

    handleSort: function(column) {
        if (column === this.state.sortByColumn) {
            this.setState({ sortAlpha: !this.state.sortAlpha })
        } else {
            if (column === 'name') {
                this.setState({ sortByColumn: 'name',
                                    sortAlpha: !this.state.sortAlpha })
            } else {
                this.setState({ sortByColumn: 'favoritemovie',
                                    sortAlpha: !this.state.sortAlpha })
            }
        }
    },

    orderColumns: function(property) {
        var sortOrder = 1;
        if(this.state.sortAlpha === false) {
            sortOrder = -1;
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    },

    render: function() {
        return (<div>
                    <TableFilter handleFilter={this.refreshTable} />
                    <table className="table">
                        <thead>
                        <tr>
                            <th onClick={() => this.handleSort('name')}>Name</th>
                            <th onClick={() => this.handleSort('movie')}>Favorite Movie</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.students.sort(this.orderColumns(this.state.sortByColumn)).map(function(student) {
                                return <StudentRow key={student.id} student={student} />
                            }.bind(this))}
                        </tbody>
                    </table>
                </div>);
    }
});