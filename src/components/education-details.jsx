import React from 'react';
import '../css/education-details.css'

const Education = (props) => {
  return (
    <form id="form-div" onSubmit={props.onSubmit}>
      <input type="text" name="enterQualification" required placeholder="Qualification" />
      <input type="text" name="enterSchool" required placeholder="School Name" />
      <div>
        <label htmlFor="fromDate">
          From:         
          <input type="date" name="fromDate" placeholder="YYYY/MM/DD" required className="date-input"/>
        </label>
        <label htmlFor="toDate">
          To:
          <input type="date" name="toDate" placeholder="YYYY/MM/DD" required className="date-input"/>
        </label>
      </div>
      <button id="next-button" type="submit"><span>Next</span></button>
    </form>
  );
}

export default Education;