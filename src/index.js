import React from "react";
import ReactDOM from "react-dom";



const App = ()=> {
  const buttonText = {text:'sub'}
  return (
    <div>
      <label htmlFor="name" className="label"> Enter E-mail</label>
      <input id="name" type="text"/>
      <button style={{backgroundColor: 'green', color:'white'}}>{ buttonText.text}</button>
    </div>)
}

ReactDOM.render(<App />, document.getElementById("root")); 