
import { useContext, createContext, useReducer, useMemo } from 'react';

const initialState = {
    selectedDate: null,
    selectedTime: null,
};

export const ReservationContext = createContext();

export function useReservation() {
    return useContext(ReservationContext);
}

function reservationReducer(state, action) {
    switch (action.type) {
        case 'SELECT_DATE':
            console.log('action.payload:', action.payload);
            return { ...state, selectedDate: action.payload };
        case 'SELECT_TIME':
            console.log('action.payload:', action.payload);
            return { ...state, selectedTime: action.payload };
        default:
            return state;
    }
}

interface ReservationProviderProps {
    
}

export default function ReservationProvider({ children }: ReservationProviderProps) {
    const [state, dispatch] = useReducer(reservationReducer, initialState);

    
    const contextValue = useMemo(() => ({ state, dispatch }), [state]);

    return (
        <ReservationContext.Provider value={contextValue}>
            {children}
        </ReservationContext.Provider>
    );
};