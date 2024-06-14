import { createUser } from '../models/User';

export const login = async (username, password, codiceAzienda) => {
    const url = "https://api-ivan-develop.ranocchiworldservices.com/mobileapp/webresolve/d3iz2AhuhhiJAs3sqEPFIaPxdLOMPxpQ";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
                chiave: codiceAzienda
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();

        if (result['errore']==null) {
            const user = createUser(result['0'][0]);
            return { user };
        } else {
            return { error: result['errore'] };
        }

    } catch (error) {
        console.error('There was a problem with the login request:', error);
        throw error;
    }
};
