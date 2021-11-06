import React from 'react'
import {shallow} from 'enzyme'
import GiftGrid from '../../Componentes/GiftGrid'

describe('Pruebas en <GifGrid>', () => {
    const categoria = 'Alguna categoria'
    const mockUseFetchGifs = useFetchGifs

    test('debe mostrar componente correctamente', () => {
        
        const wrapper = shallow( <GiftGrid categoria={categoria} /> )
        expect( wrapper ).toMatchSnapshot()
    })

    test('mostrar items cuando carga iamgenes', () => {

        const wrapper = shallow( <GiftGrid categoria={categoria} /> )
        
    })
    
    
})
