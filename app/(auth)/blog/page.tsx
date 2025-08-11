import DataGrid from "@/components/grid/data-grid";
import Link from "next/link";
import {redirect} from "next/navigation";
import { getData } from "@/lib/data";
import { verifyAuth } from "@/lib/auth";

export default async function BlogPage() {
  const result = await verifyAuth();

  if(!result.user) {
    return redirect('/')
  }

  const data = await getData();
  return (
    <>
      <h1>The Blog</h1>
      <p><Link href="/blog/post-1">Post 1</Link></p>
      <p><Link href="/blog/test">Post 2</Link></p>
      <p><Link href="/blog/random">Post 3</Link></p>
      <div>
        <DataGrid data={data}/>
      </div>
    </>
  );
}
