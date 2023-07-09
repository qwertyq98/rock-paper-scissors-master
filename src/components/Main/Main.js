import './Main.scss';
import Figure from '../Figure/Figure';
import triangle from "../../images/bg-triangle.svg";

function Main({onClickFigure}) {
  return (
    <section className='main'>
      <div className='main__wrapper'>
        <img className='main__triangle' src={triangle} alt='triangle'/>
        <ul className='main__bottoms'>
          <li className='main__paper-wrapper'>
            <Figure type='paper' onClick={onClickFigure} />
          </li>
          <li className='main__scissors-wrapper'>
            <Figure type='scissors' onClick={onClickFigure} />
          </li>
          <li className='main__rock-wrapper'>
            <Figure type='rock' onClick={onClickFigure} />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Main;