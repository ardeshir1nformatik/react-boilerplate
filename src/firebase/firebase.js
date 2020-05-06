//import * as firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }






















// Child removed

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // Child change

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // Child added

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//  .once('value')
//  .then((snapshot) => {
//      const expenses = []

//      snapshot.forEach((childSnapshot) => {
//          expenses.push({
//              id: childSnapshot.key,
//              ...childSnapshot.val()
//          })
//      })
//      console.log(expenses)
//  })

//  database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
//  })
 

// database.ref('expenses').push({
//     description: 'coffee',
//     note: 'tcshibo',
//     amount: 2500,
//     createdAt: 2000
// })
// database.ref('expenses').push({
//     description: 'Banana',
//     note: 'tgut',
//     amount: 7500,
//     createdAt: 3000
// })
// database.ref('expenses').push({
//     description: 'joghurt',
//     note: 'rewe',
//     amount: 1780,
//     createdAt: 4000
// })





// *************** PRACTICE *****************

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// })

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// })

// setTimeout(() => {
//     database.ref('age').set(29)
// }, 3500)

// setTimeout(() => {
//     database.ref().off()
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(30)
// }, 10500)

// database.ref('location')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
// })
// .catch((e) => {
//     console.log('There was an error.', e)
// })

// database.ref().set({
//     name: 'Ardeshir Tarkeshian',
//     age: 39,
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//         title: 'S developer',
//         company: 'RTL'
//     },
//     location: {
//         city: 'NY',
//         country: 'USA'
//     }
// }).then(() => {
//     console.log('Data was saved!')
// }).catch((e) => {
//     console.log('This failed.', e)
// })

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('data was succesfully removed')
//     })
//     .catch((e) => {
//         console.log('Error with deleting:', e)
//     })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })


//database.ref().set('This is my data.')

// database.ref('age').set(25)
// database.ref('location/city').set('Frankfurt')

// database.ref('attributes').set({
//     height: 188,
//     weight: 87
// }).then(() => {
//     console.log('Data was added.')
// }).catch((e) => {
//     console.log('There was a problem.', e)
// })