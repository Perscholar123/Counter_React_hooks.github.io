// import react
import React from 'react';

// additional imports
import Counter from './Counter';
import FormComponent from './FormComponent';
import FormControlled from './FormControlled';
import FormUncontrolled from './FormUncontrolled';

// create component
const App = ()=>{
        return (
        <div style={{backgroundColor: 'beige'}}>
            {/* <h1>App Component</h1> */}
            {/* <h2>Counter Component</h2> */}
            <h3>COUNTERS</h3>
            <Counter />
            <br /><hr /><br />
            <h3>FORM COMPONENT(use ref)</h3><br />
            <FormComponent />
            <br /><hr /><br />
            <h3>FORM CONTROLLED COMPONENT(use State)</h3><br />
            <FormControlled />
            <br /><hr /><br />
            <h3>FORM UNCONTROLLED COMPONENT(use ref)</h3><br />
            <FormUncontrolled />
        </div>
    );
};

// export component
export default App;