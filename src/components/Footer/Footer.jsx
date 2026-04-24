import React from 'react'
import '../../Assets/Footer.css';

//This is the main App Footer.
//Stateless components do not need access to any state or functionality. 
//Stateless components do not call render() {.
const Footer = () => {
  return (
    <div className="App">
        <footer class="footer is-primary">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p>
              My React App UIUX portfolio demo by software engineer, Christopher
              Peterson.
              <br /><b>Email:</b> codingcowboy2026@gmail.com
              <br /><b>Phone:</b> (517) 719-0029
              <br /><a href="">Here's my MERN Demo. (Todo)</a><br />
              <a href="">Here's my Vue Demo. (Todo)</a><br /><a
                class="icon"
                href="https://github.com/RocketDelivery2/"
                ><i class="fab fa-github"></i
              ></a>
              <a
                class="icon"
                href="https://www.linkedin.com/in/christopher-peterson-2ba8243b6/"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </p>
          </div>
          <div class="column has-text-right"></div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;