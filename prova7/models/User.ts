export interface User {
    id: string;
    codiceOperatore: string | null;
    nome: string;
    cognome: string;
    anagraficaIdAppartenenza: string;
    username: string;
    password: string;
    amministratore: string;
    abilitato: string;
    avatar: string | null;
    refreshHome: string;
    refreshList: string;
    firma: string;
    esterno: string | null;
    anagraficaIdEsterno: string | null;
    anagraficaEsterna: string | null;
    email: string;
    oldId: string | null;
    reparti: string;
}

export interface ApiResponse {
    errore: any;
    [key: string]: User[] | any;
}

export function createUser(data: any): User {
    return {
        id: data.id,
        codiceOperatore: data.codice_operatore,
        nome: data.nome,
        cognome: data.cognome,
        anagraficaIdAppartenenza: data.anagrafica_id_appartenenza,
        username: data.username,
        password: data.password,
        amministratore: data.amministratore,
        abilitato: data.abilitato,
        avatar: data.avatar,
        refreshHome: data.refresh_home,
        refreshList: data.refresh_list,
        firma: data.firma,
        esterno: data.esterno,
        anagraficaIdEsterno: data.anagrafica_id_esterno,
        anagraficaEsterna: data.anagrafica_esterna,
        email: data.email,
        oldId: data.old_id,
        reparti: data.reparti
    };
}
