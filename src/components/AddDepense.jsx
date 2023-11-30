import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adddepense } from '../redux/BudgetSlice'
import uuid from 'react-uuid'

export default function AddDepense() {

  const [titre, setTitre] = useState()
  const [montant, setMontant] = useState()
  const dispatch = useDispatch()

  return (
    <div className='adddepense'>
        <input type="text" name="titre" id="titre" value={titre} onChange={(e) => setTitre(e.target.value)} placeholder='Saisir titre...'/>
        <input type="number" name="montant" id="montant" value={montant} onChange={(e) => setMontant(e.target.value)} placeholder='Saisir montant...'/>
        <button onClick={() => dispatch(adddepense({id:uuid(), titre, montant: parseFloat(montant)}))}>Ajouter depense</button>
    </div>
  )
}
