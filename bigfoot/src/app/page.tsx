import Link from "next/link";

export default function Home(){
  return (
    
    <Link href="/posts?page=0">
      <button className="m-28 p-14 border rounded-b-md">GO</button>
    </Link>
  )
}