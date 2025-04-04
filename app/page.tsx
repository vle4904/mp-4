"use client";

import {searchArts} from "@/app/api/searchArts/action";
import {useState} from "react";
import {ArtProps} from "@/types";
import ArtsDisplay from "@/components/ArtsDisplay";

export default function Home() {
    const [arts, setArts] = useState<ArtProps | null>(null);

        const checkSearch = async () => {
            let foundArt = null;

            for(let i = 0; i < 5; i++){
                try{
                    const art = await searchArts();

                    if(art){
                        foundArt = art;
                        break;
                    }

                } catch(error){
                    console.error("Something went wrong in API call", error);
                }
            }

            if(!foundArt){
                alert("No art found for this page. Try again in a moment.");
            }

            setArts(foundArt);
        }

    return(
        <div className={`flex flex-col items-center bg-green-200 p-4 min-h-screen border-l-20 border-r-20 border-white`}>
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Art Gallery
                </h1>
                <p className="text-gray-600">
                    Click the button to get art.
                </p>
            </div>

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-6"
                onClick={checkSearch}
            >Search</button>

            <ArtsDisplay art={arts} />
        </div>
    );
}