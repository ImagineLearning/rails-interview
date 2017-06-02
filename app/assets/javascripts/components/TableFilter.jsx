var TableFilter = React.createClass({
    getInitialState: function() {
        return { searchText: '' }
    },
    handleChange: function(e) {
        this.handleSubmit(e)
        this.setState({searchText: e.target.value})
    },

    handleSubmit: function(e) {
        e.preventDefault();
        $.ajax({
            method: 'GET',
            url: '/students?name=' + e.target.value,
            dataType: 'JSON'
        }).done(function(data) {
            this.props.handleFilter('success', data)
        }.bind(this)).fail(function(xhr, status, err) {
            console.error('/students?name=', status, err.toString());
            this.props.handleFilter('error', err.toString())
        }.bind(this))
    },

    render: function() {
        return (<form className="form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type='text' className='form-control'
                               placeholder="Filter by First Name" name='searchText'
                               value={this.state.searchText} onChange={this.handleChange}>
                        </input>
                    </div>
                </form>)
    }
});