var React = require('react');
var ReactDOM = require('react-dom');
// var CommentBox = require('./CommentBox');
var Login = require('./Login');
// import { Button } from 'react-bootstrap';
// ReactDOM.render(
//     <CommentBox url="/comment" pollInterval={2000} />,
//     document.getElementById('commentbox')
//  );
ReactDOM.render(
    <Login url="/users/create-identity" />,
    // <Button name=""  type="submit" >
    //     <span>Hello World!!</span>
    // </Button>,
    document.getElementById('login')
);

// var route = require("../route");
// console.info(route)