import {
  faStar,
  faStarHalfStroke
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './opinionCard.css';

interface OpinionCardProps {
    customer: {
        fullName: string;
        image: string;
        rating: number[];
        says: string;
    };
}

export default function OpinionCard({ customer }: OpinionCardProps) {
    
    const ratingLevels = { '0.5': faStarHalfStroke, '1': faStar, };

    return (
        <article className="testimonial-card">
            <img src={customer.image} alt={customer.fullName} />
            <h4>{customer.fullName}</h4>
            <span>
                {customer.rating.map((ratingPoint, index) => 
                    <FontAwesomeIcon 
                        key={index} 
                        icon={ratingLevels[ratingPoint.toString() as keyof typeof ratingLevels]} 
                        size="xs" 
                    />
                )}
            </span>
            <blockquote><p>"{customer.says}"</p></blockquote>
        </article>
    );
};