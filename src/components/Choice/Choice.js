import './Choice.scss';
import Figure from '../Figure/Figure';

function Choice({yourChoice}) {
  return (
    <section className='choice'>
      <div className='choice__wrapper'>
        <h3 className='choice__text'>YOU PICKED</h3>
        <div></div>
        <h3 className='choice__text'>THE HOUSE PICKED</h3>
        <Figure type={`${yourChoice}`} size={'_l'}/>
        <div className='choice__result-wrapper'>
          <p className='choice__result-text'>YOU LOSE</p>
          <button className='choice__result-button'>PLAY AGAIN</button>
        </div>
        <Figure type={`${yourChoice}`} size={'_l'}/>
      </div>
    </section>
  )
}

export default Choice;