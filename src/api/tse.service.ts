import { Eleicao } from "../data/eleicao.model"

export class TSEService {

    readonly apiUrl = 'https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json'

    getAll = async ():Promise<Eleicao|null> => {
        const data = await fetch(this.apiUrl)
        if (data){
            return data.json()
        }
        return null
    }

    fetcher = async () => {
        return fetch(this.apiUrl).then(res => res.json())
    }
}