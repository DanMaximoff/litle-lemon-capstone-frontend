import { routes } from '../../utils/routes';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';



import './header.css';


interface HeaderProps {
    
}

export default function Header({  }: HeaderProps) {
    return (
        <header className='header-container'>
            <div>
                <Link to='/'>
                    <img className='logo' src={Logo} alt='Little Lemon logo' />
                </Link>
            </div>
            <nav>
                <ul className='navbar'>
                {routes.map((route) => {
                    const { href, title } = route;
                    return (
                    <li
                        key={route.title}
                        className=''
                    >
                        <a
                        href={href}
                        className=''
                        >
                        {title}
                        </a>
                    </li>
                    );
                })}
                </ul>
            </nav>
        </header>
        
    );
};