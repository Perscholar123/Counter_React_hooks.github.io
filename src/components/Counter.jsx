// import react 
import React, {useState, useEffect} from 'react';

// additional imports

// create component
const Counter = ()=>{

    // lets declare new state inside of our component
    const [counter, setCounter] = useState(0);

    // second piece of state
    const [evenCounter, setEvenCounter] = useState(0);

    // lets create an effect to render our component everytime our evencounter state changes
    useEffect(()=>{
        
        //lets log something inside our component
    console.log("I am just a random log");
    },[evenCounter]);
    
    //lets log something inside our component
    // console.log("I am just a random log");

    // lets create a function to add one to our counter
    const handleAddOne = ()=>{
        if(counter % 2 === 0)
        {
            setEvenCounter(evenCounter + 1);
        }
        // if counter is not even update counter
        setCounter(counter + 1); //0 + 1 ==1 => setCounter(1)
    };
    return (
        <div>
            {/* <h1>Counter</h1> */}
            <h3>Counter: {" "} {counter}</h3>
            <h3>EvenCounter: {" "}{evenCounter}</h3>
            <button onClick={handleAddOne}>Click Me to Add One</button>
        </div>
    );
};


// useEffect
// 1. By passing nothing as second parameter of useEffect
/*
  useEffect(() => {
    Do something here
  })
*/
/*
  useEffect(() => {
    Do something else here
  })
*/
/*
  useEffect(() => {
    Do something here
  })
*/
// 2. By passing an empty array as a second parameter
/*
  useEffect(() => {
    Do something here
  }, [])
*/
// 3. By passing an array with data inside of it
/*
  useEffect(() => {
    Do something here
  }, [data])
*/




// export component
export default Counter;