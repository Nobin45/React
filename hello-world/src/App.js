import React, { useState } from 'react';
import Popup from './Popup';
import './App.css';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="rectangle1">
    <table >
      <tr>
       <th> <div>ATG.WORLD</div></th>
       <th> <div className="rectangle2"><input type="search" id="query" name="q" placeholder="Search for your favorite groups in ATG"></input> </div>  </th>
       <th> <div className="rectangle3">Create account.
       <input type="button" value="It’s free!" onClick={togglePopup}/>
    </div></th>
      </tr>
      <tr> <div className="t5">  <img height="100%" width="100%" src="./photo.jpg" alt="pic"/> 
      <div className="t6">Computer Engineering </div> 
      <div className="t7"> 142,765 Computer Engineers follow this</div>
      </div> </tr>
      <tr>
         <th> <div className="t8"> All Posts(32)</div></th>
         <th> <div className="t9"> Article</div></th>
         <th> <div className="t10">Event </div></th>
         <th> <div className="t11"> Education</div></th>
         <th> <div className="t12">Job </div></th>
        <th> <div className="t13"> Write a Post</div></th>
        <th> <div className="t14"> Join Group</div></th>
      </tr>
      <tr> 
        <th>   <div className="rectangle5"><img height="100%" width="100%" src="./d.jpg" alt="pho"/></div></th>
      </tr>
    </table>






    {isOpen && <Popup
      content={<>
      <div className="t1"> Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</div>
      <form>
      <table>
            <div className="t2">Create Account</div>
    <div className="t3"> Already have an account? <a href="#">Sign In</a> </div>

        <tr>  <div className="t4"> <th><input type="text" placeholder="First Name"></input></th> 
                               <th><input type="text" placeholder="Last Name"></input></th> </div>        </tr>
        <tr>  <div  className="r1"> <th><input type="text" placeholder="Email" ></input></th>    </div>       </tr>
        <tr>

        </tr>
      </table>
      </form>
      </>}
      handleClose={togglePopup}
    />}
  </div>
  );
}

export default App;