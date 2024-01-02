
import React from 'react';
import '../Apply/Apply.css'
const ApplicationForm = () => {

  return (
   <div className="form-containers-apply">
      <div id="form-container">
      <p id="description">APPLICATION FORM</p>
      <form>
        <div className="rowTab">
          <div className="labels">
            <label id="name-label" htmlFor="name">* Full Name: </label>
          </div>
          <div className="rightTab">
            <input autoFocus type="text" name="name" id="name" className="input-field" placeholder="Enter your full name" required />
          </div>
        </div>
        <div className="rowTab">
          <div className="labels">
            <label id="email-label" htmlFor="email">* Email: </label>
          </div>
          <div className="rightTab">
            <input type="email" name="email" id="email" className="input-field" required placeholder="Enter your Email" />
          </div>
        </div>
        <div className="rowTab">
          <div className="labels">
            <label id="number-label" htmlFor="age">* Age: </label>
          </div>
          <div className="rightTab">
            <input type="number" name="age" id="number" min="1" max="125" className="input-field" placeholder="Age" />
          </div>
        </div>
        <div className="rowTab">
          <div className="labels">
            <label htmlFor="most-like">Which position would you like to apply for? </label>
          </div>
          <div className="rightTab">
            <select id="most-like" name="mostLike" className="dropdown">
              <option disabled selected value>Select an option</option>
              <option value="front-end">Front-end</option>
              <option value="fullstack">Fullstack</option>
              <option value="projectManager">Project Manager</option>
              <option value="javaDeveloper">Java Developer</option>
              <option value="artificialintelligenceExpert">AI expert</option>
            </select>
          </div>
        </div>
        <div id="wrapper">
          <input type="file" id="myFile" name="filename" />
          <button id="submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
   </div>
  );
};

export default ApplicationForm;
