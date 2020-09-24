 import React from "react";
import "bootstrap/dist/css/bootstrap.css";
const HomePage = () => (
  <div className="main">
    <div className="page-header">
    <h3>Education</h3>
    </div>
    <div className="box-container">
      <div className="box-content">
          <div className="container-education">
          <h4 className="Sub-title">University of Sunshine Coast</h4>
            <h4 className="Sub-title">2018-2020</h4>
          </div>
          <span>
            <h6>Masters of Information and Communication Technology</h6>
            <p>
              Relational Database Systems, Data and System Integration, Systems
              Analysis, Project Management Principles, Data Science Practice,
              Python Programming
            </p>
          </span>
          </div>
      </div>

  
      <div className="box-container">
      <div className="box-content">
          <div className="container-education">
          <h4 className="Sub-title">Bangalore University</h4>
            <h4 className="Sub-title">2011-2014</h4>
          </div>
          <span>
            <h6>Bachelor of Computer Application</h6>
            <p>
            Dot Net Programming, Database Management System,
             Web Programming, Data Structures, Software Engineering, Visual Programming
            </p>
          </span>
          </div>
      </div>

      {/* <div className="box-container">
      <div className="box-content">
          <div className="container-education">
          <h4 className="Sub-title">Milestone International College</h4>
            <h4 className="Sub-title">2008-2010</h4>
          </div>
          <span>
            <h6>10 +2  </h6>
            <p>
             C Programming, Fundamentals of Computer Science, Mathematics
            </p>
          </span>
          </div>
      </div> */}
          
          
    </div>
);

export default HomePage;
