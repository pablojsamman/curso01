import React from 'react'
import {shallow} from 'enzyme'
import { GifGridItem } from '../../Componentes/GifGridItem'


describe('Pruebas en <GifGridItem>', () => {
    const title = 'Algun titulo'
    const url = 'alguna url'
    const wrapper = shallow( <GifGridItem title={title} url={url} /> )

    test('debe mostrar componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('debe de tener un parrafo con el titulo', () => {
        
        const p = wrapper.find('p')
        expect( p.text().trim() ).toBe(title)

    })

    test('debe de tener la imagen igual al url y alt', () => {
        
        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)

    })

    
    
})