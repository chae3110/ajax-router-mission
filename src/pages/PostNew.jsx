import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function PostNew({setPosts}) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    content: ''
  });
  const handleChange = (e) => {
    setForm({
      ...form, 
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit = (e) => {
  e.preventDefault();

  const newPost = {
    id: Date.now(),
    title: form.title,
    content: form.content,
    createdAt: new Date().toISOString().slice(0, 10)
  };

  setPosts(prev => [...prev, newPost]);
  navigate(`/posts/${newPost.id}`);
};
  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input type="text" name="title" placeholder="제목" value={form.title} onChange={handleChange} />
        </div>
        <div>
          <textarea name="content" placeholder="내용" value={form.content} onChange={handleChange}></textarea>
        </div>
        <button type="submit">등록</button>
      </form>
    </section>
  )
}