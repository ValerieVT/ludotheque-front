import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = ({ ifConnected, setIfConnected }) => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { identifier, password };
    axios
      .post(`${process.env.REACT_APP_API_URL}auth/login`, payload, {
        withCredentials: true,
      })
      .then((res) => {
        setIfConnected(true);
        history.push("/admin");
      })
      .catch((error) => {
        setErrorMessage(error.response?.data?.error);
      });
  };

  return (
    <form className="Login" onSubmit={handleSubmit}>
      <h2>Connecte-toi pour ajouter ou modifier des jeux&nbsp;!</h2>
      <p className="error-message">{errorMessage}</p>

      <label htmlFor="identifier">
        Identifiant&nbsp;:
        <input
          id="identifier"
          type="text"
          name="identifier"
          placeholder="Magnus_Carlsen"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
        />
      </label>

      <label htmlFor="password">
        Mot de passe&nbsp;:
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button type="submit">Je me connecte&nbsp;!</button>
    </form>
  );
};

export default Login;
