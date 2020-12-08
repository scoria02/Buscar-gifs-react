export const getGifs = async(category) => {

    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=2GOi474veT4G4dxUr1ux5WaV7xzwrqLA`;
    const resp = await fetch (url);
    const {data} = await resp.json();

    const gifs = data.map( imgg => {

        return {
            id: imgg.id,
            title: imgg.title,
            url: imgg.images.original.url
        }

    })

    // console.log(gifs);
    return gifs;
}