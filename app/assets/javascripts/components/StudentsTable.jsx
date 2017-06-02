var StudentsTable = React.createClass({
    getInitialState: function() {
        return { students: [],
                 sortByColumn: 'name',
                 sortAlpha: true,
                 dataRetrievalError: false,
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
            dataType: 'JSON'
        }).done(function(data) {
            this.setState({students: data, dataRetrievalError: false});
        }.bind(this)).fail(function(xhr, status, err) {
            console.error('/students', status, err.toString());
            this.setState({dataRetrievalError: true})
        }.bind(this));
    },

    getDefaultProps: function() {
        return { students: [],
                 sortByColumn: 'name',
                 sortAlpha: true
                };
    },

    refreshTable: function(status, data) {
        if (status === 'success') {
            this.setState({
                students: data,
                sortByColumn: 'name',
                sortAlpha: true,
                dataRetrievalError: false
            })
        } else if (status === 'error') {
            this.setState({
                dataRetrievalError: true
            })
        }
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
        var studentsTableAndFilter;
        if (this.state.students.length > 0) {
            studentsTableAndFilter = (<div>
                                          <TableFilter handleFilter={this.refreshTable} />
                                          { this.state.dataRetrievalError ? <Alert /> : null }
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
            studentsTableAndFilter = (<div>
                                          <TableFilter handleFilter={this.refreshTable} />
                                          { this.state.dataRetrievalError ? <Alert /> : null }
                                          <h3>No students here! If you need help or think you found a problem, please contact us.</h3>
                                     </div>)
        }
        return studentsTableAndFilter;
    }
});