var React = require('react');
var ReactDOM = require('react-dom');
// var CommentBox = require('./CommentBox');
var Login = require('./Login');

// ReactDOM.render(
//     <CommentBox url="/comment" pollInterval={2000} />,
//     document.getElementById('commentbox')
//  );
ReactDOM.render(
    <Login url="/users/create-identity" />,
    document.getElementById('login')
 );