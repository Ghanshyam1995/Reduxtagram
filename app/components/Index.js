import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actionCreator from "../actions/actionCreator";
import Home from "./Home";


function mapStateToProps(state){
    return{
        posts:state.posts,
        comments:state.comments
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreator,dispatch);
}
const Index=connect(mapStateToProps,mapDispatchToProps)(Home);


export default Index;