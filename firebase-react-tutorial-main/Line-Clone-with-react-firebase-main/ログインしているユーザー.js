// https://zenn.dev/hiro__dev/scraps/24eebda2e5c4ce
// 2021/11/21に更新

  import { db, auth } from 'src/lib/firebase/firebase';
  import { collection, getDocs, query, where } from 'firebase/firestore';


  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const user = auth.currentUser;
  const authUserCollectionRef = collection(db, 'users');
 //firestoreのユーザーuidがログインユーザーのuidと一致するものを検索する
  const q = query(authUserCollectionRef, where('uid', '==', user?.uid));

  // ログインユーザーのデータをfirestoreから取得する関数を定義
  const getAuthUserInfo = async () => {
    const querySnapshot = await getDocs(q); //検索済みのデータ取得
  // 一致するものをmapで処理しdataオブジェクトをコールバック
    querySnapshot.docs.map((doc) => {
      const data = doc.data();
      console.log(doc.id, ' => ', data);
      const { displayName, description, photoURL } = data;
      setCurrentUser({ displayName: displayName, description: description, photoURL: photoURL });
    });
  };

  useEffect(() => {
    getAuthUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);