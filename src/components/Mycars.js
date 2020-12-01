import React, { Component, Fragment } from 'react';
import Cars from './Cars'
import Car from './Cars';


class Mycars extends Component {

  
   state = {
       voitures: [
           {name: 'Mercedez', color: 'black', year: 2000},
           {name: 'Citroen', color: 'red', year: 2010},
           {name: 'Subaru', color: 'green', year: 2018},
       ],

       titre : 'Mon catalogue de voitures 2'
   }

   addTenYears = () => {
       const updatedState = this.state.voitures.map((param) => {
           return param.year -= 10;
       })

       this.setState({
           updatedState
       })
           
   }
   
    render(){

        //obtenir la date actuelle
        const year = new Date().getFullYear();

            return (
                <>
                                
                     <h1>{this.state.titre}</h1>

            <button onClick = {this.addTenYears}> + 10 ans</button>    

            <table>
                <tr>

                      <th>Marque</th>
                      <th>Age</th>
                      <th>Couleur</th>

                </tr>
                                 
            <Car color= {this.state.voitures[0].color} year ={year - this.state.voitures[0].year + ' ans'}>{this.state.voitures[0].name}</Car>
            <Car color= {this.state.voitures[1].color} year ={year - this.state.voitures[1].year + ' ans'}>{this.state.voitures[1].name}</Car>
            <Car color= {this.state.voitures[2].color} year ={year - this.state.voitures[2].year + ' ans'}>{this.state.voitures[2].name}</Car>
             
            {
                this.state.voitures.map((voiture, index) => {
                    return (
                        <Fragment key={index}>
                           <Car nom= {voiture.name} color = {voiture.color} year= {year - voiture.year + ' ans'}/>
                        </Fragment>
                    )
                })
            } 

            </table>       
                </>
            )
            
           

    }
}
export default Mycars;