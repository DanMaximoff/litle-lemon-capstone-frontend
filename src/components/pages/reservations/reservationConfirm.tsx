import { FaCheckCircle } from 'react-icons/fa';

import './reservationConfirm.css';

interface ReservationConfirmProps {
    
}

export default function ReservationConfirm({  }: ReservationConfirmProps) {
    return (
        <main className='container confirmation-page'>
            <article>
                <h1><FaCheckCircle
                    aria-hidden='true'
                    className='icon'
                /> Confirmed Reservation</h1>
                <p>Thank you for booking with us.</p>
                <p>You will receive an email with all the details.</p>
            </article>
        </main>
    );
};