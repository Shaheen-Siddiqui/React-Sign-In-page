import React from 'react';
import './index.css';
const col={
    color:"blue",}

function Compo(params) {
    return <React.Fragment>
    <div className="container">
    
    <div className="item item1"><h4>Sign In To Your Account</h4></div>  
    <div className="item item2"><img className="img" src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip" alt="google" />Sign in with Google</div><br />
    <div className="item item3">Email Address <br /> <input></input></div><br />
    <div className="item item4">Password <br /> <input></input></div><br />
    <div className="item item5">Forgot Your Password? <br /><button className="but">Sign in </button> </div><br />
    <div className="item item6"> <span style={col}> Don't have Account yet? </span> Get started  here  </div> 
    </div>
    </React.Fragment>
 
}

export default Compo;