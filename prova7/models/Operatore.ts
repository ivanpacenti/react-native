export interface Operatore {
    id: string;
    codice_operatore: string | null;
    nome: string;
    cognome: string;
    username: string;
    password: string;
    amministratore: string;
    abilitato: string;
    avatar: string | null;
    refresh_home: string;
    refresh_list: string;
    firma: string;
    esterno: string;
    anagrafica_id_esterno: string | null;
    anagrafica_esterna: string | null;
    email: string;
    old_id: string | null;
}