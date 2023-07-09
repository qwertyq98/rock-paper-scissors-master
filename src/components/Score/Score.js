import './Score.scss';

function Score({result}) {
  return (
    <div className='score__wrapper'>
      <div className='score__text'>SCORE</div>
      <div className='score__value'>{result}</div>
    </div>
  )
}

export default Score;