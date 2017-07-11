var React=require("react");
var Link=require("react-router-dom").Link;
var Photogrid=require("./PhotoGrid");
class Home extends React.Component{
   render(){
       return (
           <div>
              <Photogrid {...this.props}/>
           </div>
       )
   }
}

module.exports=Home;