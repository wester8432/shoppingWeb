import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState({});
  const [data, setData] = useState({ name: "", password: "" });

  const dataInput = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  //登入按鈕的方法
  const submit = async (event) => {
    try {
      const res = await axios.post("/v2/admin/signin", data);
      console.log(res);
      const { token, expired } = res.data;

      //儲存token
      document.cookie = `SixCornerToken=${token}; expires=${new Date(expired)}`;

      if (res.data.success) {
        navigate("/admin");
      }
    } catch (error) {
      setLoginState(error.response.data);
    }
  };

  return (
    <div className="container" style={{ paddingTop: "200px" }}>
      <div className="row justify-content-center ">
        <div className="col-md-6">
          <h2>登入帳號</h2>

          <div
            className={`alert alert-danger ${
              loginState.message ? "d-block" : "d-none"
            }`}
            role="alert"
          >
            {loginState.message}
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label w-100">
              帳號
              <input
                id="email"
                className="form-control"
                name="username"
                type="email"
                placeholder="Account"
                onChange={dataInput}
              />
            </label>
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label w-100">
              密碼
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Password"
                onChange={dataInput}
              />
            </label>
          </div>
          <button type="button" className="btn btn-primary" onClick={submit}>
            登入
          </button>
        </div>
      </div>
    </div>
  );
}
