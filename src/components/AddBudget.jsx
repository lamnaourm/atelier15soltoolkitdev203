import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addbudget } from '../redux/BudgetSlice'

export default function AddBudget() {

  const dispatch = useDispatch()
  const [montant, setMontant] = useState()
  return (
    <div className='addbudget'>
        <input type="number" name="montant" id="montant" value={montant} onChange={(e) => setMontant(e.target.value)} placeholder='Saisir un montant ...'/>
        <button onClick={() => dispatch(addbudget(montant))}>Ajouter Budget</button>
    </div>
  )
}
