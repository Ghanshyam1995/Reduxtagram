var React = require("react");
var Photo = require("./Photo");
var Link = require("react-router-dom").Link;
var queryString = require("query-string");
class View extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();

        var author = this.refs.author.value;
        var comment = this.refs.comment.value;
        this.refs.commentFORM.reset();
    }
    render() {
        let postId = queryString.parse(location.search).postId;
        var posts = this.props.location.params.posts;
        var comments = this.props.location.params.comments[postId];
        console.log(comments);
        var index = this.props.location.params.index;
        const post = posts[index];
        return (
            <div className="view-photo">
                <div className="posts">
                    <img src={post.display_src} />
                    <div className="control-buttons">
                        <button className="likes"><i className="fa fa-heart"></i>{post.likes}</button>
                    </div>
                </div>
                <div className="comments">
                    {comments !== undefined && comments.map((comment, index) => {
                        return (
                            <p key={index}>
                                <b className="user">{comment.user}:</b>{comment.text}
                            </p>
                        )
                    })}
                    <form ref="commentFORM" onSubmit={this.handleSubmit}>
                        <input placeholder="author" type="text" ref="author" />
                        <input type="text" placeholder="add comment" ref="comment" />
                        <input type="submit" hidden />
                    </form>
                </div>
            </div>
        )
    }
}


module.exports = View;