import axios from 'axios';

const API_PATH = '/api/v1';

const sampleData = [
  {
    id: Math.random(),
    name: 'Point Name',
    coordinates: {
      latitude: '300000000',
      longitude: '400000000',
    },
    description: 'Blabla wejghw kjeg kerjg kgjr k regk jkjerhg kjh er',
    address: 'Степана Бандери 12/56',
    contacts: 'tel: 8 800 800 80 80'
  },
  {
    id: Math.random(),
    name: 'Point Name1',
    coordinates: {
      latitude: '300000001',
      longitude: '400000001',
    },
    description: '1Blabla wejghw kjeg kerjg kgjr k regk jkjerhg kjh er',
    address: 'Степана Бандери 22/56',
    contacts: 'tel: 8 800 800 80 80'
  },
];

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
