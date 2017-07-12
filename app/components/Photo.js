var React = require("react");
var Link = require("react-router-dom").Link;

function Photo(props) {
  
    var match=props.match;
    const { post, i, comments } = props;
    return (
       
        <figure className="photo-card col-sm-4 ">
            <div>
                <Link  to={{pathname :'/view',search:'?postId='+post.code,params:{posts : props.posts,comments:comments,index:i}}}>
                    <img src={post.display_src}  alt={post.caption} />
                </Link>
              
                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button onClick={props.increment.bind(null,i)} className="likes"><i className="fa fa-heart"></i>{post.likes}</button>
                        <Link to={`/view/${post.code}`}>
                           <button><i className="fa fa-comments-o"></i>{comments[post.code] ? comments[post.code].length : 0}</button>
                        </Link>
                    </div>
                </figcaption>
            </div>
        </figure>
      
    )
}

module.exports = Photo;