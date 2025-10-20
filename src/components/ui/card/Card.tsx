import { Link } from 'react-router-dom';
import './card.css';

interface CardProps {
    meal: {
        name: string;
        image: string;
        price: string;
        description: string;
    };
}

export default function Card({ meal }: CardProps) {
    return (
        <article className="meal-card">
            <div className="meal-card-image">
                <img src={meal.image} alt={meal.name} />
            </div>
            <div className="meal-card-header">
                <h3>{meal.name}</h3>
                <span>{meal.price}</span>
            </div>
            <div className="meal-card-body-footer">
                <p>{meal.description}</p>
                <Link to={"/order"}>
                    Order Now
                </Link>
            </div>
        </article>
    );
};