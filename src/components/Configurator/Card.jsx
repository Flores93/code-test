const Card = ({ title, description }) => {
  const arraify = title.split(' ')
  var line1 = arraify.filter((arr, index) => index <= 2)
  var line2 = arraify.filter((arr, index) => index === 3)
  return (
    <div className="container">
      <div className="confTitles">
        <h2>
          <b>{line1.join(' ')}</b>
        </h2>
      </div>
      <div className="confTitles mb-5">
        <h2>
          <b>{line2}</b>
        </h2>
      </div>
      <h5 className="configDescription">{description}</h5>
    </div>
  )
}

export default Card
