// import React from 'react';
// import './styles.scss';

// const Footer = props => {
//   return (
//     <footer className="footer">
//       <div className="wrap">
//         © Resturant 2021
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { ImLocation, ImFacebook2 } from "react-icons/im";
import { BsPhone } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer">
      <p
        style={{
          textAlign: "center",
          fontSize: "2rem",
          color: "gray",
          fontWeight: "600",
          letterSpacing: "5px",
        }}
      >
        CONTACT US
      </p>
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          border: "0.2px solid lightgray",
        }}
      />
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          color: "gray",
        }}
      >
        We'd
        <span>
          {" "}
          <AiOutlineHeart
            size="40px"
            style={{ color: "blue", padding: ".5rem", marginBottom: "-13px" }}
          />{" "}
        </span>{" "}
        to help!
      </div>
      <div style={{ marginBottom: "2rem", color: "gray" }}>
        Feel free to say hello...
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "500px",
            padding: "1.5rem",
          }}
        >
          <input
            style={{
              marginBottom: "1rem",
              padding: ".5rem",
              borderRadius: "5px",
              border: "1px solid blue",
              outlineColor: "blue",
            }}
            // value={name}
            // onChange={handleChangeName}
            placeholder="Your name"
            type="text"
          />
          <input
            style={{
              // maxWidth: "450px",
              marginBottom: "1rem",
              padding: ".5rem",
              borderRadius: "5px",
              border: "1px solid blue",
              outlineColor: "blue",
            }}
            placeholder="Your email"
            type="email"
            // value={email}
            // onChange={handleChangeEmail}
          />
          <textarea
            style={{
              fontFamily: "inherit",
              fontSize: "inherit",
              height: "200px",
              padding: ".5rem",
              borderRadius: "5px",
              border: "1px solid blue",
              outlineColor: "blue",
            }}
            placeholder="Your message"
            type="text"
            // value={password}
            // onChange={handleChangePassword}
          />
          <button
            style={{
              marginTop: "1rem",
              padding: ".5rem",
              border: "1px solid #fff",
              borderRadius: "8px",
              outlineColor: "blue",
              backgroundColor: "blue",
              color: "#fff",
              fontWeight: "600",
              cursor: "pointer",
            }}
            type="submit"
            // onClick={registerUser}
          >
            submit
          </button>
        </form> */}
        <div style={{ width: "500px", padding: "1.5rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ImLocation size="25px" style={{ color: "orange" }} />
            <p style={{ color: "gray" }}> India</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <BsPhone size="25px" style={{ color: "orange" }} />
            <p style={{ color: "gray" }}>+91 998765432</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <AiOutlineMail size="25px" style={{ color: "orange" }} />
            <p style={{ color: "gray" }}>foodhub123@gmail.com</p>
          </div>
          <div style={{ width: "100%", border: ".5px solid lightgray" }} />
          <div
            style={{ textAlign: "center", padding: "0.5rem", color: "gray" }}
          >
            Find us on media
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "1.5rem",
            }}
          >
            <a href="#">
              <FiInstagram size="35px" style={{ color: "orange" }} />
            </a>
            <a href="#">
              <ImFacebook2 size="35px" style={{ color: "orange" }} />
            </a>
            <a href="#">
              <AiOutlineTwitter size="35px" style={{ color: "orange" }} />
            </a>
            <a href="#">
              <AiFillLinkedin size="35px" style={{ color: "orange" }} />
            </a>
            <a href="#">
              <AiFillGoogleCircle size="35px" style={{ color: "orange" }} />
            </a>
          </div>
        </div>
      </div>
      <div style={{ width: "90%" }}>
        <div
          style={{
            border: ".5px solid lightgray",
            margin: "0px auto",
          }}
        />
        <p style={{ textAlign: "center", color: "gray", padding:"1rem" }}>
          Copyright © 2020 FoodHub. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
