import Link from "next/link";

export async function Page({params}: {params: {id: number}}) {
    const post:any = await fetch(`http://localhost:3000/api/post?id=${params.id}`, {
        headers: {
            "Accept": "application/json"
        }
    })
        .then((response) => {
            return response.json();
        });
    
    return (
        <div>
            <div className="flex">
                
                <div className="p-4
                    m-4 
                    flex-col border 
                    border-white
                    rounded-md
                    text-xl
                    tracking-widest
                    text-justify">
                    
                    <p className="
                            my-4 
                            text-justify
                            siz"><strong>{post[0]?.location_details}</strong></p>
                    <strong><span>{params.id}</span></strong>
                    <p>{post[0]?.county}</p>
                    <p>{post[0]?.state}</p>
                    <p>{post[0]?.season}</p>
                    <strong><p>{post[0]?.classification}</p></strong>
                    <p>{post[0]?.observed}</p>
                </div>
            </div>
                <Link href="/posts?page=0"><h3 className="m-10">Return</h3></Link>       
        
        </div>
        
    )
}

export default Page;