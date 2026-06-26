import { NavLink } from "react-router-dom";

export default function Home({ posts }) {
  return (
    <section>
      <h2>소개</h2>
      <p>React Router로 목록/상세/작성/수정/삭제를 연습하는 미션입니다.</p>
      <h3>최신 글</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <NavLink to={`/posts/${post.id}`}>{post.title}</NavLink>
            <small>({post.createdAt})</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
