import useSWR from 'swr'
import { TSEService } from './api/tse.service'
import './App.css'
import { ProgressBar } from './components/ProgressBar'
import { Eleicao } from './data/eleicao.model'

function App() {
  const refreshInterval = 5 * 60 * 1000 /* 5 min*/

  const service = new TSEService();
  const {data, error} = useSWR<Eleicao|null>('eleicao',service.fetcher,{refreshInterval})

  if (error) return <div>falhou ao carregar</div>
  if (!data) return <div>carregando...</div>

  return (
    <div>
      <h1 className='text-3xl font-bold'>Resultado das eleições</h1>
      {data && (
        <div className='p-2'>
          <p>Ultima atualização: {new Date().toLocaleString()}</p>
          <div className='pb-4'>
            <ProgressBar label='Apuração' percentage={data.pst}/>
          </div>
          {
            data?.cand.map(candidato=>{
              return (
                <div className='w-full flex flex-col justify-between border-b p-2' key={candidato.seq}>
                  <div className='flex items-center justify-start gap-2'>
                    <span className='font-medium'>{candidato.nm}</span>
                    <span>|</span>
                    <span>{candidato.cc}</span>
                  </div>
                  <div className='pt-4'>
                    <ProgressBar label={`Votos: ${candidato.vap}`} percentage={candidato.pvap}/>
                  </div>
                </div>
              )
            })
          }
        </div>
      )}
    </div>
  )
}

export default App
