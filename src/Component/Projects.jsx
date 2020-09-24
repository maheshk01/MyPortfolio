import React, { Component } from 'react';
const Projects =() => (
<div className="main">
    <div className="page-header">
      <h3>Projects</h3>
    </div>
    <div className="box-container">
        <div className="box-content">
        <div className="container-education">

        {/* <h5 className="Sub-title">Shreengar Agro Farm Website</h5> */}
        <div className="proj-image">
        <img src="../images/safnepal.jpg" height="300px" width="300px"></img>
        </div>

        <div className="proj-content">
            <h5 className="Sub-title">Shreenagar Agro Farm Website</h5>
            <p>Shreengar Agro Farm is the leading Agro Business Company of
Nepal. This website includes the information regarding the website along with news 
and events information, Job Vacancy, Current Price of the product, and there is an admin panel to manage all of these.</p>
            View Online <a href='https://www.safnepal.com' target="-_blank">www.safnepal.com</a>
        </div>
        </div>
      </div>
      <div className="box-content">
        <div className="container-education">
            <div className="proj-image">
        <img src="../images/EHRP.jpg" height="300px" width="300px"></img>
        </div>
            <div className="proj-content">
            <h5 className="Sub-title">Earthquake Housing Reconstruction Programme MIS</h5>
       <p>EHRP MIS has been developed to record all the data related to massive earthquake happended in 2015 in Nepal.
            This projects keeps track of all the progress of Reconstruction of building which includes Grieviences,Retrofitting of building, Payment Details, Inspection Details and so on.   </p>
         View Online   <a href='https://www.ehrpmis.nra.gov.np' target="-_blank">www.ehrpmis.nra.gov.np</a>
       </div>

      </div>
      </div>
     
    </div>
    </div>
);
export default Projects;