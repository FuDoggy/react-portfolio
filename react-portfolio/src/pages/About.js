import React from "react";

function About(){
    return (
        <>
        <div class="container">
      <h1>About Me</h1>

      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <img
            src={require("../assets/IMG_4906.JPG")}
            alt="Picture of Me"
            class="img-thumbnail float-left"
          />
          <p>
            My name is Kevin Fujimoto. I am a seasoned Technical Project Manager
            with dual degrees in Business Administration and deep experience in
            designing solutions to meet operational needs. As an experienced
            manager in Agile Methodology, I have a proven talent for
            evaluating and resolving business challenges across industries and
            functions. As a recent graduate of the UCLA Full-Stack Software
            Development Program, I am confident that my newly-added technical
            aptitude in software development and cutting-edge web technologies,
            coupled with my adept problem solving abilities and determination to
            deliver sound solutions on schedule, make me a strong personable and
            technical addition to any engineering team.
          </p>
        </div>
      </div>
    </div>
    </>
    )
}

export default About;