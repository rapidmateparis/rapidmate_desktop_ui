import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../../assets/css/home.module.css";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/authSlice";

function DeliveryboyDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <h1>Delivery boy dashboard</h1>
      <div className={Styles.chooseContinueCard}>
        <button className={Styles.chooseContinueBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default DeliveryboyDashboard;
