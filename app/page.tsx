import AuthForm from "@/components/auth-form";

export default async function Home({searchParams}: any) {
  const params = await searchParams;

  const mode = params.mode || 'login';
   
  return (
    <>
      {/* <h1>Home</h1>
      <Link href="/about">About Us</Link> */}
      <AuthForm mode={mode}/>
    </>
  );
}
