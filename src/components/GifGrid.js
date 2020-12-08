import React from 'react';
import { GifGridItem } from './GifGridItem';
// import {getGifs} from '../helper/getGifs';
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const {data:imagenes, loading} = useFetchGifs( category);
    // const [images, setImg] = useState([]);

    // useEffect (() => {
    //     getGifs(category)
    //     .then(setImg);
        
    // },[category])

    
    
    
    

    return (
        <>
          <h3> {category} </h3>
        <div className = "card-grid">
            {loading && <p>Loading...</p>}
                 
                {
                    imagenes.map( img => (
                        <GifGridItem 
                        key = {img.id}
                        { ...img}
                        />
                    ))
                }
                
        
        </div>
        </>
    )
}
