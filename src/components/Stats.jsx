import React from 'react'
import { useSelector } from 'react-redux'

export default function Stats() {
  const depenses = useSelector(state => state.budget.depenses)
  const budget = useSelector(state => state.budget.budget)
  const som = depenses.reduce((s,d) => s+d.montant, 0)
  return (
    <div className='stats'>
        <div>Budget : {budget}</div>
        <div>Depenses : {som}</div>
        <div>Ecart : {budget-som}</div>
        
    </div>
  )
}
