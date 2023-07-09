import './App.scss';
import React from 'react';
import Info from '../Info/Info';
import Main from '../Main/Main';
import Rules from '../Rules/Rules';
import Popap from '../Popap/Popap';
import Options from '../Options/Options';
import Choice from '../Choice/Choice';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOrigin, setIsOrigin] = React.useState('');
  const [yourChoice, setYourChoice] = React.useState('');
  const [result, setResult] = React.useState(12);

  function handleOpenPopap() {
    setIsOpen(true);
  }

  function handleClosePopap() {
    setIsOpen(false);
  }

  function onClickFigure(figure) {
    setYourChoice(figure);
  }

  function changeResult(res) {
    setResult(res);
  }

  return(
    <div className="page">
      {isOrigin === '' ? <Options setIsOrigin={setIsOrigin} /> : isOrigin === 'original' ? 
      <>
        <Info result={result}/>
        {yourChoice === '' ?
          <Main onClickFigure={onClickFigure}/> :
          <Choice 
            yourChoice={yourChoice} 
            onClickFigure={onClickFigure} 
            changeResult={changeResult}
            result={result}
          />
        }
        <Rules handleOpenPopap={handleOpenPopap} />
        {isOpen ? 
          <Popap handleClosePopap={handleClosePopap} />: <></>
        }
      </>: <h1>in developing...</h1>} 
    </div>
  )
}

export default App;
