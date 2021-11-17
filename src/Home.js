import React from 'react';
import { useState } from 'react';

export function Home({ item }, { setItem }) {
    const [show, setShow] = useState(false);
    const disdes = { display: show ? "block" : "none" };
    const [show1, setShow1] = useState(false);
    const dis = { display: show1 ? "block" : "none" };

    const btn = { fontSize: "1rem" };
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid" >
                    <a class="navbar-brand" href="https://startbootstrap.com/previews/shop-homepage">Start Bootstrap</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown" style={disdes}>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">About</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a onClick={() => setShow1(!show1)} class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Shop
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={dis}>
                                    <li><a class="dropdown-item" href="/">All Product</a></li>
                                    <li><a class="dropdown-item" href="/">Popular item</a></li>
                                    <li><a class="dropdown-item" href="/">New items</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="cartButton">
                            <button style={btn} ><i class="fas fa-cart-plus"></i>  cart<span className="count"> {item}  </span></button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="Shopstyle">
                <p><h2>Shop in style</h2> <span className="home">with the shop homepage template</span></p>
            </div>
        </div>
    );
}
