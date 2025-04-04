import Image from "next/image";

export default async function About() {

    return (
        <>
            <div className={`flex flex-col items-center bg-green-200 p-4 min-h-screen border-l-20 border-r-20 border-white`}>
                <div className="text-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-800 m-5">
                        Art Randomizer App
                    </h1>
                    <p className="text-gray-600 mb-5">
                        Explore the world of arts, one art at a time!
                    </p>

                    <Image
                        src="/harvard_art_museum.jpg"
                        width={500}
                        height={500}
                        alt="Image of a Harvard Museum Logo"
                        className="m-auto mb-6 p-5 w-80% h-auto"
                    />
                </div>
            </div>
        </>
    );
}