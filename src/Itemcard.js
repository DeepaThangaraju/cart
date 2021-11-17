import React from 'react';
import { useCart } from 'react-use-cart';
import { Rating } from 'react-simple-star-rating';
import { useState } from 'react';

export function Itemcard({ names, image, startrate, endrate, btn, rating, item },) {
    const { addItem } = useCart();


    return (


        <div class="container">

            <div class="card shadow">
                <img className="image" src={image} class="img-fluid" alt={names} />
                <div class="card-body text-center">
                    <h5 class="card-title">{names}</h5>
                    <p><MyComponent star={rating} /></p>
                    <p class="card-text">{startrate}{endrate}</p>
                    <button class="btn btn-success" onClick={() => {
                        if (btn === "Add To Cart") {
                            addItem(item);
                        }
                    }}>{btn}</button>
                </div>
            </div>
        </div>


    );
}

export default function MyComponent({ star }) {
    console.log(star);
    const [rating, setRating] = useState(star) // initial rating value

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)

    }

    return (
        <div className='App'>
            <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
        </div>
    )
}