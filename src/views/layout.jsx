
var React = require('react');

var Layout = React.createClass({
 
  render: function() {

    var staticpath="http://localhost:9000";

    var mainjs = staticpath+"/js/"+this.props.jsname+".js";

    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/main.css" />
        </head>
        <body>
          {this.props.children}


          <script src={mainjs} > </script>
        </body>
      </html>
    );
  }
});

module.exports = Layout;
