export default function BlogPostPage({params}: any) {
  return (
    <>
      <h1>The Blog Post</h1>
      <p>{params.slug}</p>
    </>
  );
}
