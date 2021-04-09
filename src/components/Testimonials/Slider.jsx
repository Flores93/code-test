const Slider = ({ name, position, comment }) => {
  return (
    <div className="sliderCard">
      <div className="row">
        <div className="col">
          <h4>{name}</h4>
          <small className="text-muted">{position}</small>
        </div>

        <div className="col">
          <h4>{comment}</h4>
        </div>
      </div>
    </div>
  )
}

export default Slider
