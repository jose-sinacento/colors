import { useEffect, useState, useRef } from "react";

function MyForm() {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  }, []);

  return (
    <>
      <input type="text"
        id="boxColor"
        placeholder="Choose a color"
        className="boxColor"
        onChange={() => setValue(inputRef.current.value)}
        value={value}
        ref={inputRef}
      />
      <div>{value}</div>
    </>
  );
}

export default MyForm;