var React=require("react");
var Photo=require("./Photo");

class PhotoGrid extends React.Component{
    constructor(props){
        super(props);
      
    }
    render(){
        var match=this.props.match;
        console.log(this.props)
        var {comments=[]}=this.props;
        var {posts=[]}=this.props;
        return(
            <div className="row">
                 {posts.map((post,index)=> {
                    return <Photo {...this.props} key={index} i={index} post={post}/>
                 })}
            </div>
        )
    }
}

module.exports=PhotoGrid;