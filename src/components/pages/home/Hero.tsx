import { Link } from 'react-router-dom';

import HeroImage from '../../../assets/food-presentation.jpg';
import Button from '../../ui/button/Button';


interface HeroProps {
    
}

export default function Hero({  }: HeroProps) {

    const handleClick = () => {
        console.log('Button was clicked!');
    };

    return (
        <section className='hero-section'>
            <div className='col-1'>
                <h2 className='hero-title'>Little Lemon</h2>
                <p className='hero-location'>CDMX</p>
                <p className='hero-descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sapiente illum aliquam nisi perferendis atque earum voluptatum ipsa illo minus aspernatur natus quos fuga assumenda, aut alias nulla cum quo.</p>
                <Link to='/reservations'>
                    <Button color='ctaButtonColor' text='Reservations' onClick={handleClick} />
                </Link>
            </div>
            <div className='col-2'>
                <img className='hero-image' src={HeroImage} alt='restaurant food' />
            </div>
        </section>
    );
};