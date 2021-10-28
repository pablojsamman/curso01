export const getGifts = async(categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=5&q=${ encodeURI(categoria) }&api_key=Z8qkWhOSa2A3NiNlHlN5575NeYwoESH9`
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs

}