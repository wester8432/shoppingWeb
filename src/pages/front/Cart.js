import { useOutletContext, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export default function Cart() {
  const { cartData, getCart } = useOutletContext();
  const [loadingItems, setLoadingItems] = useState([]);
  const removeCartItem = async (id) => {
    try {
      const res = await axios.delete(
        `/v2/api/${process.env.REACT_APP_API_PATH}/cart/${id}`
      );
      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  const updateCartItem = async (item, qty) => {
    const data = {
      data: {
        product_id: item.product.id,
        qty: qty,
      },
    };
    setLoadingItems([...loadingItems], item.id);
    try {
      const res = await axios.put(
        `/v2/api/${process.env.REACT_APP_API_PATH}/cart/${item.id}`,
        data
      );
      console.log(res);
      setLoadingItems(
        loadingItems.filter((loadingObject) => loadingObject !== item.id)
      );
      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div
          className="col-md-6 bg-white py-5"
          style={{ minHeight: "calc(100vh - 56px - 76px)" }}
        >
          <div className="d-flex justify-content-between">
            <h2 className="mt-2">您的餐點</h2>
          </div>
          {cartData?.carts?.map((item) => {
            return (
              <div className="d-flex mt-4 bg-light" key={item.id}>
                <img
                  src={item.product.imageUrl}
                  alt=""
                  className="object-cover"
                  style={{
                    width: "120px",
                  }}
                />
                <div className="w-100 p-3 position-relative">
                  <button
                    type="button"
                    className="position-absolute btn"
                    style={{ top: "12px", right: "12px" }}
                    onClick={() => removeCartItem(item.id)}
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                  <p className="mb-0 fw-bold">{item.product.title}</p>
                  <p className="mb-1 text-muted" style={{ fontSize: "14px" }}>
                    {item.product.content}
                  </p>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <select
                      className="form-select"
                      value={item.qty}
                      disabled={isDisabled(loadingItems.includes(item.id))}
                      onChange={(event) => {
                        updateCartItem(item, event.target.value * 1);
                      }}
                    >
                      {[...Array(20)].map((i, num) => {
                        return <option key={num}>{num + 1}</option>;
                      })}
                    </select>
                    <p className="mb-0 ms-auto">NT${item.final_total}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="d-flex justify-content-between mt-4">
            <p className="mb-0 h4 fw-bold">總金額</p>
            <p className="mb-0 h4 fw-bold">NT${cartData.final_total}</p>
          </div>
          <Link
            to="checkout"
            className="btn btn-dark w-100 mt-4 rounded-0 py-3"
          >
            確認餐點正確
          </Link>
        </div>
      </div>
    </div>
  );
}
