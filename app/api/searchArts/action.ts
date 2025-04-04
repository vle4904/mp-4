"use server";

export async function searchArts() {
    const apiKey = process.env.API_KEY;
    try{
        const res = await fetch(`https://api.harvardartmuseums.org/object?apikey=${apiKey}&sort=random&size=1&q=accesslevel:1`);

        const json = await res.json();
        const data = json.records?.[0];

        if (!data || !data.images[0]?.baseimageurl){
            console.log("No valid data or image URL found");
            return null;
        }

        const art = {
            id: data.id?.toString() || "",
            baseimageurl: data.images[0].baseimageurl,
            technique: data.images[0].technique || "Unknown",
        };

        return art;
    } catch (error) {
        console.error(error);
        return null;
    }
}