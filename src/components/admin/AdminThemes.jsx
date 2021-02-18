import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AdminThemes.css";

const AdminThemes = () => {
  const [listOfThemes, setListOfThemes] = useState([]);
  const [infoMessage, setInfoMessage] = useState("");
  const [newTheme, setNewTheme] = useState("");

  const getThemes = () => {
    const url = `${process.env.REACT_APP_API_URL}themes`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((arrayOfTemes) => {
        setListOfThemes(arrayOfTemes);
      })
      .catch((error) => {
        setInfoMessage(error.response?.data?.error);
      });
  };

  useEffect(() => {
    getThemes();
  }, []);

  const addNewThemeByKeyboard = (event) => {
    const url = `${process.env.REACT_APP_API_URL}auth/admin/themes/${newTheme}`;
    axios
      .post(url)
      .then((response) => response.data)
      .then(getThemes, setNewTheme(""), setInfoMessage("Thème ajouté !"))
      .catch((error) => {
        setInfoMessage(error.response?.data?.error);
      });
  };

  const addNewTheme = (click) => {
    const url = `${process.env.REACT_APP_API_URL}auth/admin/themes/${newTheme}`;
    axios
      .post(url)
      .then((response) => response.data)
      .then(getThemes, setNewTheme(""))
      .catch((error) => {
        setInfoMessage(error.response?.data?.error);
      });
  };

  return (
    <article className="AdminThemes">
      <h3>Gérer les thèmes</h3>
      <ul className="themes">
        {listOfThemes !== []
          ? listOfThemes.map((theme) => (
              <Link to={`/themes/${theme.id}/jeux`} key={theme.id}>
                <li>{theme.name}</li>
              </Link>
            ))
          : ""}
      </ul>
      <div className="new-theme">
        <label htmlFor="name">
          Ajouter un thème :
          <input
            type="text"
            id="name"
            name="name"
            value={newTheme}
            onChange={(e) => setNewTheme(e.target.value)}
            placeholder="Mon nouveau thème"
          ></input>
        </label>
        <button
          type="button"
          onClick={addNewTheme}
          onKeyDown={addNewThemeByKeyboard}
        >
          Ajouter !
        </button>
        <p className="error-message">{infoMessage}</p>
      </div>
    </article>
  );
};

export default AdminThemes;
