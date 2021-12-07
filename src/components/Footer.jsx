import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer(props) {
    

    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals.
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe any time.
                </p>
                <div className="input-areas">
                    <form action="">
                        <input type="email" name="email" placeholder="Your email..." className="footer-input" />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/signUp'>How It works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/signUp'>How It works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>

                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/signUp'>How It works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/signUp'>How It works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>

                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                        <small className="website-rights">TRVL &copy; 2021</small>
                        <div className="social-icons">
                            <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="facebook">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link className="social-icon-link instagram" to="/" target="_blank" aria-label="instagram">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="twitter">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link className="social-icon-link github" to="/" target="_blank" aria-label="github">
                                <i className="fab fa-github"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}