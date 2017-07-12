var React=require("react");
var ReactDOM=require("react-dom");
require('./index.css')
var App=require("./components/App");  

 
// var store=require("./store");

ReactDOM.render(<App/>,document.getElementById('app'))
if(module.hot){
   module.hot.accept(App,()=>{
       ReactDOM.render(<App/>,document.getElementById('app'))
   })
}