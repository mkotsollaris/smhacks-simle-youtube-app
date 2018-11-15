import { combineReducers } from "redux";
import VideoReducer from "./VideoReducer";
import SearchReducer from "./SearchReducer";

const rootReducer = combineReducers({
  videos: VideoReducer,
  searchKey: SearchReducer
});

export default rootReducer;
