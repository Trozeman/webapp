import axios from 'axios';
import { push } from 'react-router-redux';

import sampleData from '../data/sample.js';

const API_PATH = '/api/v1';


export function fetchDataAction(data) {
  return (dispatch) => {

    dispatch({
      type: 'FETCH_DATA',
      payload: data,
    })

    setTimeout(()=>{
      console.log('FETCH_DATA_SUCCESS')
      dispatch({
        type: 'FETCH_DATA_SUCCESS',
        payload: sampleData,
      });
      // dispatch(push('/list'));
    }, 1000);

    // axios.get(`${API_PATH}/someapi`, {data});
    //   .then(res => {
    //     dispatch({
    //       type: 'FETCH_DATA_SUCCESS',
    //       payload: res,
    //     })
    //     dispatch(push('/list'));
    //   })
    //   .catch(error => {
    //     dispatch({
    //       type: FETCH_DATA_FAILURE,
    //       error,
    //     })
    //   })

  }
}
