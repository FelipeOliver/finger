module.exports = ( function(){
    let firebase = require('firebase');
    let config = {
        apiKey: "AIzaSyDhs27hyS2QPUjUdX16EKg06SYczaRTBTU",
        authDomain: "finger-5bfcf.firebaseapp.com",
        databaseURL: "https://finger-5bfcf.firebaseio.com",
        projectId: "finger-5bfcf",
        storageBucket: "",
        messagingSenderId: "393977275829"
      };
    firebase.initializeApp(config);
    return firebase;
})