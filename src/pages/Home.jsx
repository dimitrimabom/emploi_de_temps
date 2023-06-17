import React, { useState } from "react";
import SideMenu from "../components/SideMenu";
import TopBar from "../components/TopBar";

const Home = () => {
  const [dates, setDates] = useState({
    "08H-10H": {
      Lundi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Mardi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Mercredi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Jeudi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Vendredi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Samedi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Dimanche: {
        salle: "C-101",
        matiere: "mathematique",
      },
    },
    "10H - 12H": {
      Lundi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Mardi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Mercredi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Jeudi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Vendredi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Samedi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Dimanche: {
        salle: "C-101",
        matiere: "mathematique",
      },
    },
    "13H - 15H": {
      Lundi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Mardi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Mercredi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Jeudi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Vendredi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Samedi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Dimanche: {
        salle: "C-101",
        matiere: "mathematique",
      },
    },
    "15H - 17H": {
      Lundi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Mardi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Mercredi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Jeudi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Vendredi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Samedi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Dimanche: {
        salle: "C-101",
        matiere: "mathematique",
      },
    },
    "17H - 19H": {
      Lundi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Mardi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Mercredi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Jeudi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Vendredi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Samedi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Dimanche: {
        salle: "C-101",
        matiere: "mathematique",
      },
    },
    "19H - 21H": {
      Lundi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Mardi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Mercredi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Jeudi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Vendredi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Samedi: {
        salle: "C-101",
        matiere: "mathematique",
      },
      Dimanche: {
        salle: "C-101",
        matiere: "mathematique",
      },
    },
  });

  return (
    <div className="home_page">
      <SideMenu />
      <div className="center_homepage">
        <TopBar />
        <div></div>
        {/* <div className="intiule_filiere">FILIERE : GENIE LOGICIEL</div> */}
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
            {/* BEGIN */}
            {Object.keys(dates).map((time) => (
              <>
                <div className="hour">{time}</div>
                {Object.keys(dates[time]).map((day) => (
                  <div className="matiere">
                    <span>{dates[time][day].matiere}</span>
                    <span className="salle">{dates[time][day].salle}</span>
                  </div>
                ))}
              </>
            ))}
            {/* END */}
          </div>
          <div className="footer_nb">
            NB: Les étudiants sont invités à consulter régulièrement le tableau
            d'affichage car des modifications pourront etre apportées aux
            emplois de temps.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
