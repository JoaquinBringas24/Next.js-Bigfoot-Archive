import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres"

const sql = postgres('postgres://root:secret@localhost:2000/root')

export async function GET(request: NextRequest) {

    const url = new URL(request.url)

    const id = url.searchParams.get("id")

    const response = await sql`SELECT 
    observed, location_details, county, state, season, classification    
    FROM bigfoot WHERE id = ${id};`

   return NextResponse.json(response)
}
    