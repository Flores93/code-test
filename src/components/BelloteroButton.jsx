const BelloteroButton = ({ label, ...button }) => {
  return (
    <button className={`${button.className} belloteroButton`} {...button}>
      {label}
    </button>
  )
}

export default BelloteroButton
