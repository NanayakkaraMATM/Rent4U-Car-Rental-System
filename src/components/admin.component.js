import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import "../styles/adminLogin.css";
import { useNavigate } from "react-router-dom";
import auth_service from "../service/auth_service";

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Home = () => {
    navigate("/");
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email & Password: ", email + " " + password);
    auth_service.adminLogin(email, password).then(
      (data) => {
        console.log(data);

        if (data.role === "admin") {
          alert("Admin login Success!");
          navigate("/admin-dashboard");
        }
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        alert(resMessage);
      }
    );
  };
  const navigate = useNavigate();
  return (
    <div>
      <body className="bodyb">
        <style type="text/css">{`.navlink {display:none}`}</style>
        <style type="text/css">{`.navbar {display:none}`}</style>
        <style type="text/css">{`.navbar1 {display:none}`}</style>
        <style type="text/css">{`.main-container {display:none}`}</style>
        <style type="text/css">{`.sidebar {display:none}`}</style>
        <style type="text/css">{`.top_section {display:none}`}</style>
        <MainContainer>
          <WelcomeText>Admin Login</WelcomeText>

          <InputContainer>
            <Input
              type="text"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={onChangeEmail}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
          </InputContainer>

          <ButtonContainer>
            <Button content="Login" onClick={handleLogin} />
          </ButtonContainer>
        </MainContainer>
        ;
      </body>
    </div>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #b8390e;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-weight: bold;
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  font-style: Verdana;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30%;
  width: 200%;
`;

const ButtonContainer = styled.div`
  margin: 5rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Admin;
