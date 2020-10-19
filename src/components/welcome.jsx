import React, { Component } from 'react';
import '../css/welcome.css';

const Welcome = (props) => {
    return ( 
    <div id="welcome-div">
        <h1>Let's get started creating your resume!</h1>
        <button id="start-button" onClick={props.onWelcome}><span>Start</span></button>
    </div> 
    );
}
 
export default Welcome;