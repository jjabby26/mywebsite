import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Thanks for visiting my Website!
        </p>
        <p className='footer-subscription-text'>
          You can contact any time.
        </p>
        <div className='input-areas'>
          <form>
            {/* <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            /> */}
            
            <Button buttonStyle='btn--outline'>Drop me an Email<a href="mailto:jabeenjuveria26@gmail.com"></a></Button>
          
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Support</h2>
            <Link to='/'> </Link>
            <Link to='/'>Innovation</Link>
            <Link to='/'>Creativity</Link>
            <Link to='/'>vision</Link> 
            <Link to='/'></Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>Tester</Link>
            <Link to='/'>Developer</Link>
            <Link to='/'>All-Rounder</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          { <div class='footer-link-items'>
            <h2>Share</h2>
            <Link to='/'>Artistic</Link>
            <Link to='/'>Quick-witted</Link>
            <Link to='/'>Influencer</Link>
          </div> }
           <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>LinkedIN</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Twitter</Link>
          </div> 
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/Divein' className='social-logo'>
              J J
              <i class='fas fa-air-freshener' />
            </Link>
          </div>
          <small class='website-rights'></small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/Divein'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/Divein'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            
            <Link
             
              class='social-icon-link twitter'
              
              to='/Divein'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;