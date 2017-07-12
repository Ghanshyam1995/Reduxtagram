var React = require("react");
var Photo = require("./Photo");
var Link = require("react-router-dom").Link;

class View extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();

        // var author = this.refs.author.value;
        // var comment = this.refs.comment.value;
        // this.refs.commentFORM.reset();
    }
    render() {
        var postId = this.props.match.params.postId;
        console.log("%c" + postId, "color:#555");
        return (
            <div>
                  
            </div>
        )
    }
}


module.exports = View;