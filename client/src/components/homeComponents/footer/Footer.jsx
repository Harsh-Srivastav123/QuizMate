import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
        <footer class="section-p1">
            <div class="col">
                <img class="logo" src="" alt=""/>
                <h4>Contact</h4>
                <p><strong>Address:</strong>HBTU KANPUR</p>
                
            </div>

            <div class="col">
                <h4>About</h4>
                <a href="#">About Us</a>
                <a href="#">discuss</a>
                <a href="#">Explore</a>
                <a href="#">Terms $ Conditions</a>
                <a href="#">Contact Us</a>
            </div>

            <div class="col">
                <h4>My Profile</h4>
                <a href="#">Sign In</a>
                <a href="">View Result</a>
                <a href="#">Help</a>
            </div>

            <div class="col install">
                <h4>Install App</h4>
                <p>From App Store or Google Play</p>
                <div class="row">
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
            </div>

            <div class="copyright">
                <p>Made by QuizMate2024-All Rights Reserved</p>
            </div>

        </footer>
    </div>
    
  )
}

export default Footer
