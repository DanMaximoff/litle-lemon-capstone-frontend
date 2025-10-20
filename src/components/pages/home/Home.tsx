
import Hero from './Hero';
import Highlights from './Highlights';
import Opinions from './Opinions';
import Overview from './Overview';

import './home.css';

interface HomeProps {
    
}

export default function Home({  }: HomeProps) {
    return (
        <main className="App">
            <article>
                <Hero />
                <Highlights />
                <Opinions />
                <Overview />
            </article>
        </main>
    );
};