import './App.css';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from './actions/PostActions';

function App() {
  const posts = useSelector(state => state.postReducer.posts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts())
  }, [])

  console.log(posts)

  return (
    <div>
      NAREK
    </div>
  );
}

export default App;
