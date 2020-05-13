import firebase from '../firebase/init'

var store = {
    state: {
        user_id: null,
        currentUser: firebase.auth().currentUser
    }
}

export default store