import React from "react";
import ReactDOM from "react-dom";



const App = ()=> {
  const buttonText = 'hello baby'
  return (
    <div>
      <label for="name" className="label"> Enter E-mail</label>
      <input id="name" type="text"/>
      <button style={{backgroundColor: 'green', color:'white'}}>{ buttonText}</button>
    </div>)
}

ReactDOM.render(<App />, document.getElementById("root")); 