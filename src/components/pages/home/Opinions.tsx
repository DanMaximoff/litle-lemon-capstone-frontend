import customer1 from '../../../assets/customer1.jpg';
import customer2 from '../../../assets/customer2.jpg';
import customer3 from '../../../assets/customer3.jpg';
import customer4 from '../../../assets/customer4.jpg';
import './opinions.css';
import OpinionCard from '../../ui/card/OpinionCard';

const customers = [
  {
    fullName: 'Anastasia Weaver',
    image: customer1,
    rating: [1, 1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet eros quis nunc fringilla, et aliquam nisi rutrum. Etiam et turpis id sapien sagittis pulvinar vitae id ligula. Nulla facilisi.`,
  },
  {
    fullName: 'Daniel Foster',
    image: customer2,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet sem eget tincidunt suscipit. Curabitur laoreet eros quis nunc fringilla, et aliquam nisi rutrum.`,
  },
  {
    fullName: 'Billy Adams',
    image: customer3,
    rating: [1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet sem eget tincidunt suscipit. Curabitur laoreet eros quis nunc fringilla, et aliquam nisi rutrum. Etiam et turpis id sapien sagittis pulvinar vitae id ligula. Nulla facilisi.`,
  },
  {
    fullName: 'Sharon Webb',
    image: customer4,
    rating: [1, 1, 1, 1],
    says: `Aenean aliquet sem eget tincidunt suscipit. Curabitur laoreet eros quis nunc fringilla, et aliquam nisi rutrum. Etiam et turpis id sapien sagittis pulvinar vitae id ligula. Nulla facilisi.`,
  },
];

interface OpinionsProps {
    
}

export default function Opinions({  }: OpinionsProps) {
    return (
        <section className="testimonials">
            <div className="container grid">
                <h2>Our food talks through our customers!</h2>
                {customers.map((customer, index) => 
                    <OpinionCard key={index} customer={customer} />
                )}
            </div>
        </section>
    );
};