import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';


import Logout from '../pages/Logout';
import Login from '../pages/Login';
import Register from '../pages/Register';

import {connect} from 'react-redux'
import PropTypes from 'prop-types';



//import './Toolbar.css';

const StyledContainer=styled.div`
position:absolute;
top:0;
width:100%;
background-color: #555;
background-image: linear-gradient(315deg, #555 0%, #f53803 74%); 
height:56px;
left:0;
z-index: 2;

.toolbar_navigation{
    display:flex;
    height:100%;
    align-items:center;
    padding:0 1rem;
    justify-content: space-between;
    
}
.toolbar_logo{
    margin-left: 0.5rem;
    color:white;
}
ul{
    list-style:none;
    margin:0;
    padding:0;
    display:flex;
}
li{
    padding:0 1rem;
    color:white
    
}
.link{
    color:white;
    text-decoration:none;
    font-size:15px;
  
&:hover{
    color:orange;
    }
}
@media(max-width:768px){
    .toolbar_navigation-items{
        display:none;
    }
}

`;


class Toolbar extends Component {

    static propTypes={
        auth:PropTypes.object.isRequired
    
    }


    render(){
   const {isAuthenticated, user} = this.props.auth;

   const authLinks = (
    <>
    
      <div><Logout/></div>
    </>
);
const guestLinks = (
    <>
    <div style={{ display:"flex",alignContent:"center"}}>
     <div><Login/></div> 
        <div style={{fontSize:"30px"}}><Register/></div>
        </div>
    </>
);

        
    return (
        <>
        <StyledContainer className="toolbar">
        <nav className="toolbar_navigation"> 
             <div className="toolbar_logo">
                Logo
            </div>
           <div></div>
            <div className="toolbar_navigation-items">
            <ul>
               
                    <li><Link to="/" className="link">Home</Link></li>
                   
                    
             </ul>
            </div>
            {/* <div><Login/></div>  */}
            {/* <div><Register/></div>  */}
            {/* <div><Logout/></div> */}
            
             {isAuthenticated ? authLinks : guestLinks}
                
          
        </nav>
       
        </StyledContainer>
      
        { user ?
        
        <div>
        <h2>{ `Welcome ${ user.name }` }</h2>  
     
        </div>:
        ''}

        </>

    )
}
}

const mapStateToProps = state => ({
auth: state.auth
});



export default connect(mapStateToProps, null)(Toolbar)
