import React from 'react';
import Ground from '../../assets/background/hero-1.jpg';
import {Container,Row,Col } from 'react-bootstrap';
import './MatchDetails.css';


function MatchDetails() {
    return (
       <>
             <div className="set-bg">
            <img src={Ground} alt="background"></img>
            <div className="h-container">
            <div><h4>20 January 2020 / 11:30 AM</h4></div>
            <div><h2>Helsinki Cricket Club VS Vantaa CC</h2></div>
            </div>
   
            </div>
          
          <div className="container">
           <div className="row">
               <div className="col1 col-sm-6">
                   <h4>Match Details</h4>
                     <ul className="match-place">
                   <li><span className="place-info_label">Tournament:</span>
                           <span className="place_info">Helsinki Cricket Club VS Vantaa CC</span>
                      </li>
                      <li>
                          <span className="place-info_label">Venue:</span>
                          <span className="place_info">Kerava national cricket ground</span>
                      </li>
                      <li>
                          <span className="place-info_label">Time: </span>
                          <span className="place_info"> 20 January 2020 11.30 Europe/Helsinki</span>
                      </li>
                      <li>
                          <span className="place-info_label">Toss: </span>
                          <span className="place_info"> -</span>
                      </li>
                      <li>
                          <span className="place-info_label">Umpires: </span>
                          <span className="place_info"> -</span>
                      </li>
                      <li>
                          <span className="place-info_label">Referee: </span>
                          <span className="place_info"> -</span>
                      </li>
               </ul>
               </div>
           

               <div className="col-sm">
               <div className="team-name">Helsinki Cricket Club</div>
                   <ul className="squad_list1">
                   <li>Name1</li>
                   <li>Name1</li>
                   <li>Name1</li>
                   <li>Name1</li>
                   <li>Name1</li>
                   <li>Name1</li>
                   <li>Name1</li>
                   <li>Name1</li>
               </ul>
                   </div>

                   <div className="col-sm">
                  
                   <div className="team-name">Vantaa CC</div>
                   <ul className="squad_list2">
                  
                   <li>Name1</li>
                   <li>Name1</li>
                   <li>Name1</li>
                   <li>Name1</li>
                   <li>Name1</li>
                   <li>Name1</li>
                   <li>Name1</li>
                   <li>Name1</li>
               </ul>
                   </div>
           </div>
               
                

               
       
           
           
         </div>
          
              </>
           
        
    );
}

export default MatchDetails
