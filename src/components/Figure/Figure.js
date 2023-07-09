function Figure({type, onClick, size, winer}) {
 
  return (
    <div className={`main__bottom_${winer}`}>
      <button 
        className={`main__bottom main__bottom_${type} main__bottom_${type}${size}`} 
        onClick={() => onClick && onClick(type)} 
      />
    </div>
  )
}

export default Figure;