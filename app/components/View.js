var React=require("react");
var queryString=require("query-string");
function View(props){
   console.log(props)
   let postId=queryString.parse(location.search).postId;
    var post=props.location.params;
    console.log(post)
    return (
        <div>
            
        </div>
    )
}


module.exports=View;