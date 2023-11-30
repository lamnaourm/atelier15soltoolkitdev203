import { createSlice } from "@reduxjs/toolkit"
import uuid from "react-uuid"


const BudgetSlice = createSlice({
    name:'budget',
    initialState:{
        budget:90000,
        depenses: [
            {id:uuid(), titre:'Essence Voiture', montant:3000},
            {id:uuid(), titre:'Vetement', montant:300},
            {id:uuid(), titre:'Voyage', montant:30000},
        ]
    },
    reducers:{
        addbudget: (state, action) =>{
            state.budget += parseFloat(action.payload)
        },
        adddepense: (state,action) => {
            state.depenses = [...state.depenses, action.payload]
        }
    }
})

export const {addbudget, adddepense } = BudgetSlice.actions
export default BudgetSlice.reducer
