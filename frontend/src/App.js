import React,{Component} from 'react';
import './App.css';
import Toolbar from './components/navigationbar/Toolbar';
import MainContent from './components/pages/MainContent';
import Footer from './components/footer/Footer';

import store from './store';
import { Provider } from 'react-redux';


class App extends Component{




  render(){
  return (    
    <>
    <Provider store={store}> 
      <div className="page-container">
      <Toolbar/>  
       <div className="content-wrap">
          
        <MainContent />
         
         </div>
         
     
      </div> 
      </Provider>
    
  </>
  );
 }
}

export default App;
