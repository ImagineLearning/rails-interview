var TableFilter = React.createClass({
    getInitialState: function() {
        return { searchText: '' }
    },
    //TODO: ANDREW filter on keystroke and return all users when filter is empty
    handleChange: function(e) {
        var name = e.target.name;
        var obj = {};
        obj[name] = e.target.value;
        this.setState(obj)
    },

    handleSubmit: function(e) {
        e.preventDefault();
        $.ajax({
            method: 'GET',
            url: '/students?name=' + this.state.searchText,
            dataType: 'JSON',
            success: function(data) {
                this.props.handleFilter(data)
            }.bind(this)
        });
    },

    render: function() {
        return (<form className="form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type='text' className='form-control'
                               placeholder="Filter by First Name" name='searchText'
                               value={this.state.searchText} onChange={this.handleChange}>
                        </input>
                    </div>

                    <div className='form-group'>
                        <input type='submit' className='btn btn-primary'
                               disabled={ this.state.searchText === '' }>
                        </input>
                    </div>
                </form>)
    }
});