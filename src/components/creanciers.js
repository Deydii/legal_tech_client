import React, { Component } from "react";
import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import modifier from "./Icones_Arigoni/icone_modifier.png";
import { NavLink } from "react-router-dom";
import "./debiteurs";
import Axios from "axios";
//import formulairedebiteurs et formulairecreacier pour les routes

class Creanciers extends Component {
  state = {
    creanciers: [],
    creanciersFiltered: []
  };

  handleDelete() {
    console.log("pouet");
  }

  componentDidMount() {
    Axios.get("http://localhost:4848/api/creanciers")
      .then(response => {
        this.setState({
          // returns all creanciers
          creanciers: response.data,
          // returns all creanciers whose active status is true
          creanciersFiltered: response.data.filter(
            creancier => creancier.active
          )
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const myCreanciers = this.state.creanciersFiltered;
    return (
      //tableau informations des créanciers
      <div className="creancier">
        <div className="fl w-60">
          <div className="title_créancier pl4">
            <h1 className="f2 lh-copy nowrap">
              Informations sur les créanciers
            </h1>
            <h2 className="pt2 f4 lh-copy">Liste des créanciers</h2>
          </div>
        </div>
        {/* searchbar */}
        <div className="fl w-40">
          <div className="wraparigo">
            <div className="searcharigo">
              <input
                type="text"
                className="searchTerm"
                placeholder="trouver un créancier"
              />
              <button type="submit" className="searchButton">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>

        {/* tableau */}
        <div className=" tableau fl w-100 pa4 ">
          <div className="overflow-auto">
            <table className="f6 w-100 center" cellSpacing="0">
              <thead>
                <tr className="stripe-dark">
                  <th>Dénomination sociale</th>
                  <th>Forme juridique</th>
                  <th>Pays</th>
                  <th>Modifier</th>
                  <th>Supprimer</th>
                </tr>
              </thead>
              <tbody className="lh-copy">
                {myCreanciers.map(creancier => {
                  return (
                    <tr
                      className="stripe-dark"
                      key={creancier.denomination_sociale}
                    >
                      <td>{creancier.denomination_sociale}</td>
                      <td>{creancier.forme_juridique}</td>
                      <td>{creancier.pays_siege}</td>
                      <td>
                        <img
                          className="icone pointer"
                          src={modifier}
                          alt="modifier"
                        />
                      </td>
                      <td>
                        <img
                          className="icone pointer"
                          src={supprimer}
                          alt="supprimer"
                          onClick={this.handleDelete}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Button créer un créancier */}
            <div className="buttoncreancier tc pt4">
              <NavLink
                to="/dashboard/formCreancier"
                className="f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue "
                onClick={() => this.props.pageChangeSub("FormCreancier")}
              >
                Créer un créancier
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Creanciers;
