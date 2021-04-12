import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReactSlider from "react-slider";
import axios from "axios";
import "./AdminGame.css";

const AdminCreateGame = (props) => {
  const [infoMessage, setInfoMessage] = useState("");
  const [valueName, setValueName] = useState("");
  const [valueSummary, setValueSummary] = useState("");
  const [valueAgeMin, setValueAgeMin] = useState(0);
  const [valueAgeMax, setValueAgeMax] = useState(0);
  const [valueDuration, setValueDuration] = useState(0);
  const [valueNumberOfPlayersMin, setValueNumberOfPlayersMin] = useState(0);
  const [valueNumberOfPlayersMax, setValueNumberOfPlayersMax] = useState(0);
  const [valueRules, setValueRules] = useState(0);
  const [valueChance, setValueChance] = useState(0);
  const [valueReflection, setValueReflection] = useState(0);
  const [valueSkill, setValueSkill] = useState(0);
  const [valueKnowledge, setValueKnowledge] = useState(0);
  const [valueAsymetric, setValueAsymetric] = useState(0);
  const [valueCollaborative, setValueCollaborative] = useState(0);
  const history = useHistory();

  const assignValue = (valueTargetted) => {
    if (valueTargetted === 0) {
      return 1;
    } else {
      return 0;
    }
  };

  const savingSubmit = (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}auth/admin/jeux/`;
    console.log(`name: ${valueName},
      summary: ${valueSummary},
      duration_min_in_minuts: ${valueDuration},
      player_nbmin: ${valueNumberOfPlayersMin},
      player_nbmax: ${valueNumberOfPlayersMax},
      player_agemin: ${valueAgeMin},
      player_agemax: ${valueAgeMax},
      collaborative: ${valueCollaborative},
      asymetric: ${valueAsymetric},
      gamerule_difficulty: ${valueRules},
      generalknowledge: ${valueKnowledge},
      chance: ${valueChance},
      reflection: ${valueReflection},
      skill: ${valueSkill}`);
    if (
      Number(valueDuration) === 0 ||
      Number(valueAgeMin) === 0 ||
      Number(valueAgeMax) === 0 ||
      Number(valueNumberOfPlayersMin) === 0 ||
      Number(valueNumberOfPlayersMax) === 0
    ) {
      setInfoMessage("Remplis tous les champs obligatoires !");
    } else if (
      valueDuration < 0 ||
      valueAgeMin < 0 ||
      valueAgeMax < 0 ||
      valueNumberOfPlayersMin < 0 ||
      valueNumberOfPlayersMax < 0
    ) {
      setInfoMessage("Cela n'aurait pas de sens d'avoir un nombre négatif !");
    } else {
      axios
        .post(
          url,
          {
            name: valueName,
            summary: valueSummary,
            duration_min_in_minuts: valueDuration,
            player_nbmin: valueNumberOfPlayersMin,
            player_nbmax: valueNumberOfPlayersMax,
            player_agemin: valueAgeMin,
            player_agemax: valueAgeMax,
            collaborative: valueCollaborative,
            asymetric: valueAsymetric,
            gamerule_difficulty: valueRules.toString(),
            generalknowledge: valueKnowledge.toString(),
            chance: valueChance.toString(),
            reflection: valueReflection.toString(),
            skill: valueSkill.toString(),
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => response.data)
        .then((newGame) => {
          setInfoMessage(
            `Le jeu "${newGame[0].name}" vient d'être créé ! N'oublie pas d'y ajouter des photos !`
          );
          setTimeout(() => history.push("/admin"), 8000);
        })
        .catch((error) => {
          setInfoMessage(error.response?.data?.error);
        });
    }
  };

  return (
    <article className="AdminGame">
      <h3>Ajouter un jeu</h3>
      <form onSubmit={savingSubmit}>
        <ul>
          <li className="error-message">{infoMessage}</li>
          <li>
            <label htmlFor="name">
              Nom du jeu* :
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nom du jeu"
                value={valueName}
                onChange={(e) => setValueName(e.target.value)}
                required
              />
            </label>
          </li>
          <li>
            <ul>
              <li className="summary">
                <label htmlFor="summary">
                  Rapide résumé :
                  <textarea
                    id="summary"
                    name="summary"
                    maxLength="600"
                    placeholder="Résumé qui donne envie de jouer"
                    value={valueSummary}
                    onChange={(e) => setValueSummary(e.target.value)}
                  />
                </label>
              </li>
              <li className="duration_min_in_minuts">
                <label className="fullwidth" htmlFor="duration_min_in_minuts">
                  Durée de la partie (en min)*
                  <input
                    id="duration_min_in_minuts"
                    name="duration_min_in_minuts"
                    type="number"
                    placeholder="10"
                    value={valueDuration}
                    onChange={(e) => setValueDuration(e.target.value)}
                    required
                  />
                </label>
              </li>
              <li className="gamerule_difficulty">
                <label className="fullwidth">
                  Difficulté de la règle du jeu*
                  <ReactSlider
                    id="gamerule_difficulty"
                    name="gamerule_difficulty"
                    className="horizontal-slider"
                    thumbClassName="thumb"
                    trackClassName="track"
                    min={0}
                    max={3}
                    onAfterChange={(state) => setValueRules(state)}
                    value={valueRules}
                    renderThumb={(props, state) =>
                      state.valueNow === 0 ? (
                        <div {...props}>?</div>
                      ) : (
                        <div {...props}>{state.valueNow}</div>
                      )
                    }
                    required
                  />
                </label>
              </li>
            </ul>
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
          <li className="players">
            <div className="several-inputs">
              <p>Age des joueurs</p>
              <label htmlFor="player_agemin">
                Minimum*
                <input
                  id="player_agemin"
                  name="player_agemin"
                  type="number"
                  placeholder="3"
                  value={valueAgeMin}
                  onChange={(e) => setValueAgeMin(e.target.value)}
                  required
                />
              </label>
              <label htmlFor="player_agemax">
                Maximum*
                <input
                  id="player_agemax"
                  name="player_agemax"
                  type="number"
                  placeholder="99"
                  value={valueAgeMax}
                  onChange={(e) => setValueAgeMax(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="several-inputs">
              <p>Nombre de joueurs</p>
              <label htmlFor="player_nbmin">
                Minimum*
                <input
                  id="player_nbmin"
                  name="player_nbmin"
                  type="number"
                  placeholder=""
                  value={valueNumberOfPlayersMin}
                  onChange={(e) => setValueNumberOfPlayersMin(e.target.value)}
                  required
                />
              </label>
              <label htmlFor="player_nbmax">
                Maximum*
                <input
                  id="player_nbmax"
                  name="player_nbmax"
                  type="number"
                  placeholder=""
                  value={valueNumberOfPlayersMax}
                  onChange={(e) => setValueNumberOfPlayersMax(e.target.value)}
                  required
                />
              </label>
            </div>
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
                onAfterChange={(state) => setValueSkill(state)}
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
                onAfterChange={(state) => setValueChance(state)}
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
                onAfterChange={(state) => setValueKnowledge(state)}
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
                onAfterChange={(state) => setValueReflection(state)}
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
          <li className="error-message">{infoMessage}</li>
          <li>
            <button type="submit" title="Enregistrer les données du jeu">
              Enregistrer
            </button>
          </li>
        </ul>
      </form>
    </article>
  );
};

export default AdminCreateGame;
