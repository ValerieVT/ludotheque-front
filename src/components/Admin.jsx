import React from "react";

const Admin = () => {
  return (
    <article className="Admin">
      <p>Avant toute chose !</p>
      <p>Etape 1</p>
      <h2>Chercher si ton jeu est déjà en base</h2>
      <form>
        <label htmlFor="jeuEnStock">
          <input type="text"></input>
        </label>
        <button type="submit">Go !</button>
      </form>
    </article>
  );
};

export default Admin;
