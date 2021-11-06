import React from 'react'
import '@testing-library/jest-dom'

import { shallow } from "enzyme"
import AddCategory from "../../Componentes/AddCategory"

describe('pruebas en el componente addcategory', () => {
    
    const setCategorias = jest.fn()
    let wrapper = shallow(<AddCategory setCategorias={setCategorias} />)

    beforeEach( () => {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategorias={setCategorias} />)
    })

    test('debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })

    test('debe cambiar input', () => {

        const input = wrapper.find('input')
        const value = 'Hola Mundo'
        input.simulate('change', { target: { value } })
        
    })
    
    test('no debe de llamar la informacion', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect(setCategorias).not.toHaveBeenCalled()
        
    })

    test('setcategorias y limpia input', () => {

        const value = 'Hola Mundo'
        wrapper.find('input').simulate('change', { target: { value } })

        wrapper.find('form').simulate('submit', { preventDefault(){} })
        
        expect(setCategorias).toHaveBeenCalled()
        expect(setCategorias).toHaveBeenCalledWith(expect.any(Function))

        expect(wrapper.find('input').prop('value')).toBe('')
        
    })
    

})
