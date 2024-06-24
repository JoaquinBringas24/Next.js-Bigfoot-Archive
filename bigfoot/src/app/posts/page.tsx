import { NextRequest } from "next/server";
import Observation from "../components/Observation";
import Link from "next/link";


export async function Home({params, searchParams}: any) {

  const page: any = searchParams.page;

  const previous: number = page <= 0 ? 0 : page - 1;

  const next: number = parseInt(page) + 1; 

  const posts: any = await fetch(`http://localhost:3000/api/posts?page=${page}`)
      .then((response) => {
        return response.json();
        })

  return (
    <>
      <main className="text-xl tracking-widest font-elite flex min-h-screen flex-col items-center justify-between p-24 font-oswald">
        <h1>BIGFOOT HUNTER</h1>
        {posts ? posts.map((post: any) => {
          return (
            <Observation id={post.id}
            county={post.county} 
            location_details={post.location_details}
            season={post.season}
            state={post.state}
            key={post.id}
            />
          )
        }): <h1>No posts found!</h1>}
        <div>
          
        <Link href={{
          pathname: '/posts',
          query: {page: previous}
        }}>
          <button className="
            font-beba
            border
            rounded-lg
            p-2
            m-8
            z-10
            relative
            transition-all
            overflow-hidden
            duration-300
            hover:text-black
            hover:before:translate-x-0
            before:duration-200
            before:content-['']
            before:bg-white
            before:absolute
            before:left-0
            before:top-0
            before:h-full
            before:w-full
            before:-z-10
            before:rounded-lg
            before:translate-x-full">
          Previous
          </button>
        </Link>
        <Link href={{
          pathname: '/posts',
          query: {page: Number(next)}
        }}>
          <button className="font-beba
            border
            rounded-lg
            p-2
            m-8
            z-10
            relative
            transition-all
            overflow-hidden
            duration-300
            hover:text-black
            hover:before:translate-x-0
            before:duration-200
            before:content-['']
            before:bg-white
            before:absolute
            before:left-0
            before:top-0
            before:h-full
            before:w-full
            before:-z-10
            before:rounded-lg
            before:-translate-x-full">
          Next
          </button>
        </Link>
        </div> 
      </main>
    </>
  );
}

export default Home;