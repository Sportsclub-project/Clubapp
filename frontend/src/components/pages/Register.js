import React, { useState,useEffect,useCallback} from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input, 
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import {register} from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import {Link} from 'react-router-dom';




const RegisterModal =({isAuthenticated, error,register,clearErrors})=>{
     const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(null);


    const handleToggle = useCallback(() => {
        // Clear errors
          clearErrors();
        setModal(!modal);
      }, [clearErrors, modal]); 

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

    // Attempt to login
    register(newUser);
     
  };
   

  useEffect(() => {
   
    // Check for register error
    if (error.id === 'REGISTER_FAIL') {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }
  // If authenticated, close modal
  if (modal) {
    if (isAuthenticated) {
      handleToggle();
    }
  } 

    
},[error,handleToggle, isAuthenticated,modal]);

    return(
        <div>
            <Link onClick={handleToggle} to="/register" className="link"> 
            Sign up
           </Link> 
               
         <Modal isOpen={modal} 
         toggle={handleToggle}
        > 
             <ModalHeader toggle={handleToggle}>Register</ModalHeader> 
             <ModalBody> 
            {msg ? <Alert color="danger">{msg}</Alert>: null}
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
        </ModalBody> 
         </Modal> 
        </div>
    );
};



const mapStateToProps = state=>({
   isAuthenticated:state.auth.isAuthenticated,
   error:state.error
});

export default connect(mapStateToProps,{register,clearErrors})(RegisterModal);