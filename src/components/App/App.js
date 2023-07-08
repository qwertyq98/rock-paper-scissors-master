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

  function handleOpenPopap() {
    setIsOpen(true);
  }

  function handleClosePopap() {
    setIsOpen(false);
  }

  function onClickFigure(figure) {
    setYourChoice(figure);
  }

  return(
    <div className="page">
      {isOrigin === '' ? <Options setIsOrigin={setIsOrigin} /> : isOrigin === 'original' ? 
      <>
        <Info />
        {yourChoice === '' ?
          <Main onClickFigure={onClickFigure}/> :
          <Choice yourChoice={yourChoice} />
        }
        <Rules handleOpenPopap={handleOpenPopap} />
        {isOpen ? 
          <Popap handleClosePopap={handleClosePopap} />: <></>
        }
      </>: <></>} 
    </div>
  )
}

export default App;
