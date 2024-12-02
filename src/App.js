import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./App.css";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGeQzk3Ndp7veRZQp2_BkKdQM_rrWsDZw",
  authDomain: "login-e5b28.firebaseapp.com",
  projectId: "login-e5b28",
  storageBucket: "login-e5b28.appspot.com",
  messagingSenderId: "887504715975",
  appId: "1:887504715975:web:48a12e570939334e4cfee2",
  measurementId: "G-9MSPFS1VQ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const toggleDisplay = () => {
    setIsLoginVisible((prev) => !prev);
  };

  const userRegister = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name && email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert(`Welcome ${name}! Your account has been created.`);
          toggleDisplay();
        })
        .catch((error) => {
          alert(`Error: ${error.message}`);
        });
    } else {
      alert("Please fill in all fields to sign up.");
    }
  };

  const userLogin = () => {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Login successful!");
          setIsLoginVisible(false);
        })
        .catch((error) => {
          alert(`Error: ${error.message}`);
        });
    } else {
      alert("Please fill in all fields to log in.");
    }
  };
  return (
    <div>
      {/* Navbar */}
      <nav className="nav nav_top">
        <div className="logo">
          <a href="#home">
            <img src="/assets/logo.png" width="250" alt="" />
          </a>
        </div>
        <div className="nav_side">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT US</a>
          <a href="https://rzp.io/l/zLEJysVsC">DONATE</a>
          <a href="#contact">CONTACT</a>
          <button onClick={() => setIsLoginVisible(true)} className="login-button">
            LOGIN
          </button>
        </div>
      </nav>

      {/* Login/Signup Modal */}
      {isLoginVisible && (
        <div className="modal">
          <div className="container" id="content01" style={{ display: isLoginVisible && !isLoginVisible ? "block" : "none" }}>
            <div className="img-slider">
              <h2>Welcome</h2>
              <p>We are a community together helping thousands of people out there who are struggling.</p>
              <img src="./Images/placeholder.png" alt="Welcome Image" />
            </div>
            <div className="content">
              <h2>Get Started</h2>
              <p>
                Already have an account? <a href="#" onClick={toggleDisplay}>Login</a>
              </p>
              <form id="signupForm">
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" id="name" placeholder="Enter your name" autoComplete="off" />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" id="email" placeholder="Enter your email" autoComplete="off" />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" id="password" placeholder="Enter your password" />
                <br />
                <button type="button" onClick={userRegister} id="btn">
                  Sign Up
                </button>
              </form>
            </div>
          </div>

          <div className="container" id="content02" style={{ display: isLoginVisible ? "block" : "none" }}>
            <div className="img-slider">
              <h2>Welcome Back</h2>
              <p>We are a community together helping thousands of people out there who are struggling.</p>
              <img src="./Images/placeholder.png" alt="Login Image" />
            </div>
            <div className="content">
              <h2>Log In</h2>
              <p>
                Don't have an account? <a href="#" onClick={toggleDisplay}>Sign Up</a>
              </p>
              <form id="loginForm">
                <label htmlFor="loginEmail">Email</label>
                <br />
                <input type="email" id="loginEmail" placeholder="Enter your email" autoComplete="off" />
                <br />
                <label htmlFor="loginPassword">Password</label>
                <br />
                <input type="password" id="loginPassword" placeholder="Enter your password" />
                <br />
                <button type="button" onClick={userLogin} id="btn1">
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Rest of the content */}
      <div id="home" className="home_container" style={{ paddingTop: "100px" }}>
        <h1>Welcome to DONATION@GLAU</h1>
        <p>Your support helps needy children worldwide.</p>
        <div className="side_btn">
          <a href="#donate">JOIN US TODAY</a>
        </div>
      </div>

      {/* Add your remaining sections like ABOUT US, DONATE, etc., here */}

      {/* --------------------------------------------ABOUT US----------------------------------------------------- */}
      <div id="about" className="main_about">
        <div className="main_content_about">
          <h2>What We Do?</h2>
        </div>
      </div>

      <div className="product product_about">
        <h2>HOW WE HELP</h2>
        <div className="product_container">
          <div className="item">
            <div className="item_img">
              <img src="/assets/pro1.svg" alt="Pure Food & Water" />
            </div>
            <div className="item_content">
              <h3>Pure Food & Water</h3>
              <p>
                We supply needy children with basic necessities like pure food
                and water.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item_img">
              <img src="/assets/pro2.svg" alt="Health and Medicine" />
            </div>
            <div className="item_content">
              <h3>Health and Medicine</h3>
              <p>
                Health being the foremost priority, we aim at giving children
                every medical support.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item_img">
              <img src="/assets/pro3.svg" alt="Education" />
            </div>
            <div className="item_content">
              <h3>Education</h3>
              <p>
                We provide education facilities to children all over the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------DONATE----------------------------------------------------- */}
      <div id="donate" className="donate">
        <div className="donate_container">
          <h1>Let's Make a Change Together!</h1>
          <p>
            The greatest use of a life is to spend it on something that will
            outlast it.
          </p>
          <p className="second">
            Any help or donation, no matter how big or small, will be
            whole-heartedly and deeply appreciated.
          </p>
          <div className="side_btn">
            <a href="https://rzp.io/l/zLEJysVsC">DONATE NOW</a>
          </div>
        </div>
      </div>

      {/* --------------------------------------------CONTACT----------------------------------------------------- */}
      <div
        id="contact"
        className="contact_container"
        style={{ paddingTop: "100px" }}
      >
        <h2>CONTACT US</h2>

        <div className="g_map">
          <div
            style={{
              maxWidth: "100%",
              listStyle: "none",
              transition: "none",
              overflow: "hidden",
              width: "100%",
              height: "600px",
            }}
          >
            <div
              id="canvas-for-googlemap"
              style={{ height: "100%", width: "100%", maxWidth: "100%" }}
            >
              <iframe
                style={{ height: "100%", width: "100%", border: "0" }}
                frameborder="0"
                src="https://www.google.com/maps/embed/v1/place?q=mathura&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              ></iframe>
            </div>
            <a
              class="code-for-google-map"
              href="https://www.bootstrapskins.com/themes"
              id="get-data-for-embed-map"
            >
            </a>
          </div>
        </div>
        <div className="contact_content">
          <p>
            We want to hear from you! Drop us a note and someone from our team
            will get back to you. Looking to volunteer or support us in any
            other way? Call +917505539215
          </p>
          <p>
            <strong>Call: +91 7505539215</strong>
          </p>
          <p>
            <strong>
              Mail:{" "}
              <a href="mailto:support.charityjet@gmail.com">
                DONATION_GLAU@gmail.com
              </a>
            </strong>
          </p>
        </div>
      </div>

      {/* --------------------------------------------THANK YOU----------------------------------------------------- */}
      <div id="thankyou" className="thankyou">
        <div className="thankyou_container">
          <h1>THANK YOU!</h1>
          <p>
            The greatest use of a life is to spend it on something that will
            outlast it.
          </p>
          <p className="second">
            Your contribution for the needy children worldwide is priceless.
            Thank you for bringing a change!
          </p>
          <div className="side_btn">
            <a href="#home">BACK TO HOME</a>
          </div>
        </div>
      </div>

      {/* --------------------------------------------FOOTER----------------------------------------------------- */}
      <footer>
        <div className="pages">
          <a href="#home">
            <img
              className="aimg"
              src="/assets/logo.png"
              width="250"
              alt="Charity Jet Logo"
            />
          </a>
          <p>
            DONATION@GLAU cares for needy children by empowering their
            caregivers to do their best work, with compassion, grace, integrity,
            and excellence. Our end goal is to support children worldwide and
            see every child reach the potential that God has for them.
          </p>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="#" rel="noreferrer">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="#" rel="noreferrer">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>

        <div className="doc">
          <h3>Navigation</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="https://rzp.io/l/zLEJysVsC">Donate</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="contact">
          <h3>Contact Us</h3>
          <p>GLAU MATHURA</p>
          <a href="tel:+910000000000">7505539215</a>
          <a href="mailto:support.charityjet@gmail.com">
            DONATION_GLAU@gmail.com
          </a>
        </div>

        <div className="social">
          <h3>Support</h3>
          <p>Help us shape a better future for children all over the world.</p>
          <div className="side_btn">
            <a href="#donate">JOIN US TODAY</a>
          </div>
        </div>

        <hr />
        <p>Copyright &copy; 2024 DONATION_GLAU. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
