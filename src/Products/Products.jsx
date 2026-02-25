import PropTypes from "prop-types";
import "./Products.css";

function Products({ result }) {
  <section className="flex flex-wrap justify-center gap-6 p-5">
  {result}
</section>;
}
//for eslint
Products.propTypes = {
  result: PropTypes.array.isRequired,
};
export default Products;
