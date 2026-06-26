import { useParams, Link } from "react-router-dom";

export default function PostDetail({ posts, onDelete }) {
  const { id } = useParams();

  const post = posts.find(p => p.id === Number(id));

  if (!post) return <div>글 없음</div>;

  return (
    <section>
      <h2>{post.title}</h2>
      <p><small>{post.createdAt}</small></p>
      <p>{post.content}</p>
      <div>
        <Link to={`/posts/${id}/edit`}>수정하기</Link>
        <button onClick={() => {if(confirm('정말 삭제하시겠습니까?')) {onDelete(Number(id))}}}>삭제</button>
      </div>
    </section>
  );
}