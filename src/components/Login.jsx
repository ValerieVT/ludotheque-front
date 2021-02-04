import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AuthContext from "./contexts/auth";
import "./Login.css";

export default function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { user, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { identifier, password };
    axios
      .post("http://localhost:5000/api/auth/login", payload, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .then(() => {
        history.push("/admin");
      });
  };

  if (user) return <Redirect to="/" />;

  return (
    <form className="Login" onSubmit={handleSubmit}>
      <h2>Connecte-toi pour ajouter ou modifier des jeux&nbsp;!</h2>

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
}
