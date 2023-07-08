import './Main.scss';
import Figure from '../Figure/Figure';
import triangle from "../../images/bg-triangle.svg";

function Main({onClickFigure}) {
  return (
    <section className='main'>
      <div className='main__wrapper'>
        <img className='main__triangle' src={triangle} alt='triangle'/>
        <div className='main__bottoms'>
          <Figure type='paper' onClick={onClickFigure} />
          <Figure type='scissors' onClick={onClickFigure} />
          <Figure type='rock' onClick={onClickFigure} />
        </div>
      </div>
    </section>
  )
}

export default Main;