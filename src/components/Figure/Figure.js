function Figure({type, onClick, size}) {
 
  return (
    <button 
      className={`main__bottom main__bottom_${type} main__bottom_${type}${size}`} 
      onClick={() => onClick && onClick(type)} 
    />
  )
}

export default Figure;