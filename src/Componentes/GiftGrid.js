import React from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

const GiftGrid = ({categoria}) => {
    
    const {data, loading} = useFetchGifs(categoria)
    
    return (
    <>
        <h3> {categoria} </h3>
        {loading&&<p>Cargando...</p>}


        <div className='card-grid'>

            {
                data.map( img => {
                    return <GifGridItem key={img.id} { ...img }  />
                })
            }
        </div>
    </>
    )
}

GiftGrid.propTypes = {
    categoria: PropTypes.string.isRequired,
}

export default GiftGrid
