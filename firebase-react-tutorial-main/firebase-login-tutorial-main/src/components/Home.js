import React, { useEffect, useState } from "react";

import { auth, db, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      // console.log(auth.currentUser.displayName);
      console.log(user.uid);
      }
  }, [user]);

  return (
    <>
      {user ? (
        <>
          <UserInfo user={user} />
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </>
  );
}

export default Home;

//グーグルボタンでサインイン
function SignInButton() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <button onClick={signInWithGoogle}>
      <p>グーグルでサインイン</p>
    </button>
  );
}

//グーグルでサインアウト
function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>
      <p>サインアウト</p>
    </button>
  );
}

function UserInfo({ user }) {
  return (
    <div className="userInfo" style={{"backgroundColor": "pink", "padding":".05rem"}}>
      <h5>ユーザー情報</h5>
      <hr />
      <img src={user.photoURL}></img>
      <p>{user.displayName}</p>
    </div>
  );
}

