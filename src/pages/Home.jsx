import React, { useState } from "react";
import TopBar from "../components/TopBar";

const Home = () => {
  const [dates, setDates] = useState({});
  const [matches] = useState(window.matchMedia("(max-width: 950px)").matches);
  console.log(matches);

  return (
    <>
      <div className="home_page">
        <TopBar />
        <button className="print" type="button" onClick={() => window.print()}>
          <i className="fa fa-print"></i>
        </button>
        <div className="intiule_filiere">
          FILIERE : <span>Hello World</span>
        </div>
        <div className="intiule_week">
          Semaine:{" "}
          <span style={{ color: "var(--danger)" }}>Du 10 au 17 mai 2021</span>
        </div>
        <div className="container">
          {matches ? (
            <div className="content_days">
              <div className="title_day">lundi</div>
              <div className="content_hour">
                <div className="hour">8H - 10H</div>
                <div className="info_day">
                  <span>Analyse matematique</span>
                  <span>Mr Dimy Senpai</span>
                  <span>C203</span>
                </div>
              </div>
              <div className="content_hour">
                <div className="hour">8H - 10H</div>
                <div className="info_day">
                  <span>Analyse matematique</span>
                  <span>Mr Dimy Senpai</span>
                  <span>C203</span>
                </div>
              </div>
              <div className="content_hour">
                <div className="hour">8H - 10H</div>
                <div className="info_day">
                  <span>Analyse matematique</span>
                  <span>Mr Dimy Senpai</span>
                  <span>C203</span>
                </div>
              </div>
            </div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Heure</th>
                  <th>08H - 10H</th>
                  <th>10H - 12H</th>
                  <th>13H - 15H</th>
                  <th>15H - 17H</th>
                  <th>17H - 19H</th>
                  <th>19H - 21H</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="day">Lundi</td>
                  <td>
                    <span>Analyse matematique</span>
                    <span>Mr Dimy Senpai</span>
                    <span>C203</span>
                  </td>
                  <td>
                    <span>Analyse matematique</span>
                    <span>Mr Dimy Senpai</span>
                    <span>C203</span>
                  </td>
                  <td>
                    <span>Analyse matematique</span>
                    <span>Mr Dimy Senpai</span>
                    <span>C203</span>
                  </td>
                  <td>
                    <span>Analyse matematique</span>
                    <span>Mr Dimy Senpai</span>
                    <span>C203</span>
                  </td>
                  <td>
                    <span>Analyse matematique</span>
                    <span>Mr Dimy Senpai</span>
                    <span>C203</span>
                  </td>
                  <td>
                    <span>Analyse matematique</span>
                    <span>Mr Dimy Senpai</span>
                    <span>C203</span>
                  </td>
                </tr>

                <tr>
                  <td className="day">Mardi</td>
                  <td>
                    <span>Analyse matematique</span>
                    <span>Mr Dimy Senpai</span>
                    <span>C203</span>
                  </td>
                  <td>
                    <span>Analyse matematique</span>
                    <span>Mr Dimy Senpai</span>
                    <span>C203</span>
                  </td>
                  <td>
                    <span>Analyse matematique</span>
                    <span>Mr Dimy Senpai</span>
                    <span>C203</span>
                  </td>
                  <td>
                    <span>Analyse matematique</span>
                    <span>Mr Dimy Senpai</span>
                    <span>C203</span>
                  </td>
                  <td>
                    <span>Analyse matematique</span>
                    <span>Mr Dimy Senpai</span>
                    <span>C203</span>
                  </td>
                  <td>
                    <span>Analyse matematique</span>
                    <span>Mr Dimy Senpai</span>
                    <span>C203</span>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
          <div className="footer_nb">
            NB: Les étudiants sont invités à consulter régulièrement le tableau
            d'affichage car des modifications pourront etre apportées aux
            emplois de temps.
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
