dgw
fefe
fimport React, { Component } from 'react';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const config =
    {
      apiKey: "AIzaSyCk0FvR9Pp4hISzvhslZpUmsK55sS9z81c",
      authDomain: "finalforum-57eb9.firebaseapp.com",
      databaseURL: "https://finalforum-57eb9-default-rtdb.firebaseio.com",
      projectId: "finalforum-57eb9",
      storageBucket: "finalforum-57eb9.appspot.com",
      messagingSenderId: "87427314912",
      appId: "1:87427314912:web:32a42b63fd32aaf7e14c85",
      measurementId: "G-T9L83D8MFQ"
    };

    this.app = firebase.initializeApp(config);
    this.database = this.app.database();
  }

  render() {
    return (
      <ThreadDisplay database={this.database} />
    );
  }
}

export default App;
