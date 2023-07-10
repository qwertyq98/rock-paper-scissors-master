import React from 'react';
import { useEffect } from 'react';
import './Choice.scss';
import Figure from '../Figure/Figure';
const figures = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function Choice({yourChoice, onClickFigure, changeResult, result}) {
  const [originBot, setOriginBot] = React.useState('');
  const [winer, setWiner] = React.useState('');
  const [resultText, setResultText] = React.useState('');

  useEffect(() => {
    setWiner('');
    setTimeout(() => {
      setOriginBot(botChoice(0, 2));
    }, 1500);
  }, [])

  useEffect(() => {
    originBot && setTimeout(updateResult, 1500);
  }, [originBot])

  function botChoice(min, max) {
    let rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    return figures[rand];
  }

  function playAgain() {
    onClickFigure('');
  }

  function updateResult() {
    const youChoiceNumber = figures.indexOf(yourChoice);
    const botChoiceNumber = figures.indexOf(originBot);

    if (yourChoice === originBot) {
      setResultText('DRAW');
    } else if (youChoiceNumber - botChoiceNumber === 1 || youChoiceNumber - botChoiceNumber === -2) {
      changeResult(result + 1);
      setResultText('YOU WIN');
      setWiner('winer');
    } else {
      changeResult(result - 1);
      setResultText('YOU LOSE');
      setWiner('winer');
    }
  }

  return (
    <section className='choice'>
      <div className='choice__wrapper'>
        <h3 className='choice__text choice_first'>YOU PICKED</h3>
        <div className='choice__none'></div>
        <h3 className='choice__text choice_second'>THE HOUSE PICKED</h3>
        <Figure type={yourChoice} size={'_l choice_third'} winer={resultText === 'YOU WIN' ?  winer : ''} />
        { resultText === '' ? <div className='choice__none'></div> :
          <div className='choice__result-wrapper choice_forth'>
            <p className='choice__result-text'>{resultText}</p>
            <button className='choice__result-button' onClick={playAgain}>PLAY AGAIN</button>
          </div>
        }
        <Figure type={originBot} size={'_l choice_fifth'} winer={resultText === 'YOU LOSE' ? winer : ''}/>
      </div>
    </section>
  )
}

export default Choice;