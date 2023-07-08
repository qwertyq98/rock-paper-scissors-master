import './Popap.scss';
import rules from "../../images/image-rules.svg";


function Popap({handleClosePopap}) {

  return(
    <div className='popap'>
      <div className='popap__wraper'>
        <div className='popap__wraper_text'>
          <h2 className='popap__text'>RULES</h2>
          <button className='popap__button' onClick={handleClosePopap} />
        </div>
        <img src={rules} className='popap__img' alt='rules' />
      </div>
    </div>
  )
}

export default Popap;