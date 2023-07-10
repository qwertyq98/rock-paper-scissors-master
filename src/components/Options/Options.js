import './Options.scss';
import origin from "../../images/163801513916978301.jpg"
import bonus from "../../images/635x635_0xac120003_4350076711630424259.jpeg";

function Options({setIsOrigin}) {
  function handleClickOriginal() {
    setIsOrigin('original');
  }
  function handleClickBonus() {
    setIsOrigin('bonus');
  }

  return(
    <div className='options'>
      <h1 className='options__title'>SIMPLE OR HARD?</h1>
      <div className='options__wraper'>
        <h2 className='options__name'>PAPER / ROCK / SCISSORS</h2>
        <h2 className='options__name options_third'>PAPER / ROCK / SCISSORS / LIZARD / SPOCK</h2>
        <button className='options__button options_second' onClick={handleClickOriginal}>
          <img src={origin} className='options__img' alt='origin' />
        </button>
        <button className='options__button options_forth' options_first onClick={handleClickBonus}>
          <img src={bonus} className='options__img' alt='bonus' />
        </button>
      </div>
    </div>
  )
}

export default Options;