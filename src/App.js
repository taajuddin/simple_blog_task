import React from 'react';
import Postform from './components/Postform'
import Postlist from './components/Postlist'
import {BrowserRouter,Link,Route,} from 'react-router-dom'
//import home from './components/home'
import Home from './components/Home'
import './index.css';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <div>
       {    
            <ul>
                
                <li>
                    <Link to ="/postlists" className="nav-link">Publised</Link>
                </li>
                <li>
                   <Link to="/postform" className="nav-link"> New post</Link> 
                </li>

                <li style={{marginRight: "885px"}}>
                    <Link to ="/" className="nav-link">SMART_ERP TASK</Link>
                </li>
          </ul>
       }

              <Route path="/postform" component={Postform} exact={true} />
              <Route path="/postlists" component={Postlist} exact={true}/>  
              <Route path="/" component={Home} exact={true}/>  
              </div>
             
       </BrowserRouter>

      
    </div>
  );
}

export default App;
