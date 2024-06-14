import React, { createContext, useState, useEffect, useContext } from 'react';
import { getTickets as fetchTickets } from '../services/TicketService';
import { useUser } from './UserContext';

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
    const { user } = useUser();
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const downloadTickets = async () => {
        if (!user) return;
        setLoading(true);
        try {
            const result = await fetchTickets(user);
            setTickets(result);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            downloadTickets();
        }
    }, [user]);

    return (
        <TicketContext.Provider value={{ tickets, loading, error, downloadTickets }}>
            {children}
        </TicketContext.Provider>
    );
};

export const useTickets = () => {
    return useContext(TicketContext);
};
