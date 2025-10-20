import { Link } from 'react-router-dom';
import quesabirria from '../../../assets/quesabirria.jpg';
import tacos from '../../../assets/various-tacos.jpg';
import friedRice from '../../../assets/friedRice.jpg';
import './meals.css';
import Card from '../../ui/card/Card';
import Button from '../../ui/button/Button';

const meals = [
  {
    name: 'Tacos',
    image: tacos,
    price: '$120.00',
    description: `Our Tacos are made with fresh ingredients, featuring your choice of 
      grilled chicken, beef, or vegetables, all wrapped in a warm tortilla.`,
  },
  {
    name: 'Quesabirria',
    image: quesabirria,
    price: '$135.00',
    description: `Our Quesabirria is a delicious blend of slow-cooked beef, 
      melted cheese, and savory consomé, all tucked inside a warm tortilla.`,
  },
  {
    name: 'Fried Rice',
    image: friedRice,
    price: '$85.00',
    description: `Our Fried Rice is a popular dish of cooked rice stir-fried in a wok or pan
     with other ingredients like eggs, vegetables, and meat, often seasoned with soy sauce and garlic.`,
  },
];

interface HighlightsProps {
    
}

export default function Highlights({  }: HighlightsProps) {
    return (
        <section className="container grid week-specials">
            <div className="week-specials-header">
                <h2>This week specials!</h2>
                <Link className="" to={"/order"}>
                    <Button color='orderButtonColor' text="Order online" onClick={() => {}} />
                </Link>
            </div>
            {meals.map((meal, index) => 
                <Card key={index} meal={meal} />
            )}
        </section>
    );
};