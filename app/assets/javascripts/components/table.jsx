// app/assets/javascripts/components/table.jsx

window.Table = React.createClass({
    getInitialState: function() {
        return { students: this.props.data };
    },

    getDefaultProps: function() {
        return { students: this.props.data };
    },

    render: function() {
        return (<h1>Table will go here</h1>);
    }
});