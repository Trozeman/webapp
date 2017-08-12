import axios from 'axios';

import sampleData from '../data/sample.js';

const API_PATH = '/api/v1';


export function fetchDataAction(data) {
  return (dispatch) => {

    dispatch({
      type: 'FETCH_DATA',
      payload: data,
    })

    setTimeout(()=>{
      dispatch({
        type: 'FETCH_DATA_SUCCESS',
        payload: sampleData,
      })
    }, 2000);

    // axios.get(`${API_PATH}/someapi`, {data});
    //   .then(res => {
    //     dispatch({
    //       type: 'FETCH_DATA_SUCCESS',
    //       payload: res,
    //     })
    //   })
    //   .catch(error => {
    //     dispatch({
    //       type: FETCH_DATA_FAILURE,
    //       error,
    //     })
    //   })

  }
}
