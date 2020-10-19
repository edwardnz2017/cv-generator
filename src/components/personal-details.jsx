import React, { Component } from 'react';
import '../css/personal-details.css'

const Personal = (props) => {
  return (
    <form id="form-div" onSubmit={props.onSubmit}>
      <input type="text" name="enterName" required placeholder="Name"/>
      <input type="email" name="enterEmail" required placeholder="E-mail"/>
      <input type="tel" name="enterNumber" required placeholder="Phone Number"/>
      <button id="next-button" type="submit"><span>Next</span></button>
    </form> 
  );
}
 
export default Personal;