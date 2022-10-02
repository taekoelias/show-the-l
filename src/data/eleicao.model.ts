import { Candidato } from "./candidato.model";

export interface Eleicao {
    ele: string,
    s : string, 
    st : string, 
    pst : string, 
    snt : string, 
    psnt : string, 
    si : string, 
    psi : string, 
    sni : string, 
    psni : string,
    cand: Candidato[]
}