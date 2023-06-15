import React from "react";
import SideMenu from "../components/SideMenu";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <div className="home_page">
      <SideMenu />
      <div className="center_homepage">
        <TopBar />
        <div className="intiule_filiere">FILIERE : GENIE LOGICIEL</div>
        <div className="intiule_week">
          Semaine:{" "}
          <span style={{ color: "var(--danger)" }}>Du 10 au 17 mai 2021</span>
        </div>
        <div className="container">
          <div className="row">
            <div className="hour">Heure</div>
            <div className="day">Lundi</div>
            <div className="day">Mardi</div>
            <div className="day">Mercredi</div>
            <div className="day">Jeudi</div>
            <div className="day">Vendredi</div>
            <div className="day">Samedi</div>
            <div className="day">Dimanche</div>
          </div>
          <div className="row">
            <div className="hour">08H - 09H</div>
            <div className="matiere">
              <span>Lundi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Mardi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Mercredi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Jeudi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Vendredi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Samedi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Dimanche</span>
              <span className="salle">C - 201</span>
            </div>

            <div className="hour">08H - 09H</div>
            <div className="matiere">
              <span>Lundi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Mardi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Mercredi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Jeudi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Vendredi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Samedi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Dimanche</span>
              <span className="salle">C - 201</span>
            </div>

            <div className="hour">08H - 09H</div>
            <div className="matiere" style={{ gridRow: "span 2" }}>
              <span>Lundi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Mardi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Mercredi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Jeudi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Vendredi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Samedi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Dimanche</span>
              <span className="salle">C - 201</span>
            </div>

            <div className="hour">08H - 09H</div>

            <div className="matiere">
              <span>Mardi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Mercredi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Jeudi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Vendredi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Samedi</span>
              <span className="salle">C - 201</span>
            </div>
            <div className="matiere">
              <span>Dimanche</span>
              <span className="salle">C - 201</span>
            </div>
          </div>
        </div>

        <div className="footer_nb">
          NB: Les étudiants sont invités à consulter régulièrement le tableau
          d'affichage car des modifications pourront etre apportées aux emplois
          de temps.
        </div>
      </div>
    </div>
  );
};

export default Home;
