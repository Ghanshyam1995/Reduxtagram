import {combineReducers} from "redux";
// var posts=require("./posts");
// var comments=require("./comments");
import posts from "./posts";
import comments from "./comments";
const rootReducer=combineReducers({posts,comments});

export default rootReducer;