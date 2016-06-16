"use strict";
var React = require("react");
var $ = require("jquery");
var _ = require("lodash");

module.exports = React.createClass({
    getInitialState(){
        return {
            liSet : [{}]
        }
    },
    handleClickAdd(i,e){
        // let $a = $(e.target),
        //     $li = $a.parent();
        // $li.after($li[0].cloneNode(true));
        let liSet = this.state.liSet;

        // liSet.push({ i : this.state.liSet.length });
        liSet.splice(i,0,_.clone(liSet[i]));
        this.setState({
            liSet
        });
    },
    handleClickRemove(i,e){
        // if ($(this.refs.ulNode).length <= 1)
        //     return;
        // let $a = $(e.target),
        //     $li = $a.parent();
        // $li.detach();
        if( this.state.liSet.length <= 1 )
            return;
        this.state.liSet.splice(i, 1);
        this.setState({
            liSet : this.state.liSet
        });
    },
    handleChangeKey(i,e){
        let liSet = this.state.liSet;
        liSet[i].key = e.target.value;
        this.setState({
            liSet
        });
    },
    handleChangeVal(i,e){
        let liSet = this.state.liSet;
        liSet[i].val = e.target.value;
        this.setState({
            liSet
        });
    },
    render(){
        console.info(this.state.liSet)
        let lis = [];
        for( let i=0;i<this.state.liSet.length;i++){
           lis.push( <li key={i}>
                <input name={ "key" + i } onChange={ this.handleChangeKey.bind(this,i) } value={ this.state.liSet[i].key } className="input-key" type="text"/>:
                <input name={ "val" + i } onChange={ this.handleChangeVal.bind(this,i) } value={ this.state.liSet[i].val } className="input-val" type="text"/>
                <a onClick={ this.handleClickAdd.bind(this,i) } href="javascript:void(0)">+</a>
                <a onClick={ this.handleClickRemove.bind(this,i) } href="javascript:void(0)">×</a>
            </li> );
        };
        return (
            <div>
                <ul ref="ulNode">
                    { lis }
                </ul>
            </div>
        );
    }
});