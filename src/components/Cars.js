import React from 'react'

const Car = ({nom, color, year}) => {

const colorInfo = color ? (<p>Couleur: {color}</p>): (<p>Couleur: Néant</p>);

if (nom) {

    return (
       <tr>
           <td><p>Marque:{nom}</p></td>
           <td><p>Age: {year}</p></td>
           <td>{colorInfo}</td>

          </tr>

    )

} else {
 return null;



}

   
}
export default Car;

/**
 * 
 * 
 */
