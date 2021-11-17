
import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Home } from './Home';
import { Itemcard } from './Itemcard';



function App() {
  const items = [{
    name: "Fancy Product",
    strtrate: "$40.00-",
    endrate: "$80.00",
    btnvalue: "view option",
    rating: 0,
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuL7AUG-btV2q4yd3XVnRPGfby-Tt8reVWvA&usqp=CAU"
  },
  {
    name: "Special item",
    strtrate: "$20.00",
    endrate: "$18.00",
    btnvalue: "Add To Cart",
    rating: 5,
    pic: "https://m.media-amazon.com/images/I/51emPodJDkS._SX425_.jpg"
  },
  {
    name: "Sale item",
    strtrate: "$50.00",
    endrate: "$25.00",
    btnvalue: "Add To Cart",
    rating: 0,
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSArbiv_sh65ndds9UP1KfVTV7MyngBsmfQSw&usqp=CAU"
  },
  {
    name: "Popular item",
    strtrate: "",
    endrate: "$40.00",
    btnvalue: "Add To Cart",
    rating: 5,
    pic: "https://images-eu.ssl-images-amazon.com/images/I/91O8rVsmpyL._SX300_SY300_QL70_ML2_.jpg"
  },
  {
    name: "Sale item",
    strtrate: "$50.00",
    endrate: "$25 .00",
    btnvalue: "Add To Cart",
    rating: 0,
    pic: "https://4.imimg.com/data4/FX/BX/NSDMERP-9446016/1477315552p1-500x500.png"
  },
  {
    name: "Fancy Product",
    strtrate: "$40.00-",
    endrate: "$80.00",
    btnvalue: "view option",
    rating: 0,
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8lzve3GFwnVg5sklYwA3JDL6kLNf7nezPg&usqp=CAU"
  },
  {
    name: "Special item",
    strtrate: "$20.00",
    endrate: "$18.00",
    btnvalue: "Add To Cart",
    rating: 5,
    pic: "https://www.annaijewellers.com/wp-content/uploads/2019/02/Fancy-Gift-7-2.jpg"
  },
  {
    name: "Popular item",
    strtrate: "",
    endrate: "$40.00",
    btnvalue: "Add To Cart",
    rating: 5,
    pic: "https://image.shutterstock.com/image-photo/yellow-leather-woman-bag-isolated-260nw-782330749.jpg"
  },]

  return (

    <div>


      <Home />
      <div>
        <Itemlist props={items} />
      </div>
      <Foot />
    </div>

  );
}
function Itemlist({ props }) {
  console.log(props);
  return (

    <div className="item">

      {props.map(({ name, strtrate, endrate, btnvalue, pic, rating }, index) => <Itemcard
        key={index}
        names={name}
        image={pic}
        startrate={strtrate}
        endrate={endrate}
        btn={btnvalue}
        rating={rating}
        id={index} />)}

    </div>

  )
}

function Foot() {
  return (
    <div className="foot">
      <p>Copyright © your website 2021</p>
    </div>
  );
}


export default App;
