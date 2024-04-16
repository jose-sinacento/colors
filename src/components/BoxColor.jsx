
function BoxColor({ color, value }) {

  return (
    <>
      <div className={`box ${color} ${color === value ? 'active' : ''}`}>
        {color === value ? <p>Yes, I'm {value} color</p> : <p>I'm not a {value} color</p>}
      </div>
    </>
  );
}

export default BoxColor;