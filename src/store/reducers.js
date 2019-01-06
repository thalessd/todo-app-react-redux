import { combineReducers} from "redux";
import todoReducer from './todoReducer'

let rootReducer = combineReducers({
   todo: todoReducer
});

export default rootReducer;