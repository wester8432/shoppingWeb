import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useOutletContext } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [cartQty, setCartQty] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { getCart } = useOutletContext();

  const getProduct = async (id) => {
    const productRes = await axios.get(
      `/v2/api/${process.env.REACT_APP_API_PATH}/product/${id}`
    );
    console.log(productRes);
    setProduct(productRes.data.product);
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

  const addToCart = async () => {
    setIsLoading(true);
    const data = {
      data: {
        product_id: product.id,
        qty: cartQty,
      },
    };
    try {
      const res = await axios.post(
        `/v2/api/${process.env.REACT_APP_API_PATH}/cart`,
        data
      );
      console.log(res);
      getCart();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div
        style={{
          minHeight: "400px",
          backgroundImage: `url(${product.imageUrl})`,
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="row justify-content-between mt-4 mb-7">
        <div className="col-md-7">
          <h2 className="mb-0">{product.title}</h2>
          <p className="fw-bold">NT$ {product.price}</p>
          <p>{product.content}</p>
          <div className="my-4">
            <img src={product.imageUrl} alt="" className="img-fluid mt-4" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="input-group mb-3 border mt-3">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-dark rounded-0 border-0 py-3"
                type="button"
                id="button-addon1"
                onClick={() => {
                  setCartQty((prev) => (prev === 1 ? prev : prev - 1));
                }}
              >
                <i className="bi bi-dash"></i>
              </button>
            </div>
            <input
              type="text"
              className="form-control border-0 text-center my-auto shadow-none"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              value={cartQty}
              readOnly
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-dark rounded-0 border-0 py-3"
                type="button"
                id="button-addon2"
                onClick={() => {
                  setCartQty((prev) => prev + 1);
                }}
              >
                <i className="bi bi-plus"></i>
              </button>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-dark btn-block rounded-0 py-3"
            onClick={() => addToCart()}
            disabled={isLoading}
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
  );
}
