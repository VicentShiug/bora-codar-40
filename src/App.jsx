import './App.css'
import ArrowRight from './components/ArrowRigth'
function App () {

  return (
    <>
      <div className='container'>
          <div className='content'>
            <span className='span-primary'>NEWSLETTER EXCLUSIVA</span>
            <h1 className='title-content'>Workspace inspiration</h1>
            <p className='text-content'>Assine nossa newsletter e transforme seu espaço <br /> de trabalho em um oásis de produtividade!</p>
            <div className='submit-div'>
              <input type="text" name="email" id="email" placeholder='Digite seu e-mail' className='input-email' />
              <button className='button-content' >QUERO RECEBER <ArrowRight /></button>
            </div>
        </div>
        <div className='info-container'>
          <div className='info'>
            <img src="../src/assets/rocket.svg" alt="" />
            <span className='span-info'>As últimas inovações</span>
            <p className='text-info'>Mantenha-se atualizado com as mais recentes tecnologias e acessórios que vão revolucionar a forma como você trabalha.</p>
          </div>

          <div className='info'>
            <img src="../src/assets/ray.svg" alt="" />
            <span className='span-info'>Reviews detalhadas</span>
            <p className='text-info'>Analisamos os produtos mais populares do mercado para que você possa fazer as escolhas certas.</p>
          </div>

          <div className='info'>
            <img src="../src/assets/tool.svg" alt="" />
            <span className='span-info'>Dicas de organização</span>
            <p className='text-info'>Aumente sua eficiência e proteja sua saúde com conselhos especializados sobre ergonomia e organização.</p>
          </div>

          <div className='info'>
            <img src="../src/assets/gift.svg" alt="" />
            <span className='span-info'>Ofertas exclusivas</span>
            <p className='text-info'>Como membro da nossa comunidade, você terá acesso a descontos e promoções especiais em produtos selecionados.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
