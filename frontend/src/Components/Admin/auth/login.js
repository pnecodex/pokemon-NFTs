import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { adminLogin } from '../../../Actions/adminAuthAction';

const Login = () => {
  const dispatch = useDispatch();
  const { error, loading, access } = useSelector((state) => state.admin);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const adminToken = localStorage.getItem('token');
  const history = useHistory();
  if (adminToken) {
    history.push("/admin/dashboard")
  }
  const Login = async (e) => {
    e.preventDefault();
    await dispatch(adminLogin(Email, Password));
    history.push("/admin/dashboard");
  }
  return (
    <div className="card card-info mt-5 title-white" style={{ width: "700px", margin: "auto", background: "hsl(229deg 19% 17%)", color: 'white' }}>
      <div className="card-header bg-dark">
        <h3 className="card-title">Admin Login</h3>
        <h3 className="card-title float-right">NFTs MyPoke</h3>
      </div>
      <form className="form" onSubmit={Login}>
        <div className="card-body">
          <div className="form-group ">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                name="email"
                placeholder="Email"
                required
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group ">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                placeholder="password"
                required
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                <label className="form-check-label" htmlFor="exampleCheck2">Remember me</label>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-info">Sign in</button>
        </div>
      </form>
    </div>

  );

}

export default Login;