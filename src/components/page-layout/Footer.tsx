import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import logoWhiteImage from '../../assets/logo-white.png';

const contacts = [
  { icon: faLocationDot, info: '678 Pisa Ave, Chicago, IL 60611', },
  { icon: faPhone, info: '(312) 593-2744', },
  { icon: faEnvelope, info: 'customer@littlelemon.com', },
];

const socials = [
  { icon: faFacebook, name: 'facebook', },
  { icon: faTwitter, name: 'twitter', },
  { icon: faInstagram, name: 'instagram', },
  { icon: faYoutube, name: 'youtube', },
];

interface FooterProps {
    
}

export default function Footer({  }: FooterProps) {
    

    return (
        <footer className="site-footer">
            <div className="container grid">
                <img 
                className="site-footer-logo" 
                src={logoWhiteImage} 
                alt="Little Lemon" 
                />
                <nav className="site-footer-nav">
                <h4>Site Navigation</h4>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/menu'>Menu</a></li>
                    <li><a href='/reservation'>Reservation</a></li>
                    <li><a href='/order'>Online order</a></li>
                    <li><a href='/login'>Login</a></li>
                </ul>
                </nav>
                <div className="site-footer-contact">
                <h4>Contact us</h4>
                <address>
                {contacts.map((contact, index) => 
                    <p key={index}>
                    <FontAwesomeIcon icon={contact.icon} /> {contact.info}
                    </p>
                )}
                </address>
                </div>
                <div className="site-footer-social">
                <h4>Connect with us</h4>
                {socials.map((social, index) => 
                    <a 
                    key={index} 
                    href={`https://www.${social.name}.com`} 
                    target="_blank" 
                    rel="noreferrer" 
                    >
                    <FontAwesomeIcon icon={social.icon} size="lg" />
                    </a>
                )}
                </div>
            </div>
        </footer>
    );
};