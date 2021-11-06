import { getGifts } from "../../helpers/getGifs"

describe('pruebas con getgifs', () => {
    
    test('debe traer 5 elementos', async () => {
        
        const gifs = await getGifts('Final Fantasy')

        expect( gifs.length ).toBe(5)

    })
    
    test('debe recibir una categoria', async () => {
        
        const gifs = await getGifts('')

        expect( gifs.length ).toBe(0)

    })

})
