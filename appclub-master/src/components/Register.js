import React, { useState,useEffect} from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input, 
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import {register} from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';
import {Redirect} from 'react-router-dom';





const RegisterModal =({isAuthenticated, error,register,clearErrors})=>{
  

   
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(null);


  

    const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
    
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
    email,
    password

    };

    // Attempt to register
    register(newUser);
    
     
  };
   

  useEffect(() => {
   
    // Check for register error
    if (error.id === 'REGISTER_FAIL') {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }
 //If authenticated
 
},[error]);



    return(
        <div style={{marginTop:"2rem"}}> 
          <h4 style={{textAlign:"center"}}>Sign Up</h4>           
            {msg ? <span style={{color:"red"}}>{msg}</span>: null}
          <Form onSubmit={handleOnSubmit}>
            <FormGroup>
              <Label for='name'>Name</Label>
              <Input
                type='text'
                name='name'
                id='name'
                placeholder='Name'
                className='mb-3'
                onChange={handleChangeName}
             
                 />

              <Label for='email'>Email</Label>
              <Input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                className='mb-3'
                onChange={handleChangeEmail}
              />

             <Label for='password'>Password</Label>
              <Input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                className='mb-3'
                onChange={handleChangePassword}
              />
              <Button color="dark" style={{ marginTop: '2rem' }} block>
                Register
              </Button>
            </FormGroup>
          </Form>
          {isAuthenticated?(<Redirect to="/login"/>):(<Redirect to='/register'/>)} 
        </div>
    );
};



const mapStateToProps = state=>({
   isAuthenticated:state.auth.isAuthenticated,
   error:state.error
});

export default connect(mapStateToProps,{register,clearErrors})(RegisterModal);