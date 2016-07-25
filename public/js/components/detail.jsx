
var React = require('react');

var Content = React.createClass({
  propTypes: {
    list: React.PropTypes.array
  },

  getInitialState: function () {
    return {
      list: this.props.list
    };
  },

  render: function() {
    return (
      <div>
        
          {this.state.list.map((content, index) => {
            return <span>{content}</span>;
          })}
        
      </div>
    );
  },

});

module.exports = Content;
