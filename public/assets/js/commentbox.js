var React = require('react');
var ReactDOM = require('react-dom');
var marked = require('marked');
var $ = require('jquery');

var Comment = React.createClass({
    rawMarkup: function() {
        var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
        return { __html: rawMarkup };
    },

    render: function() {
        return ( 
          < div className = "comment" >
            < h2 className = "commentAuthor" > { this.props.author } < /h2>
            < span dangerouslySetInnerHTML = { this.rawMarkup() } />
          < /div>
        );
    }
});
var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
            return ( < Comment author = { comment.author } > { comment.text } < /Comment>);
        });
        return ( < div className = "commentList" > { commentNodes } < /div>);
    }
});

var CommentForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({ author: author, text: text });
        this.refs.author.value = '';
        this.refs.text.value = '';
        return;
    },
    render: function() {
        return ( 
          <form className = "commentForm" onSubmit = { this.handleSubmit } >
            <input type = "text" placeholder = "你的名字" ref = "author" />
            <input type = "text" placeholder = "说些什么..." ref = "text" />
            <input type = "submit" value = "发表" />
          </form>
        );
    }
});

var CommentBox = React.createClass({
    loadCommentsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({ data: data });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    handleCommentSubmit: function(comment) {
        // TODO: submit to the server and refresh the list
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({ data: newComments });
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: function(data) {
                this.setState({ data: data });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return { data: [] };
    },
    componentDidMount: function() {
        this.loadCommentsFromServer();
    },
    render: function() {
        return ( 
          < div className = "commentBox" >
            < h1 > 我的留言板 < /h1>
            < CommentList data = { this.state.data } />
            < CommentForm onCommentSubmit = { this.handleCommentSubmit }/>
          < /div>
        );
    }
});

module.exports = CommentBox;
