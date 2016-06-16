var React = require('react');
var ReactDOM = require("react-dom");
var ApiList = require("./api-list");
var NewApi = require("./new-api");
ReactDOM.render(
    <div>
        <ApiList/>
        <NewApi/>
    </div>,
    document.getElementById("container")
);