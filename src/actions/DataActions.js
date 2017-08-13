import axios from 'axios';
import { push } from 'react-router-redux';

import sampleData from '../data/sample.js';

const API_PATH = '/api';


export function fetchDataAction(data) {
  return (dispatch) => {

    console.log('DDDAAAA', data);

    dispatch({
      type: 'FETCH_DATA',
      payload: data,
    })

    // setTimeout(()=>{
    //   console.log('FETCH_DATA_SUCCESS')
    //   dispatch({
    //     type: 'FETCH_DATA_SUCCESS',
    //     payload: sampleData,
    //   });
    //   // dispatch(push('/list'));
    // }, 1000);


    axios.post(`${API_PATH}/getZakladInRadius`, {data})
      .then(res => {
        console.log('res', res);
        dispatch({
          type: 'FETCH_DATA_SUCCESS',
          payload: res.data,
        })
      })
      .catch(error => {
        dispatch({
          type: 'FETCH_DATA_FAILURE',
          error,
        })
      })

  }
}
