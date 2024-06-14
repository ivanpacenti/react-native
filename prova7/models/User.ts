export interface User {
    id: number; // Cambiato a number
    codiceOperatore: number | null; // Cambiato a number
    nome: string;
    cognome: string;
    anagraficaIdAppartenenza: number; // Cambiato a number
    username: string;
    password: string;
    amministratore: string;
    abilitato: string;
    avatar: string | null;
    refreshHome: string;
    refreshList: string;
    firma: string;
    esterno: string | null;
    anagraficaIdEsterno: number | null; // Cambiato a number
    anagraficaEsterna: number | null; // Cambiato a number
    email: string;
    oldId: number | null; // Cambiato a number
    reparti: string;
}


export function createUser(data: any): User {
    return {
        id: parseInt(data.id, 10),
        codiceOperatore: data.codice_operatore ? parseInt(data.codice_operatore, 10) : null,
        nome: data.nome,
        cognome: data.cognome,
        anagraficaIdAppartenenza: parseInt(data.anagrafica_id_appartenenza, 10),
        username: data.username,
        password: data.password,
        amministratore: data.amministratore,
        abilitato: data.abilitato,
        avatar: data.avatar,
        refreshHome: data.refresh_home,
        refreshList: data.refresh_list,
        firma: data.firma,
        esterno: data.esterno,
        anagraficaIdEsterno: data.anagrafica_id_esterno ? parseInt(data.anagrafica_id_esterno, 10) : null,
        anagraficaEsterna: data.anagrafica_esterna ? parseInt(data.anagrafica_esterna, 10) : null,
        email: data.email,
        oldId: data.old_id ? parseInt(data.old_id, 10) : null,
        reparti: data.reparti
    };
}
