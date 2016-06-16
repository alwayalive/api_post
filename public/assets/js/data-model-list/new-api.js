var React = require("react");
var ButtonGroup = require("./button-group");
var FieldList = require("./field-list");
var $ = require("jquery");
var getQueryString = require("../../../../model/util").getQueryString;

var handleEventSet = {
    formNode : null,
    apiNameNode : null,
    apiUrlNode : null,
    handleSave(){
        let $formNode = $(this.formNode),
            dataArray = $formNode.serializeArray(),
            url = "/data-model/new-api",
            identity = getQueryString(document.cookie, "identity", ";"),
            requestPramas = {
                dataArray,
                identity,
                name: this.apiNameNode.value,
                url: this.apiUrlNode.value,
                method: "post"
            };
        if(!requestPramas.name || !requestPramas.url)
            return alert("name&url不能为空！");
        $.post(url, requestPramas, (data)=> {
            console.info(data)
        });
    },
    handleTest(){
        let $formNode = $(this.formNode),
            dataArray = $formNode.serializeArray(),
            url = "/data-model/api-test",
            requestPramas = {
                dataArray,
                url: this.apiUrlNode.value,
                method: "get"
            };
        $.post(url, requestPramas, (data)=> {
            console.info(data)
        });
    },
    handleRest(){

    },
    handleFile(){

    },
    handleInJSON(){

    },
    handleOutJSON(){

    },
    handlePreview(){

    }
};

module.exports = React.createClass({
    // getInitialState(){
    //
    // },
    componentDidMount(){
        handleEventSet.formNode = this.refs.formNode;
        handleEventSet.apiNameNode = this.refs.apiNameNode;
        handleEventSet.apiUrlNode = this.refs.apiUrlNode;
    },
    render(){
        return (
            <div id="edit-area">
                <fieldset>
                    <legend>新增API</legend>
                    <ul>
                        <li><label htmlFor="api-name">API名称：</label><input value="xxxx" ref="apiNameNode" id="api-name" type="text"/></li>
                        <li><label htmlFor="api-url">请求地址：</label><input value="http://localhost:5000/" ref="apiUrlNode" id="api-url" type="text"/></li>
                    </ul>
                    <form ref="formNode" action="/api-list/new-api">
                        <FieldList/>
                        <ButtonGroup handleEventSet={ handleEventSet }/>
                    </form>
                </fieldset>
            </div>
        );
    }
});