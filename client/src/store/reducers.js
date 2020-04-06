import { combineReducers } from 'redux';
import reducerShowPlaces from "./reducerShowPlaces";

const rootReducer = combineReducers({
  showPlaces: reducerShowPlaces
})

export default rootReducer;