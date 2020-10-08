import React from "react";


function Portfolio(){
    return <>
    <div className="container">
      <h1>Portfolio</h1>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <a href="https://fudoggy.github.io/project1/">
          <div className="card">
            <img
              src={require("../assets/beach-finder-app.png")}
              className="card-img-top img-fluid"
              alt="Projects"
            />
            <div className="card-body">
              <h5 className="card-title">Beach Finder Application</h5>
            </div>
          </div>
        </a>
        </div>
        <div className="col-xs-12 col-md-6">
          <a href="https://polar-hollows-40970.herokuapp.com/">
          <div className="card">
            <img
              src={require("../assets/express-bartender.png")}
              className="card-img-top img-fluid"
              alt="Mobile Apps"
            />
            <div className="card-body">
              <h5 className="card-title">Express Bartender</h5>
            </div>
          </div>
        </a>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <div className="card">
            <img
              src="https://img.gfinityesports.com/upload/_resized/640x320-nc/GfinityAU/Draft/destiny-2-season-of-worthy.jpg"
              className="card-img-top img-fluid"
              alt="Games"
            />
            <div className="card-body">
              <h5 className="card-title">Games</h5>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="card">
            <img
              src="https://mytechdecisions.com/wp-content/uploads/2019/10/AdobeStock_256229414.jpg"
              className="card-img-top img-fluid"
              alt="Web Design"
            />
            <div className="card-body">
              <h5 className="card-title">Web Design</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
}

export default Portfolio;