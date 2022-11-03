// https://www.youtube.com/watch?v=Js9BsBsczE8
// ReactでLINEクローンの作り方 - React×Firebaseチュートリアル

import "./App.css";
import { auth } from './firebase.js'

import Line from './components/Line'
import SignIn from "./components/SignIn";

import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return <div className="App">{user ? <Line /> : <SignIn />}</div>;
}

export default App;
