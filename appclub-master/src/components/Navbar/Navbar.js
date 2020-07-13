import React, { Component } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Logo from '../../assets/logo/logo.svg'
import './Navbar.css';
import Login from '../Login';
import Register from '../Register';
import Logout from '../Logout';

import {connect} from 'react-redux'
import PropTypes from 'prop-types';





class navbar extends Component { 

    constructor(props,auth) {
        super(props);
        
    }
    static propTypes={
        auth:PropTypes.object.isRequired
    
    }


      
  

    render(){
          const {isAuthenticated, user} = this.props.auth;
      
       const authLinks = (
            <>
            
            <div>
           </div>  
              
            </>
      );
      const guestLinks = (
        <>
        <div>
         <div className="auth-nav"><ul>
            <li><NavLink to="/register" className="link"> Sign up</NavLink></li> 
            <li><NavLink to="/login" className="link">Login</NavLink></li>
            </ul>
            </div>
            </div>
        </>
    );
   

    return (
        <>
       
        <div className="navbar">
            <nav className="navbar_navigation">
                <div className="navbar_toggle-button">
                    <DrawerToggleButton click={this.props.drawerClickHandler} />
                </div>
                 <div className="navbar_logo"><Link to="/"><img src={Logo} alt="logo"></img></Link></div>  
                <div className="spacer-b" />
                <div className="navbar_navigation-items">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/club">Club</NavLink></li>
                        <li><NavLink to="/fixture">Fixture</NavLink></li>
                        <li><NavLink to="/players">Players</NavLink></li>
                        <li><NavLink to="/gallery">Gallery</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li> 
                         
                    </ul>
                   
                </div>
                  {isAuthenticated ? authLinks : guestLinks}  
            </nav>
           
         
          
        </div>
     
   
        {/* { user ? 
        
        <div>
         <h2>{ `Welcome ${ user.name }` }</h2>   
     
        </div>:
        ''} */}
        </>
    );
}
}

const mapStateToProps = state => ({
    auth: state.auth
    });
    

export default connect(mapStateToProps, null)(navbar)