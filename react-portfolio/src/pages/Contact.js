import React from "react";

function Contact(){
    return (
        <>
<div class="container-fluid margin-top">
        <div class="row">
            <div class="col-xs-12 col-md-2"></div>
            <div class="col-xs-12 col-md-8">
                <h1>Contact</h1>
            </div>
            <div class="col-xs-12 col-md-2"></div>
        </div>    
        <div class="row">
            <div class="col-xs-12 col-md-2"></div>
                <div class="col-xs-12 col-md-8">
             
            <form action="action_page.php">
          
              <label for="name">Name</label>
              <input type="text" id="name" name="fullname" placeholder="John Smith"/>
          
              <label for="email">Email</label>
              <input type="text" id="email" name="emailaddress" placeholder="example@gmail.com"/>
                
            
          
              <label for="message">Message</label>
              <textarea id="message" name="message" placeholder="" style={{height:"200px"}}></textarea>
          
              <input type="submit" value="Submit"/>
                
            </form>
            <div class="col-xs-12 col-md-2"></div>
            </div>

        </div>    
    </div>
        </>
    )
}


export default Contact;