import React from 'react'

function Client({person, key}) {
  return (
    <div className='container'>
        
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">Nom du client</th>
                        <th scope="col">Adresse email</th>
                        <th scope="col">Total des achats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{person.name}</td>
                        <td>{person.email}</td>
                        <td>{person.totalachat} €</td>
                    </tr>
                </tbody>
            </table>
        
    </div>
  )
}

export default Client