import React from 'react';
import '../css/cv-page.css'

const Cv = (props) => {
    return ( 
    <main>
        <div id="main-div">
            <h2>Personal Details</h2>
            {props.enteredDetails.name}
            <br/>
            {props.enteredDetails.email}
            <br/>
            {props.enteredDetails.number}

            <h2>Education</h2>
            {props.education.qualification}
            <br/>
            {props.education.school}
            <br/>
            {props.education.fromDate} -
            {props.education.toDate}

            <h2>Work Experience</h2>
            {props.work.position}
            <br/>
            {props.work.company}
            <br/>
            {props.work.fromDate} -
            {props.work.toDate}
        </div> 
    </main>);
}
 
export default Cv;