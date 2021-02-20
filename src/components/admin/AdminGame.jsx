import React, { useState, useEffect } from "react";
import ReactSlider from "react-slider";
import "./AdminGame.css";

const AdminGame = () => {
  const [infoMessage, setInfoMessage] = useState("");
  const [valueName, setValueName] = useState("");
  const [valueAgeMin, setValueAgeMin] = useState();
  const [valueAgeMax, setValueAgeMax] = useState();
  const [valueDuration, setValueDuration] = useState(0);
  const [valueNumberOfPlayersMin, setValueNumberOfPlayersMin] = useState(0);
  const [valueNumberOfPlayersMax, setValueNumberOfPlayersMax] = useState(0);
  const [valueRules, setValueRules] = useState(0);
  const [valueChance, setValueChance] = useState(0);
  const [valueReflection, setValueReflection] = useState(0);
  const [valueSkill, setValueSkill] = useState(0);
  const [valueKnowledge, setValueKnowledge] = useState(0);
  const [valueAsymetric, setValueAsymetric] = useState();
  const [valueCollaborative, setValueCollaborative] = useState();

  const assignValue = (valueTargetted) => {
    if (valueTargetted === 0) {
      return 1;
    } else {
      return 0;
    }
  };

  return (
    <article className="AdminGame">
      <h3>Ajouter ou modifier un jeu</h3>
      <form>
        <ul>
          <li>
            <label htmlFor="name">
              Tu as sélectionné :
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nom du jeu"
                value={valueName}
                onChange={(e) => setValueName(assignValue(valueName))}
              />
            </label>
          </li>
          <li>
            <label htmlFor="summary">
              Rapide résumé :
              <textarea
                id="summary"
                name="summary"
                maxlength="600"
                placeholder="Résumé qui donne envie de jouer"
              />
            </label>
          </li>
          <li className="type-of-team">
            <input
              type="checkbox"
              id="asymetric"
              name="typeOfTeam"
              value={valueAsymetric}
              onChange={(e) => setValueAsymetric(assignValue(valueAsymetric))}
            />
            <label htmlFor="asymetric">
              <img
                src="../../../logos/asymetrique.svg"
                alt="jeux asymétriques"
              />
              Asymétrique
            </label>
            <input
              type="checkbox"
              id="collaborative"
              name="typeOfTeam"
              value={valueCollaborative}
              onChange={(e) =>
                setValueCollaborative(assignValue(valueCollaborative))
              }
            />
            <label htmlFor="collaborative">
              <img src="../../../logos/cooperatif.svg" alt="jeux coopératifs" />
              Coopératif
            </label>
          </li>
          <li>
            <label className="fullwidth" htmlFor="duration_min_in_minuts">
              Durée de la partie (en minutes)
              <input
                id="duration_min_in_minuts"
                name="duration_min_in_minuts"
                type="number"
                placeholder="10"
                value={valueDuration}
                onChange={(e) => setValueDuration(e.target.value)}
              />
            </label>
          </li>
          <li className="players">
            <div className="several-inputs">
              <p>Age des joueurs</p>
              <label htmlFor="player_agemin">
                Minimum
                <input
                  id="player_agemin"
                  name="player_agemin"
                  type="number"
                  placeholder="3"
                  value={valueAgeMin}
                  onChange={(e) => setValueAgeMin(e.target.value)}
                />
              </label>
              <label htmlFor="player_agemax">
                Maximum
                <input
                  id="player_agemax"
                  name="player_agemax"
                  type="number"
                  placeholder="99"
                  value={valueAgeMax}
                  onChange={(e) => setValueAgeMax(e.target.value)}
                />
              </label>
            </div>
            <div className="several-inputs">
              <p>Nombre de joueurs</p>
              <label htmlFor="player_nbmin">
                Minimum
                <input
                  id="player_nbmin"
                  name="player_nbmin"
                  type="number"
                  placeholder="1"
                  value={valueNumberOfPlayersMin}
                  onChange={(e) => setValueNumberOfPlayersMin(e.target.value)}
                />
              </label>
              <label htmlFor="player_nbmax">
                Maximum
                <input
                  id="player_nbmax"
                  name="player_nbmax"
                  type="number"
                  placeholder="8"
                  value={valueNumberOfPlayersMax}
                  onChange={(e) => setValueNumberOfPlayersMax(e.target.value)}
                />
              </label>
            </div>
          </li>
          <li>
            <label className="fullwidth">
              Difficulté de la règle du jeu
              <ReactSlider
                id="gamerule_difficulty"
                name="gamerule_difficulty"
                className="horizontal-slider"
                thumbClassName="thumb"
                trackClassName="track"
                min={1}
                max={3}
                onAfterChange={(state) => setValueRules(state.valueNow)}
                value={valueRules}
                renderThumb={(props, state) => (
                  <div {...props}>{state.valueNow}</div>
                )}
              />
            </label>
          </li>
          <li className="skills-full-half">
            <label className="skill">
              Adresse
              <ReactSlider
                id="skill"
                name="skill"
                className="horizontal-slider"
                thumbClassName="thumb"
                trackClassName="track"
                min={0}
                max={3}
                onAfterChange={(state) => setValueSkill(state.valueNow)}
                value={valueSkill}
                renderThumb={(props, state) => (
                  <div {...props}>{state.valueNow}</div>
                )}
              />
            </label>
            <label className="skill">
              Chance
              <ReactSlider
                id="chance"
                name="chance"
                className="horizontal-slider"
                thumbClassName="thumb"
                trackClassName="track"
                min={0}
                max={3}
                onAfterChange={(state) => setValueChance(state.valueNow)}
                value={valueChance}
                renderThumb={(props, state) => (
                  <div {...props}>{state.valueNow}</div>
                )}
              />
            </label>
            <label className="skill">
              Culture générale
              <ReactSlider
                id="generalknowledge"
                name="generalknowledge"
                className="horizontal-slider"
                thumbClassName="thumb"
                trackClassName="track"
                min={0}
                max={3}
                onAfterChange={(state) => setValueKnowledge(state.valueNow)}
                value={valueKnowledge}
                renderThumb={(props, state) => (
                  <div {...props}>{state.valueNow}</div>
                )}
              />
            </label>
            <label className="skill">
              Réflexion
              <ReactSlider
                id="reflexion"
                name="reflexion"
                className="horizontal-slider"
                thumbClassName="thumb"
                trackClassName="track"
                min={0}
                max={3}
                onAfterChange={(state) => setValueReflection(state.valueNow)}
                value={valueReflection}
                renderThumb={(props, state) => (
                  <div {...props}>{state.valueNow}</div>
                )}
              />
            </label>
          </li>
          <li className="skills-full-half">
            <p>Images :</p>
            <img src="https://picsum.photos/500/500" alt="" />
          </li>
          <li>
            <button type="submit" title="Enregistrer les données du jeu">
              Enregistrer
            </button>
          </li>
        </ul>
      </form>
      <p>{infoMessage}</p>
    </article>
  );
};

export default AdminGame;
