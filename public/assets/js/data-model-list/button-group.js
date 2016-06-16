var React = require("react");
var formNode = null;
module.exports = React.createClass({
    // getInitialState(){
    //
    // },
    handleClickForSave(e){   //保存并测试
        this.props.handleEventSet.handleSave();
    },
    handleClickForTest(e){    //测试
        this.props.handleEventSet.handleTest();
    },
    handleClickForReset(e){   //重置
        this.props.handleEventSet.handleRest();
    },
    handleClickForFile(e){    //插入上传控件
        this.props.handleEventSet.handleFile();
    },
    handleClickForInJson(e){  //加入JSON
        this.props.handleEventSet.handleInJSON();
    },
    handleClickForOutJson(e){     //导出JSON
        this.props.handleEventSet.handleOutJSON();
    },
    handleClickForPreview(e){     //预览
        this.props.handleEventSet.handlePreview();
    },
    componentDidMount(){

    },
    render(){
        formNode = this.props.formNode;
        return(
            <div>
                <input type="button" onClick={ this.handleClickForSave } value="保存并测试"/>
                <input type="button" onClick={ this.handleClickForTest } value="测试"/>
                <input type="reset" onClick={ this.handleClickForReset } value="重置"/>
                <input type="button" onClick={ this.handleClickForFile } value="插入上传控件"/>
                <input type="button" onClick={ this.handleClickForInJson } value="加入JSON"/>
                <input type="button" onClick={ this.handleClickForOutJson } value="导出JSON"/>
                <input type="button" onClick={ this.handleClickForPreview } value="预览"/>
            </div>
        );
    }
});