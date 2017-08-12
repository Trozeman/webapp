import axios from 'axios';
import { push } from 'react-router-redux';

import sampleData from '../data/sample.js';

const API_PATH = '/api';


export function fetchDataAction(data) {
  return (dispatch) => {

    dispatch({
      type: 'FETCH_DATA',
      payload: data,
    })

    // setTimeout(()=>{
    //   dispatch({
    //     type: 'FETCH_DATA_SUCCESS',
    //     payload: sampleData,
    //   });
    //   dispatch(push('/list'));
    // }, 2000);

    axios.get(`${API_PATH}/getZakladInRadius`, {data})
      .then(res => {
        dispatch({
          type: 'FETCH_DATA_SUCCESS',
          payload: res.body.data,
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
