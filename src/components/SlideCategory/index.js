import React from 'react'
import { SlideCategoryChild } from '../SlideCategoryChild'

export const SlideCategory = (props) => {
    let movie = [1,2,3,4,5,6,7]
    return(
        <div>
            <h2>{props.title}</h2>
            <ul>
                {movie.map(movie =>  <SlideCategoryChild />)}
               
            </ul>
        </div>
    )
}

