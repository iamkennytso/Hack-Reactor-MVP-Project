import React from 'react';

const InputBox = (props) => (
  <div>
    <h3> Enter plain text below:  </h3>
    <form onSubmit = { (event)=>{
      event.preventDefault();
      let input = document.getElementById("plainField").value
//console.log('input form submitted', input);
      props.text.plain = input;
      props.translate(input);
      }}>
    <input  type="text" id="plainField" defaultValue = 'leet' ></input>  
    <input  type="submit" id="button" value="Trans|_@73!"></input>
    </form>
  </div>
)

export default InputBox;