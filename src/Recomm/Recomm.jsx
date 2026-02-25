import PropTypes from "prop-types";
import "./Recomm.css";
import Buttons from "../components/Buttons";
function Recomm({ handleClick }) {
  return (
    <div>
      <h2 className="text-3xl font-black uppercase tracking-wider">Recommended</h2>
      <div className="recomm-flex">
        <Buttons onClickhandler={handleClick} value="" title="All Products" />
        <Buttons onClickhandler={handleClick} value="Nike" title="Nike" />
        <Buttons onClickhandler={handleClick} value="Adidas" title="Adidas" />
        <Buttons onClickhandler={handleClick} value="Puma" title="Puma" />
        <Buttons onClickhandler={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  );
}
//for eslint
Recomm.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default Recomm;
