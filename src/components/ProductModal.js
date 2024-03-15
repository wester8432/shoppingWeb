import axios from "axios";
import { useEffect, useState, useContext } from "react";
import {
  MessageContext,
  handleSuccessMessage,
  handleErrorMessage,
} from "../store/messageStore";

export default function ProductModal({
  closeProductModal,
  getProducts,
  type,
  tempProduct,
}) {
  const [, dispatch] = useContext(MessageContext);
  //空的產品MODAL
  const [tempData, setTempData] = useState({
    title: "",
    category: "",
    origin_price: 100,
    price: 300,
    unit: "",
    description: "",
    content: "",
    is_enabled: 1,
    imageUrl: "",
    imagesUrl: [],
  });

  //判斷是新增的MODAL還是編輯的MODAL
  useEffect(() => {
    if (type === "create") {
      setTempData({
        title: "",
        category: "",
        origin_price: 100,
        price: 300,
        unit: "",
        description: "",
        content: "",
        is_enabled: 1,
        imageUrl: "",
        imagesUrl: [],
      });
    } else if (type === "edit") {
      setTempData(tempProduct);
    }
  }, [type, tempProduct]);

  // const onFileUpload = (event) => {
  //   console.log(event.target.files[0]);
  // };

  //更改產品資訊
  const tempDataChange = (event) => {
    const { name, value } = event.target;
    if (["price", "origin_price"].includes(name)) {
      setTempData({
        ...tempData,
        [name]: Number(value),
      });
    } else if (name === "is_enabled") {
      setTempData({
        ...tempData,
        [name]: +event.target.checked,
      });
    } else {
      setTempData({
        ...tempData,
        [name]: value,
      });
    }
  };

  const submit = async () => {
    try {
      let api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/product`;
      let method = "post";

      if (type === "edit") {
        api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/product/${tempProduct.id}`;
        method = "put";
      }
      const res = await axios[method](api, { data: tempData });
      console.log(res);
      handleSuccessMessage(dispatch, res);
      closeProductModal();
      getProducts();
    } catch (error) {
      handleErrorMessage(dispatch, error);
    }
  };

  const fd = new FormData();
  const imgSubmit = async () => {
    try {
      const imgRes = await axios.post(
        `/v2/api/${process.env.REACT_APP_API_PATH}/admin/upload`,
        fd
      );
      setTempData.imageUrl = imgRes;
      console.log(imgRes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      id="productModal"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {type === "create" ? "建立新商品" : `編輯 ${tempData.title}`}
            </h1>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeProductModal}
            />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <div className="form-group mb-2">
                  <label className="w-100" htmlFor="imageUrl">
                    輸入圖片網址
                    <input
                      type="text"
                      name="imageUrl"
                      id="image"
                      placeholder="請輸入圖片連結"
                      className="form-control"
                      value={tempData.imageUrl}
                      onChange={tempDataChange}
                    />
                  </label>
                </div>
                <div className="form-group mb-2">
                  <label className="w-100" htmlFor="customFile">
                    或 上傳圖片
                    <form
                      action="/api/thisismycourse2/admin/upload"
                      encType="multipart/form-data"
                      method="post"
                      onSubmit={imgSubmit}
                    >
                      <input
                        type="file"
                        name="file-to-upload"
                        onChange={(event) => {
                          const object = {};
                          let file = event.target.files[0];
                          fd.append("file-to-upload", file);
                          fd.forEach((value, key) => {
                            object[key] = value;
                          });
                          console.log("upload", object);
                        }}
                      />
                      <input type="submit" value="Upload" />
                    </form>
                    {/* <input
                      type="file"
                      id="customFile"
                      className="form-control"
                      onChange={(event) => {
                        console.log("上傳資料", event.target.files[0]);
                      }} */}
                  </label>
                </div>
                <img src={tempData.imageUrl} alt="" className="img-fluid" />
              </div>
              <div className="col-sm-8">
                <div className="form-group mb-2">
                  <label className="w-100" htmlFor="title">
                    標題
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="請輸入標題"
                      className="form-control"
                      value={tempData.title}
                      onChange={tempDataChange}
                    />
                  </label>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-md-6">
                    <label className="w-100" htmlFor="category">
                      分類
                      <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="請輸入分類"
                        className="form-control"
                        value={tempData.category}
                        onChange={tempDataChange}
                      />
                    </label>
                  </div>
                  <div className="form-group mb-2 col-md-6">
                    <label className="w-100" htmlFor="unit">
                      單位
                      <input
                        type="unit"
                        id="unit"
                        name="unit"
                        placeholder="請輸入單位"
                        className="form-control"
                        value={tempData.unit}
                        onChange={tempDataChange}
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-md-6">
                    <label className="w-100" htmlFor="origin_price">
                      原價
                      <input
                        type="number"
                        id="origin_price"
                        name="origin_price"
                        placeholder="請輸入原價"
                        className="form-control"
                        value={tempData.origin_price}
                        onChange={tempDataChange}
                      />
                    </label>
                  </div>
                  <div className="form-group mb-2 col-md-6">
                    <label className="w-100" htmlFor="price">
                      售價
                      <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="請輸入售價"
                        className="form-control"
                        value={tempData.price}
                        onChange={tempDataChange}
                      />
                    </label>
                  </div>
                </div>
                <hr />
                <div className="form-group mb-2">
                  <label className="w-100" htmlFor="description">
                    產品描述
                    <textarea
                      type="text"
                      id="description"
                      name="description"
                      placeholder="請輸入產品描述"
                      className="form-control"
                      value={tempData.description}
                      onChange={tempDataChange}
                    />
                  </label>
                </div>
                <div className="form-group mb-2">
                  <label className="w-100" htmlFor="content">
                    說明內容
                    <textarea
                      type="text"
                      id="content"
                      name="content"
                      placeholder="請輸入產品說明內容"
                      className="form-control"
                      value={tempData.content}
                      onChange={tempDataChange}
                    />
                  </label>
                </div>
                <div className="form-group mb-2">
                  <div className="form-check">
                    <label
                      className="w-100 form-check-label"
                      htmlFor="is_enabled"
                    >
                      是否啟用
                      <input
                        type="checkbox"
                        id="is_enabled"
                        name="is_enabled"
                        placeholder="請輸入產品說明內容"
                        className="form-check-input"
                        checked={!!tempData.is_enabled}
                        onChange={tempDataChange}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeProductModal}
            >
              關閉
            </button>
            <button type="button" className="btn btn-primary" onClick={submit}>
              儲存
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
