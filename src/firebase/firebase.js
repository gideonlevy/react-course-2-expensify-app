import firebase from 'firebase';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });


// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
// });

// database.ref('expenses').push({
//     description: 'Beer',
//     note: 'Good expense',
//     amount: 4433,
//     createdAt: 10000
//   });
// database.ref('expenses').push({
//     description: 'Water',
//     note: 'Nice expense',
//     amount: 33333,
//     createdAt: 10002
//   });
// database.ref('expenses').push({
//     description: 'Hamburger',
//     note: 'Better expense',
//     amount: 2334443,
//     createdAt: 10000
//   });





// database.ref('notes/-MO5bDNV8S9ngHVGkoZP').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });


// Get a reference to the database service
//const database = firebase.database();
//const onValueChange = database.ref().on('value', (snapshot) => {
//  const val = snapshot.val()
//  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//}, (e) => {
//  console.log('Error with data fetching', e);
//});


//const onValueChange = database.ref().on('value', (snapshot) => {
//  console.log(snapshot.val());
//}, (e) => {
//  console.log('Error with data fetching', e);
//});

//setTimeout(() => {
//  database.ref('age').set(43);
//}, 3500);

//setTimeout(() => {
//  database.ref().off(onValueChange);
//}, 7000);

//setTimeout(() => {
//  database.ref('age').set(44);
//}, 10500);

//reading from db
//database.ref('location')
//.once('value')
//.then((snapshot) => {
//  const val = snapshot.val();
//  console.log(val);
//})
//.catch((e) => {
//  console.log('Error fetching data', e);
//})


// database.ref().set({
//    name: 'Gidi Levy',
//    age: 41,
//    stressLevel: 6,
//    job: {
//      title: 'Software developer',
//      company:'Google'
//    },
//    isSingle: false,
//    location: {
//      city: 'Tel Aviv',
//      country: 'Israel'
//    }
// }).then(() => {
//  console.log('Data is saved!')
// }).catch((e) => {
//  console.log('This failed', e)
// });

//database.ref().update({
//  age: 29,
//  job: 'Manager',
//  location: {
//    city: 'Boston'
//  }
//});
//database.ref().update({
//  job: 'Manager',
//  'location/city': 'Boston'
//});

// database.ref('isSingle').remove()
//   .then(function() {
//     console.log("Data was removed")
//   })
//   .catch(function(e) {
//     console.log("Did not remove data", e)
//   });

//database.ref('isSingle').set(null); -> like remove but we don't use that


// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seatle'
// });
