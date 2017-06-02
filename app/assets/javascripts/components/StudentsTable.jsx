var StudentsTable = React.createClass({
    getInitialState: function() {
        return { students: [],
                 sortByColumn: 'name',
                 sortAlpha: true
                };
    },

    componentDidMount: function() {
        this.loadDataFromServer();
        $('h3.no_js_enabled').replaceWith("<p> JS Enabled </p>")
    },

    loadDataFromServer: function() {
        $.ajax({
            method: 'GET',
            url: '/students',
            dataType: 'JSON',
            success: function(data) {
                this.setState({students: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
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
        var studentsTableOrNothing;
        if (this.state.students.length > 0) {
            studentsTableOrNothing = (<div>
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
                                      </div>)
        } else {
            studentsTableOrNothing = (<h3>No students here! If you need help or think you found a problem, please contact us.</h3>)
        }
        return studentsTableOrNothing;
    }
});