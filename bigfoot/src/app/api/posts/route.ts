import { NextRequest } from "next/server";
import postgres from "postgres"

const sql = postgres('postgres://root:secret@localhost:2000/root')

export async function GET(request: NextRequest) {
    const url = new URL(request.url)

    const page: any =  url.searchParams.get("page")

    const offset = page === 0 ? 0 : page  *10;    

    const response = await sql`SELECT * FROM bigfoot ORDER BY id LIMIT ${10} OFFSET ${offset};`

   return Response.json(response)
}
    