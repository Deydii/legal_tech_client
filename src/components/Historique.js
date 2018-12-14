import React from "react";
import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import download from "./Icones_Arigoni/icone_upload.png";
import "./Historique.css";
class Historique extends React.Component {
  render() {
    return (
      <div>
        <div className="fl w-100">
          <div className="title_débiteur pl4">
            <h1 className="f2 tc lh-copy"> Historique des actions </h1>
          </div>

          <div className="fl w-100 pt2 ">
            {/* checkbox */}
            <div className="fl w-100 tc">
              <span className="pr2"> Actions en cours </span>
              <input type="checkbox" name="MED" value="MED" />
              <span className="pr2 pl4"> Actions cloturées </span>
              <input type="checkbox" name="injonction" value="injonction" />
            </div>
            <div className="fl w-40" />
          </div>
          {/* tableau */}
          <div className="fl w-100 pa5 ">
            <div className="overflow-auto">
              <table className="f6 w-100 center" cellSpacing="0">
                <thead>
                  <tr className="stripe-dark">
                    <th className="fw6 tl pa3 bg-white">Date</th>
                    <th className="fw6 tl pa3 bg-white">xxxxxx</th>
                    <th className="fw6 tl pa3 bg-white">xxxxxx</th>
                    <th className="fw6 tl pa3 bg-white">xxxxxx</th>
                    <th className="fw6 tl pa3 bg-white">Avancée de l'action</th>
                    <th className="fw6 tl pa3 bg-white">xxxxxx</th>
                    <th className="fw6 tl pa3 bg-white">xxxxxx</th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  <tr className="stripe-dark">
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>

                    <td className="pa3">
                      <button className="button">cloturer</button>
                    </td>
                    <td className="pa3">
                      <img
                        className="icone pointer"
                        src={supprimer}
                        alt="supprimer"
                      />
                    </td>
                    <td className="pa3">
                      <img
                        className="icone download pointer"
                        src={download}
                        alt="download"
                      />
                    </td>
                  </tr>
                  <tr className="stripe-white">
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>

                    <td className="pa3">
                      <button className="button">cloturer</button>
                    </td>
                    <td className="pa3">
                      <img
                        className="icone pointer"
                        src={supprimer}
                        alt="supprimer"
                      />
                    </td>
                    <td className="pa3">
                      <img
                        className="icone download pointer"
                        src={download}
                        alt="download"
                      />
                    </td>
                  </tr>
                  <tr className="stripe-dark">
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>

                    <td className="pa3">
                      <button className="button">cloturer</button>
                    </td>
                    <td className="pa3">
                      <img
                        className="icone pointer"
                        src={supprimer}
                        alt="supprimer"
                      />
                    </td>
                    <td className="pa3">
                      <img
                        className="icone download pointer"
                        src={download}
                        alt="download"
                      />
                    </td>
                  </tr>
                  <tr className="stripe-dark">
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>

                    <td className="pa3">
                      <button className="button">cloturer</button>
                    </td>
                    <td className="pa3">
                      <img
                        className="icone pointer"
                        src={supprimer}
                        alt="supprimer"
                      />
                    </td>
                    <td className="pa3">
                      <img
                        className="icone download pointer"
                        src={download}
                        alt="download"
                      />
                    </td>
                  </tr>
                  <tr className="stripe-dark">
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>

                    <td className="pa3">
                      <button className="button">cloturer</button>
                    </td>
                    <td className="pa3">
                      <img
                        className="icone pointer"
                        src={supprimer}
                        alt="supprimer"
                      />
                    </td>
                    <td className="pa3">
                      <img
                        className="icone download pointer"
                        src={download}
                        alt="download"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Historique;
