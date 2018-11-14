import { combineReducers } from "redux";
import VideoReducer from "./VideoReducer";

const rootReducer = combineReducers({
  videos: VideoReducer
});

export default rootReducer;
