// https://zenn.dev/hiro__dev/scraps/bfe3ca1757ffae
// 2021/12/02にコメント追加
// サブコレクションにデータを追加＆取得する


const [ memos, setMemos ] = useRecoilState(memoState);

const data1 =
    {
      id: 'sdhfan12', // TODO doc.id に変更
      title: 'Propsの基礎',
      date: 'Today',
      category: 'React',
      isOpen: true,
    }

  useEffect(() => {
    // current userのメモの投稿内容を表示する
    const user = auth.currentUser;

    // memosのデータ追加
    const usersCollectionRef = collection(db, 'users', user!.uid, 'memos'); //ログインユーザーのmemosコレクションへのレファレンス（ない場合は作成される） // doc.idをmemoドキュメントのidフィールドの値と同じにする 
    setDoc(doc(usersCollectionRef), data1) // memosのドキュメントにobjを追加

    // memosのデータ取得
    onSnapshot(
      usersCollectionRef,
      (snapshot) => setMemos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, title: doc.data().title, date: doc.data().date, category:doc.data().category, isOpen: doc.data().isOpen }
      ))), //取得時にidをdoc.idにする
      (error) => {
        toast.error('ドキュメントの読み込みに失敗しました。');
        console.log(error.message);
      },
    );
  }, [setMemos]);
  