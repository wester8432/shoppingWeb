import axios from "axios";
import { useEffect, useState } from "react";
import SwiperImg from "../../components/Swiper";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    const productsRes = await axios.get(
      `/v2/api/${process.env.REACT_APP_API_PATH}/products/all`
    );
    console.log("products", productsRes.data.products);
    setProducts(productsRes.data.products);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row flex-md-row-reverse flex-column">
          <div>
            <SwiperImg />
          </div>
          {/* <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1526038335545-4b96864eaee7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80
          alt="
              className="img-fluid"
              alt="..."
            />
          </div> */}
          <div className="col d-flex flex-column justify-content-center mt-md-0 mt-3">
            <h5 className="font-weight-normal text-muted mt-2"></h5>
            {/* <div className="input-group mb-0 mt-4">
              <div className="input-group-append">
                <button
                  className="btn btn-dark rounded-0"
                  type="button"
                  id="search"
                >
                  Lorem ipsum
                </button>
              </div> 
            </div> */}
          </div>
        </div>
        {/* <div className="row mt-5">
          <h2 className="text-center">精選餐點</h2>
          {new Array(10)}=
          {products.map((product) => {
            return (
              <div
                className="card border-0 mb-4 col-md-6 position-relative position-relative bg-light"
                key={product.id}
              >
                <img
                  src={product.imageUrl}
                  className="card-img-top rounded-0 objectFit"
                  alt="..."
                  height={"450px"}
                  width={"420px"}
                />
                <div className="card-body p-0">
                  <h4 className="mb-0 mt-4">
                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                  </h4>
                  <div className="d-flex justify-content-between mt-3">
                    <button className="btn btn-outline-dark rounded-0 text-nowrap ">
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>

      {/* <div className="container my-7">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
              style={{ width: "160px", height: "160px", objectFit: "cover" }}
            />
            <h4 className="mt-4">Lorem ipsum</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
              style={{ width: "160px", height: "160px", objectFit: "cover" }}
            />
            <h4 className="mt-4">Lorem ipsum</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
              style={{ width: "160px", height: "160px", objectFit: "cover" }}
            />
            <h4 className="mt-4">Lorem ipsum</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className="bg-light py-7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 text-center">
              <h3>Lorem ipsum</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod.
              </p>
              <button className="btn btn-dark mt-4 rounded-0">
                Lorem ipsum
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
