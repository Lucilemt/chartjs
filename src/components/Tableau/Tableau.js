import React from 'react'
import Client from './Client'

function Tableau(props) {
    const persons = [
        {
          id: 24,
          name: 'Martin Gabriel',
          email: 'g.martin999@gmail.com',
          achat: 'Oui',
          totalachat: 198
        },
        {
          id: 25,
          name: 'Petit Marie',
          email: 'm.petit999@gmail.com',
          achat: 'Oui',
          totalachat: 121
        },
        {
          id: 26,
          name: 'Robert Luc',
          email: 'l.robert999@gmail.com',
          achat: 'Oui',
          totalachat: 99
        },
        {
          id: 27,
          name: 'Richard Stéphanie',
          email: 's.richard999@gmail.com',
          achat: 'Non',
          totalachat: 0
        }
      ]
      const personList= persons.map(person => (
        <Client key={person.id} person={person}/>
      ))
  return (
    <div> {personList}</div>
  )
}

export default Tableau