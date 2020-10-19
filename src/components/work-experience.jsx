import React from 'react';
import '../css/work-experience.css'

const Work = (props) => {
    return (
        <form id="form-div" onSubmit={props.onSubmit}>
          <input type="text" name="enterJobPosition" required placeholder="Job Position" />
          <input type="text" name="enterCompany" required placeholder="Company" />
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
 
export default Work;