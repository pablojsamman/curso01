import React, { useState } from 'react'
import AddCategory from './Componentes/AddCategory'
import GiftGrid from './Componentes/GiftGrid'

const GiftExpertApp = () => {
    
    const [categorias, setCategorias] = useState( ['Kingdom Hearts'] )

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategorias={ setCategorias } />
            <hr />

            

            <ol>
                {categorias.map( (c) => {
                    return <GiftGrid key={c} categoria = {c} />
                })}
            </ol>

        </>
    )
}

export default GiftExpertApp
