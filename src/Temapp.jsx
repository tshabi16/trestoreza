import { useState } from "react";
import Nav from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recomm from "./Recomm/Recomm.jsx";
import Sidebar from "./Sidebar/sidebar.jsx";
import products from "./assets/data.jsx";
import Card from "./components/Card.jsx";
import "./index.css";
function Temapp() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [qry, setQry] = useState("");

  //assingning id property to each product
  let newProducts = products.map((item, index) => {
    return { id: index + 1, ...item };
  });

  //....input filter...//
  const handleInputChange = (event) => {
    setQry(event.target.value);
  };

  //... radio filter...//
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //... Button filter...//
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(newproducts, selected, query) {
    let filteredProducts = newproducts;

    // Filtering input items
    if (query) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.title
            .toLocaleLowerCase()
            .indexOf(query.toLocaleLowerCase()) !== -1
      );
    }
    //selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ id, img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={id}
          id={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(newProducts, selectedCategory, qry);

return (
    <>
      <Sidebar handleChange={handleChange} />
      {/* Add this wrapper div */}
      <div className="ml-[20%] min-h-screen bg-[#0a0a0a]">
        <Nav query={qry} handleInputChange={handleInputChange} />
        <Recomm handleClick={handleClick} />
        <Products result={result} />
      </div>
    </>
  );
}

export default Temapp;
