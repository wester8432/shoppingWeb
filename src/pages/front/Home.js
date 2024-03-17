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
          {/* <div className="col d-flex flex-column justify-content-center mt-md-0 mt-3">
            <h5 className="font-weight-normal text-muted mt-2"></h5>
            <div className="input-group mb-0 mt-4">
              <div className="input-group-append">
                <button
                  className="btn btn-dark rounded-0"
                  type="button"
                  id="search"
                >
                  Lorem ipsum
                </button>
              </div> 
            </div>
          </div> */}
          <div className="row pt-5">
            <div
              className="card col-md-4 border-0"
              style={{
                backgroundColor: "transparent",
              }}
            >
              <img
                src="https://i.pinimg.com/564x/38/5a/9c/385a9c896e0e9de2e4bc72db3027827e.jpg"
                className="card-img-top homeImg objectFit"
                alt="..."
                height="600px"
              />
              <div className="card-body">
                <h2 className="card-title text-center">尊榮環境，視覺享受！</h2>
                <h5 className="card-text text-center">
                  幸福團聚時刻，溫馨的用餐環境。將燈光、裝潢做到最好，讓顧客能以最舒適的心情體驗生活。
                </h5>
              </div>
            </div>
            <div
              className="card col-md-4 border-0"
              style={{
                backgroundColor: "transparent",
              }}
            >
              <img
                src="https://i.pinimg.com/564x/70/e8/d0/70e8d09d3d1612f5daaea9bd1b2e8165.jpg"
                className="card-img-top homeImg objectFit"
                alt="..."
                height="600px"
              />
              <div className="card-body">
                <h2 className="card-title text-center">用心料理，味覺饗宴 !</h2>{" "}
                <h5 className="card-text text-center">
                  我們將美味重新定義，打造貼心服務與美味食物的對話環境，感受不僅只限於舌尖，熱情燃起美味炙燒，徜徉味覺與視覺的尊榮享受。
                </h5>
              </div>
            </div>
            <div
              className="card col-md-4 border-0"
              style={{
                backgroundColor: "transparent",
              }}
            >
              <img
                src="https://i.pinimg.com/564x/f8/6c/8a/f86c8a31f41c0469f08eefd0330b14df.jpg"
                className="card-img-top homeImg objectFit"
                alt="..."
                height="600px"
              />
              <div className="card-body">
                <h2 className="card-title text-center">貼心服務，專屬幸福！</h2>{" "}
                <h5 className="card-text text-center">
                  貼心服務！將人力發揮最高價值提供精緻又有溫度的服務，用「幸福感」打入您的心房。
                </h5>
              </div>
            </div>
            <div
              className="card border-0 "
              style={{
                backgroundColor: "transparent",
              }}
            >
              <img
                src=" https://i.pinimg.com/564x/3a/df/67/3adf67dad3f809a7ae355c5e9ec96f45.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-text text-center">
                  新鮮嚴選食材，臺灣在地小農稻米、蔬果品質認證！
                  每日新鮮海產，品質保證讓您吃的安心！
                </h3>
              </div>
            </div>
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
