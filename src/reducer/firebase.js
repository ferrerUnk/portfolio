// import firebase from 'firebase';
import firebase from "firebase/compat";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import firebaseConfig from '../Firebase';

export const AUTH_USER = 'AUTH_USER';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const AUTH_USER_FAIL = 'AUTH_USER_FAIL';

export const BOOTH = 'BOOTH';
export const BOOTH_SUCCESS = 'BOOTH_SUCCESS';
export const BOOTH_FAIL = 'BOOTH_FAIL';

export const VISITED_BOOTH = 'VISITED_BOOTH';
export const VISITED_BOOTH_SUCCESS = 'VISITED_BOOTH_SUCCESS';
export const VISITED_BOOTH_FAIL = 'VISTED_BOOTH_FAIL';

export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAIL = 'GET_EVENTS_FAIL';

!firebase.apps.length && firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  databaseURL: firebaseConfig.databaseURL,
  storageBucket: firebaseConfig.storageBucket,
  projectId: firebaseConfig.projectId
});

export const reducer = (
  state = {
    authState: [],
    eventsState: [],
    picture: {}
  },
  action
) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, loading: true };
    case AUTH_USER_SUCCESS:
      return { ...state, loading: false, authState: action.payload.data };
    case AUTH_USER_FAIL:
      return {
        ...state,
        loading: false,
        authState: 'failed',
        error: 'Error while fetching data'
      };

    case BOOTH:
      return { ...state, loading: true };
    case BOOTH_SUCCESS:
      return { ...state, loading: false, boothState: action.payload.data };
    case BOOTH_FAIL:
      return {
        ...state,
        loading: false,
        authState: 'failed',
        error: 'Error while fetching data'
      }
    case VISITED_BOOTH:
      return { ...state, loading: true };
    case VISITED_BOOTH_SUCCESS:
      return { ...state, loading: false, boothState: action.payload.data };
    case VISITED_BOOTH_FAIL:
      return {
        ...state,
        loading: false,
        authState: 'failed',
        error: 'Error while fetching data'
      }
      
    case GET_EVENTS:
      return { ...state, loading: true };
    case GET_EVENTS_SUCCESS:
      return { ...state, loading: false, eventsState: action.payload.data };
    case GET_EVENTS_FAIL:
      return {
        ...state,
        loading: false,
        authState: 'failed',
        error: 'Error while fetching data'
      };
  
    default:
      return state;
  }
};

export const setData = (query, data) => {
  return firebase
    .database()
    .ref(query)
    .set(data)
    .then(e => {
      return { response: 'success' };
    })
    .catch(e => {
      return { response: 'failed', error: e };
    });
};

// Save email and password to firebase
export const addAuth = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(e => {
      return { response: 'success', id: e.user.uid };
    })
    .catch(e => {
      return { response: 'failed', error: e };
    });
};

// Sign in email and password in firebase and returns the key/id
export const auth = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(e => {
      return { response: 'success', id: e.user.uid };
    })
    .catch(e => {
      return { response: 'failed', error: e };
    });
};

export async function getFilteredData(query, key, value, callback) {
  firebase
    .database()
    .ref(query)
    .orderByChild(key)
    .equalTo(value)
    .once('value', e => {
      callback(e.val());
    });
};

export async function getBarangay(query, callback) {
  return firebase
    .database()
    .ref(query)
    .once('value', function (snapshot) {
      let pass = [];
      Object.entries(snapshot.val()).forEach(function (val,key) {
        let data = {...val[1], barangay: val[0]}
        pass.splice(0, 0, data)
      });
      callback(pass)
    })
};

export async function getVaccinated(query, callback) {
  return firebase
    .database()
    .ref(query)
    .once('value', function (snapshot) {
      let vacc = [];
      Object.entries(snapshot.val()).forEach(function (val,key) {
        let data = {...val[1]}
        vacc.splice(0, 0, data)
      });
      callback(vacc)
    })
};

export async function getPatient(query, callback) {
  return firebase
    .database()
    .ref(query)
    .once('value', function (snapshot) {
      let tempPatients = [];
      Object.entries(snapshot.val()).forEach(function (val,key) {
        let brgy = val[0];
        let data = []
        let patients = val[1].Patients;
        if(patients){
          Object.entries(patients).forEach(function(itm, id){
            console.log(itm[0], 'here')
            let temp = { ...itm[1], id: itm[0], barangay: brgy }
            data.splice(0,0, temp)
          })
        }
        tempPatients.splice(0, 0, ...data)
      });
      callback(tempPatients);
    })
};

export async function getVaccine(query, callback) {
  return firebase
    .database()
    .ref(query)
    .once('value', function (snapshot) {
      let vacc = []
      Object.entries(snapshot.val()).forEach(function (val,key) {
          let data = {...val[1], vaccine: val[0]}
          vacc.splice(0, 0, data)
        });
        callback(vacc)
    })
};

export async function getStaff(query, callback) {
  return firebase
    .database()
    .ref(query)
    .once('value', function (snapshot) {
      let staff = []
      Object.entries(snapshot.val()).forEach(function (val,key) {
          let data = {...val[1], id: val[0]}
          staff.splice(0, 0, data)
        });
        callback(staff)
    })
};

export const setStorage = data => {
  Object.keys(data).map(e => {
    localStorage.setItem([e], data[e]);
  });
};

export const getStorage = key => {
  return localStorage.getItem(key);
};

export const removeStorage = keys => {
  keys.map( (key) => {
    localStorage.removeItem(key);
  } );
  // return localStorage.getItem(key);
};

export const getData = async query => {
  const ref = firebase.database().ref(query);
  const resp = await ref.once('value');
  return resp.val();
};

export const getRealtimeData = async (query, callback = () => {}) => {
  let ref = await firebase.database().ref(query).on('value', e => callback( e.val() ) );
  return ref;
};

export const getVotes = async (callback = () => {}) => {
  const ref = await firebase.database().ref('tally').orderByChild('vote').on('value', e => callback( e.val() ));
  return ref;
};

export function pushData(query, data) {
  return firebase
    .database()
    .ref(query)
    .push(data)
    .then(e => {
      return { response: 'success', data: e };
    })
    .catch(e => {
      return { response: 'failed', error: e };
    })
}

export function updateData(query, data) {
  return firebase
    .database()
    .ref(query)
    .update(data)
    .then(e => {
      return { response: 'success', data: e };
    })
    .catch(e => {
      return { response: 'failed', error: e };
    })
}