import { useNavigate } from "react-router-dom";

const Product = () => {
const navigate = useNavigate()
const NavigateHandler = () => {
  navigate("/Product/detail")
}
  return (
    <div>
      <h1 className="text-5xl font-thin mb-5">Products</h1>
      <div className="mb-10">
        <h1 className="text-3xl font-light mb-5">Product 1</h1>
        <button
          onClick={NavigateHandler}
          className="bg-white text-black px-4 py-2 rounded-2xl  "
        >
          {" "}
          See Details
        </button>
      </div>
      <div className="mb-10">
        <h1 className="text-3xl font-light mb-5">Product 2</h1>
        <button onClick={NavigateHandler} className="bg-white text-black px-4 py-2 rounded-2xl ">
          {" "}
          See Details
        </button>
      </div>
      <div className="mb-10">
        <h1 className="text-3xl font-light mb-5">Product 3</h1>
        <button onClick={NavigateHandler} className="bg-white text-black px-4 py-2 rounded-2xl ">
          {" "}
          See Details
        </button>
      </div>
    </div>
  );
};

export default Product;
