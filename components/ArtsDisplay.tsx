import { ArtProps } from "@/types";

export default function ArtsDisplay({ art }: { art: ArtProps | null }) {
    // Should never happen but just in case
    if (!art) return null;

    return (
        <div className="bg-white rounded-lg p-4 mb-6 shadow text-center m-2">
            <img src={art.baseimageurl} width={400} height={400} alt={`image of id ${art.id}`}/>
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Image ID: {art.id}</figcaption>
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Technique: {art.technique}</figcaption>

        </div>
    );
}