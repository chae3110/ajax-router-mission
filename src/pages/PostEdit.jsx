import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PostEdit({ posts, setPosts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    content: ''
  });
  useEffect(() => {
    const post = posts.find(p => p.id === Number(id));

    if (post) {
      setForm({
        title: post.title,
        content: post.content
      });
    }
  }, [id, posts]);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setPosts(prev => 
      prev.map(post => 
        post.id === Number(id)
        ? {...post, ...form}
        : post
      )
    );
    navigate(`/posts/${id}`);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text"
        name="title"
        value={form.title}
        onChange={handleChange} />
        <textarea name="content" placeholder={posts.content} value={form.content} onChange={handleChange}></textarea>
        <button type="submit">수정</button>
    </form>
  )
}