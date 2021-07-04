// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapbox:{
    accessToken: 'pk.eyJ1Ijoic2FuY2hpdHJvdGUiLCJhIjoiY2ttazkxOTAyMHl0cDJ2cXZuZjdkeXpybCJ9.i2FtOwRUlxZadT7TtMzSog'
  },
  firebase: { 
    apiKey: "AIzaSyDTcHfydsMb4DbaAHqyfRHnBUHoByPcLxg",
    authDomain: "evauth-dfd9a.firebaseapp.com",
    projectId: "evauth-dfd9a",
    storageBucket: "evauth-dfd9a.appspot.com",
    messagingSenderId: "592150548805",
    appId: "1:592150548805:web:1085843c438a40c4dfee2c"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
