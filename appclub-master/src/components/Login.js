import React, { useState,useEffect,useCallback} from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
  
} from 'reactstrap';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import {login} from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';
import {Link} from 'react-router-dom';
//import { FaUserCircle} from 'react-icons/fa';
import Logout from './Logout';





const Login =({auth,error,login,clearErrors})=>{
     

const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
const [msg, setMsg] = useState(null);
const [isLogged,setIsLogged]= useState(false);
   
  

      {/*  const handleToggle = useCallback(() => {
        // Clear errors
          clearErrors();
       setOpen(!open);
       
      }, [clearErrors,open]); */}

  
        
  const handleChangeEmail = (e) =>setEmail(e.target.value)
  const handleChangePassword = (e) => setPassword(e.target.value);
    
  const handleOnSubmit = (e) => {

    e.preventDefault();

    const user = {email,password};
    // Attempt to login
    login(user);
    setIsLogged(!isLogged);
   
    // setEmail({email:''});
    // setPassword({password:''})
    
  };
   
  useEffect(() => {
   
    // Check for register error
    if (error.id === 'LOGIN_FAIL') {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }
    
},[error]);


    return(
        <>
        <div style={{marginTop:"2rem"}}>
             {/* <FaUserCircle style={{fontSize:"25px",margin:"1rem"}}></FaUserCircle>  */}
             <h4 style={{textAlign:"center"}}>Login</h4>      
            
            {msg ? <span color="danger">{msg}</span>: null}
          <Form onSubmit={handleOnSubmit}>
            <FormGroup>
              <Label for='email'>Email</Label>
              <Input
                type='email'
                name='email'
                id='email'
                value={email}
                placeholder='Email'
                className='mb-3'
                onChange={handleChangeEmail}
              />

             <Label for='password'>Password</Label>
              <Input
                type='password'
                name='password'
                id='password'
                value={password}
                placeholder='Password'
                className='mb-3'
                onChange={handleChangePassword}
              />
                   <Button color="dark" style={{ marginTop: '2rem' }} block>
             Login 
              </Button>     
            </FormGroup>
          </Form>
         
          
    
        </div>
     
      
        </>
    );
};



const mapStateToProps = state=>({
   isAuthenticated: state.auth.isAuthenticated,
   error: state.error,
   auth: state.auth
});

export default connect(mapStateToProps,{login,clearErrors})(Login);