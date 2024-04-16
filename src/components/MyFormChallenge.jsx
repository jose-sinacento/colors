import { useEffect, useState, useRef } from "react";
import BoxColor from './BoxColor';

function MyForm() {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

  useEffect(() => {
    inputRef.current.focus()
  }, []);

  return (
    <>
      <input type="text"
        id="boxColor"
        placeholder="Choose a color"
        className="inputColor"
        onChange={() => setValue(inputRef.current.value)}
        value={value}
        ref={inputRef}
      />
      <div>{value}</div>

      <div className="container">
        {colors.map((color, index) =>
          <BoxColor key={index} color={color} value={value} />
        )}
      </div>
    </>
  );
}

export default MyForm;