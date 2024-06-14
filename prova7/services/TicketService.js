export const getTickets = async (user) => {
    const url = "https://api-ivan-develop.ranocchiworldservices.com/mobileapp/webresolve/d3iz2AhuhhiJAs3sqEPFIaPxdLOMPxpQ";

    const params = {
        anagrafica_id_appartenenza: user.anagraficaIdAppartenenza !== null && user.anagraficaIdAppartenenza !== undefined ? user.anagraficaIdAppartenenza.toString() : "null",
        anagrafica_id_esterno: user.anagraficaIdEsterno !== null && user.anagraficaIdEsterno !== undefined ? user.anagraficaIdEsterno.toString() : "null",
        id: user.id !== null && user.id !== undefined ? user.id.toString() : "null",
        esterno: user.esterno !== null && user.esterno !== undefined ? user.esterno.toString() : "null",
    };


    try {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': 'XDEBUG_SESSION=PHPSTORM_IVAN',
            },
            body: JSON.stringify(params),
        });


        if (!response.ok) {
            console.error('Network response was not ok:');
            throw new Error(`Network response was not ok: ${response.status} `);
        }
        console.log(response.body)
        return   await response.json();



    } catch (error) {
        console.error('There was a problem with the ticket request:', error);
        throw error;
    }
};
