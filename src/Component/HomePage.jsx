import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import socialIcon from "react-social-icons/dist/social-icon";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
class Homepage extends Component {
  state = {
    imageurl: "../Images/profile.png",
  };
  render() {
    return (
      <div className="main">
        <div className="page-header">
          <h3>About Me</h3>
        </div>

        <div className="box-container">
          <div className="box-content">
            <p>
              A result orientated and experienced .Net developer with over 3+
              years of experience in web application development. During my
              professional career I have worked entirely under dot net framework
              using different programming languages which includes VB.net, C#
              .net, Asp.net MVC Framework and databases which includes SQL
              Server and Oracle.
            </p>
            <p>
            I have diverse experience right from interacting with the clients for understanding the business
             requirements to analysing and translating business requirements to technical requirements
              and architecture along with analysis, design, development, customizations 
              and implementation of software applications.
            </p>
            <p>
            Good Experience in Web Applications.
            </p>
            <p>
            Good Experience on C#.NET 3.5, ASP.NET 3.5/4.0, ADO.NET, SQL Server, Oracle 11g/12C , MVC, Web API,Web Services, 
            Entity Framework , LINQ, JQuery, JavaScript, and Ajax.
            </p>
            <p>
            Good in HTML, XML, XAML, WPF, WCF, CSS, VbScript
            </p>
            <p>
            Knowledge of python Library such as pandas,numpy,matplotlib,scikit learn.
            </p>
<p>
Good programming, analyzing and interpersonal skills.
</p>
<p>
Excellent knowledge and experience to design, develop, debug, maintain and enhance an application. 
</p>
            <div className="content-position">
              <h1>Mahesh Khatiwada</h1>
              <h2>Software Developer</h2>
            </div>
            {/* <div className="social-icon">
            <SocialIcon url="https://twitter.com/maheshk005" className="social-link" target="_blank" />
            <SocialIcon url="https://www.linkedin.com/in/mahesh-khatiwada-955026111/" className="social-link" target="_blank" />
            <SocialIcon url="https://myaccount.google.com/" className="social-link" target="_blank" />
            <SocialIcon url="https://www.facebook.com" className="social-link" target="_blank"/>
            <SocialIcon url="https://www.youtube.com" className="social-link" target="_blank" />
          </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
