import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  const [isLoading, setLoading] = useState(false);

  const getProducts = async (page = 1) => {
    (async () => {
      const productsRes = await axios.get(
        `/v2/api/${process.env.REACT_APP_API_PATH}/products?page=${page}`
      );
      console.log("productsRes", productsRes);
      setProducts(productsRes.data.products);
      setPagination(productsRes.data.pagination);
      setLoading(false);
    })();
  };

  useEffect(() => {
    getProducts(1);
  }, []);
  return (
    <>
      <div className="container mt-md-5 mt-3 mb-7">
        <Loading isLoading={isLoading} />
        <div className="row">
          {products.map((product) => {
            return (
              <>
                <div className="col-md-3" key={product.id}>
                  <div className="card border-0 mb-4 position-relative position-relative">
                    <img
                      src={product.imageUrl}
                      className="card-img-top rounded-0 objectFit"
                      alt="..."
                      height="300px"
                    />
                    <div className="card-body p-0">
                      <h4 className="mb-0 mt-3">
                        <Link to={`/product/${product.id}`}>
                          {product.title}
                        </Link>
                      </h4>

                      <p className="text-muted mt-3">NT${product.price}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <nav className="d-flex justify-content-center">
          <Pagination changePage={getProducts} pagination={pagination} />
        </nav>
      </div>
    </>
  );
}
