import {createStore,compose} from "redux";
import rootReducer from "./reducer/index";
import comments from "./data/comments";
import posts from "./data/posts";

const defaultState={
    posts:posts,
    comments:comments
}
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store= createStore(rootReducer,defaultState,enhancers);
export default store;
 