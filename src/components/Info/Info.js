import './Info.scss';
import Name from '../Name/Name';
import Score from '../Score/Score';

//import photo from "../../images/photo.png";

function Info() {
  return (
    <section className='info'>
      <div className='info__wrapper'>
        <Name/>
        <Score />
      </div>
    </section>
  )
}

export default Info;