import {
  collection,
  getDocs,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";

import db from "./firebase";

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "postsTut");
    // const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));
    getDocs(q).then((snapShot) => {
      // console.log(snapShot.docs);
      setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });

    /* リアルタイムで取得 */
    onSnapshot(q, (querySnapshot) => {
      // console.log(querySnapshot.docs);
      setPosts(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  return (
		<div className="App">
			<div>
				<h1>Firebase入門！Reactと連携</h1>
				<div>
					{posts.map((post) => (
						<div key={post.title}>
							<h1 className="title">{post.title}</h1>
							<p>{post.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default App;
