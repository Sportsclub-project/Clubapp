import React, { useState,useRef } from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap';
import './Fixtures.css';
import {connect} from 'react-redux';
import {addFixture,getFixtures} from '../actions/fixtureActions'
import AddFixture from './AddFixture';




const Fixtures= ({addFixture})=>{

  const initialState={
    gameName:'',
    homeTeam:'',
    awayTeam:'',
    date:'',
    time:'',
    place:''
  }
 

  
  const [{gameName , homeTeam, awayTeam,date,time,place },setState] = useState(initialState);

  // const clearState = () => {
    // setState({ ...initialState });
  // };
  
  const handleOnChange = (e) =>{
    e.persist();
    setState(prevState=>({...prevState,[e.target.name]: e.target.value}));

  } 
  


 
 
 const handleOnSubmit =(e)=>{
   e.preventDefault();

   const newFixture = {
     gameName,
     homeTeam,
     awayTeam,
     date,
     time,
     place
   };

   //Add fixture via addFixture action
   addFixture(newFixture);
   setState({ ...initialState });
 }

 handleViewFixture=()=>{
  this.props.getFixtures();
 }
 
 
   return (
            <div className="fixtures_container">
            
                <Form className="form" onSubmit={handleOnSubmit}>
  <Form.Group as={Row} controlId="formHorizontalgame">
    <Form.Label column sm={2}>
    Tournament name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name="gameName" value={gameName} placeholder="Tournament name"  onChange={handleOnChange} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalteam">
    <Form.Label column sm={2}>
    Team A
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name="homeTeam" value={homeTeam} placeholder="Team A"  onChange={handleOnChange} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalteam">
    <Form.Label column sm={2}>
    Team B
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name="awayTeam" value={awayTeam} placeholder="Team B"  onChange={handleOnChange}/>
    </Col>
  </Form.Group>
  
  <Form.Group as={Row} controlId="formHorizontaldate">
    <Form.Label column sm={2}>
    Match date
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="date" name="date" value={date} placeholder="Match date"  onChange={handleOnChange} />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontaltime">
    <Form.Label column sm={2}>
    Match time
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="time" name="time" value={time} placeholder="Match time"  onChange={handleOnChange} />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalplace">
    <Form.Label column sm={2}>
    Match place
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name="place" value={place} placeholder="Match place"  onChange={handleOnChange} />
    </Col>
  </Form.Group>
  <input type="hidden" name="home_team_score" value="0"/>
                  <input type="hidden" name="away_team_score" value="0"/>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Add</Button>
    </Col>
  </Form.Group>
</Form>
   
            </div>
        )
    }

const mapStateToProps = (state) =>({
  fixture: state.fixture
})



export default connect(mapStateToProps,{addFixture,getFixtures})(Fixtures);
