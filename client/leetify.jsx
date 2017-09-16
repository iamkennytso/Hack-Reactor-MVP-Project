import React from 'react';
import $ from 'jquery';
import axios from 'axios';

const leetify = (props) => {
  let url = '127.0.0.1:1203/leetify';
  let success = console.log('ajax worked')

  return axios.post('/leetify', {
    data: props
  })
  .then(function (response) {
    console.log('axios', response.data)
    return(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default leetify;