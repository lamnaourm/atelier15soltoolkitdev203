import { combineReducers, configureStore } from "@reduxjs/toolkit";
import BudgetSlice from "./BudgetSlice";


const reducer = combineReducers({
    budget : BudgetSlice
})
const store = configureStore({reducer})

export default store