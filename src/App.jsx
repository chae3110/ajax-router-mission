import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/home";
import PostDetail from "./pages/postDetail";
import Posts from "./pages/posts";
import PostNew from "./pages/PostNew";
import PostEdit from "./pages/PostEdit";
import NotFound from "./pages/NotFound";


function App() {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const handleDelete = (id) => {
    setPosts(prev => prev.filter(post => post.id !== Number(id)));
  };
  useEffect(() => {
    fetch("/data/blog.json")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setPosts(result);
        setLoaded(true);
      });
  }, []);
  /* const handleFetch = _id => {
    fetch(`/data/${_id}.json`)
    .then(res => res.json())
    .then(result => {
      console.log(result);
      setPosts({
        title: result.title,
        content: result.content,
        createdAt: result.createdAt,
      });
    });
  }; */
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout loaded={loaded} />}>
          <Route index element={<Home posts={posts} />} />
          <Route path="posts" element={<Posts posts={posts} />} />
          <Route path="posts/:id" element={<PostDetail posts={posts} onDelete={handleDelete} />} />
          <Route path="posts/new" element={<PostNew posts={posts} setPosts={setPosts} />} />
          <Route path="posts/:id/edit" element={<PostEdit posts={posts} setPosts={setPosts}/>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
