import React from 'react';

const InputBox = (props) => (
  <div>
    <h3> Enter plain text below:  </h3>
    <form onSubmit = { (event)=>{
      console.log(props.text.plain)
      event.preventDefault();
      let input = document.getElementById("plainField").value
      console.log('form submitted', input);
      }}>
    <input  type="text" id="plainField" defaultValue = {props.text.plain} ></input>  
    <input  type="submit" id="button" value="Trans|_@73!"></input>

    </form>
  </div>
)

export default InputBox;