import {createStore,compose} from "redux";
// var rootReducer =require("./reducer/index");
import rootReducer from "./reducer/index";
// var comments=require("./data/comments");
import comments from "./data/comments";
// var posts=require("./data/posts");
import posts from "./data/posts";

const defaultState={
    posts:posts,
    comments:comments
}
const store= createStore(rootReducer,defaultState);
export default store;
 