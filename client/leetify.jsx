import React from 'react';
import axios from 'axios';

const leetify = (props) => {

  return axios.post('/leetify', {
    data: props
  })
  .then(function (response) {
//console.log('axios', response.data)
    return(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default leetify;