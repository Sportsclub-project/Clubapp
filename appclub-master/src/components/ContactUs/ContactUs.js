import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
// import axios from 'axios';
import './ContactUs.css';

class ContactUs extends Component { 
    // constructor() { 
    //     super()
    //     this.state = {
    //         name: '',
    //         email: '',
    //         message: ''
    //     }
    //     this.handleChange = this.handleChange.bind(this)
    //     this.handleSubmit = this.handleSubmit(this)
    // }
    // handleChange = e => { 
    //     this.setState({ [e.target.name]: e.target.value })
    // }
    // handleSubmit(e) { 
    //     e.preventDefault()
    //     const { name, email, message } = this.state
    // }
    render() { 
        return (
            <section className="col-md-6 cu-bg">
                <div className="container cu-form">
                    <h1>Contact Form</h1>
                    <Form onSubmit={this.handleSubmit}>
					<FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text"
						name="name"
						onChange={this.handleChange} />  
                    </FormGroup>
					<FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email"
						name="email"
						onChange={this.handleChange} />  
                    </FormGroup>
					<FormGroup>
                        <Label for="message">Message</Label>
                        <Input type="textarea"
						name="message"
						onChange={this.handleChange} />  
                    </FormGroup>
					</Form>

                    <div className="FormGrout">
                        <Button className="btn btn-primary btn-block">Submit</Button>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactUs;