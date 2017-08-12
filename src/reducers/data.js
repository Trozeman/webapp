const initialState = [];

const data = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return [ ...action.payload ]

    default:
      return state
  }
}

export default data
