// 1. IMPORT REACT
import React, { useRef } from "react";
// 2. ADDITIONAL IMPORTS
// 3. CREATE COMPONENT
const FormComponent = () => {
  // Create our first reference
  const inputRef = useRef();
  // Create reference to the pTag
  const pTagRef = useRef();
  // ADD HANDLE FUNCTION
  const handleClick = () => {
    console.log(inputRef.current.value);
    console.log(pTagRef.current.textContent);
  };
  return (
    <div>
      <input type="text" ref={inputRef} /> <p ref={pTagRef}>This is a pTag</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
// 4. EXPORT COMPONENT
export default FormComponent;