var Content = require('../../public/js/components/content');
var escapeHtml = require('escape-html');
var Layout = require('./layout');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var index = React.createClass({
  
  render: function() {
    // pass data to client side js
    // xss!!!
    var dataScript = `window.__list__ = '${escapeHtml(JSON.stringify(this.props.list))}';`;
    // render as a dynamic react component
    
    var contentString = ReactDOMServer.renderToString( 
      <Content list={this.props.list} />
    );

    return (
      <Layout {...this.props} >
        <h1>{this.props.title}</h1>
        接下来：
        <div id="content" dangerouslySetInnerHTML={{__html: contentString}}>
        </div>
        <script dangerouslySetInnerHTML={{__html: dataScript}}></script>
      </Layout>
    );
  }
});

module.exports = index;
