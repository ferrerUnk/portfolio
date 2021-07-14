export const SAMPLE_REQUEST = 'SAMPLE_REQUEST';
export const SAMPLE_REQUEST_SUCCESS = 'SAMPLE_REQUEST_SUCCESS';
export const SAMPLE_REQUEST_FAIL = 'SAMPLE_REQUEST_FAIL';


export default function reducer(state = {
  sampleState: {}
}, action) {
  switch (action.type) {

    case SAMPLE_REQUEST:
      return { ...state, loading: true };
    case SAMPLE_REQUEST_SUCCESS:
      return { ...state, loading: false, sampleState: action.payload.data };
    case SAMPLE_REQUEST_FAIL:
      console.log(action.error.response )
      return { ...state, loading: false, sampleState: action.error.response.data };

    default:
      return state;
  }
}

export function sampleState() {
  return {
    type: SAMPLE_REQUEST,
    payload: {
      request: {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        url: `/films`,
      }
    }
  };
}
