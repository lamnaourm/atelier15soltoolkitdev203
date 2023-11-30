import React from 'react'
import { useSelector } from 'react-redux'

export default function ListDepenses() {

  const depenses = useSelector(state => state.budget.depenses)
  return (
    <div className='list'>
        <table>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Montant</th>
                </tr>
            </thead>
            <tbody>
              {
                depenses.map(d => 
                  <tr>
                    <td>{d.titre}</td>
                    <td>{d.montant}</td>
                  </tr>
                  )
              }
            </tbody>
        </table>
    </div>
  )
}
