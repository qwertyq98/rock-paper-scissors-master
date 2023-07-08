import './Rules.scss';

function Rules({handleOpenPopap}) {

  return (
    <section className='rules'>
      <button className='rules__button' onClick={handleOpenPopap}>RULES</button>
    </section>
  )
}

export default Rules;