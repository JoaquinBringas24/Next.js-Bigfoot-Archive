import { useEffect } from "react"

interface Data {
    location_details: string
    county: string
    state: string
    season: string
    id: number
}


export default function Observation({location_details, county, state, season, id}: Data) {    

    return (
        <a href={`/posts/${id}`}>
            <div className="p-4
                m-4 
                flex-col border 
                border-white
                rounded-md">
                
                <strong><span>{id}</span></strong>
                <p className="
                        my-4 
                        text-justify
                        siz"><strong>{location_details}</strong></p>
                <p>{county}</p>
                <p>{state}</p>
                <p>{season}</p>
            </div>
        </a>
    )
}