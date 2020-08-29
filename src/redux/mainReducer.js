import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn4695439Reducer from '../features/SignIn4695439/redux/reducers'
import CalendarView895437Reducer from '../features/CalendarView895437/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn4695439: SignIn4695439Reducer,
CalendarView895437: CalendarView895437Reducer,

});