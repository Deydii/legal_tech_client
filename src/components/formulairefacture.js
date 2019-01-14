import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import previous from "./Icones_Arigoni/previous.svg";
import "./Facture.css";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class Formulairefacture extends Component {
  state = {
    factures: [],
    facturesFiltered: [],
    myReloadCounter: 0,
    num_commande: "",
    num_confirmation_commande: "",
    num_document_transport: "",
    num_facture: "",
    date_facture: "",
    montant_ht: "",
    montant_ttc: "",
    echeance_facture: "",
    taux_applicable: 0,
    intérets_capitalises: 0,
    actionId: this.props.actionId,
    active: true
  };

  handleMyUserInputs = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    confirmAlert({
      title: "Merci de confirmer",
      message: "Voulez-vous vraiment enregistrer cette nouvelle facture ?",
      buttons: [
        {
          label: "Oui",
          onClick: () =>
            axios
              .post("http://localhost:4848/api/factures", this.state)
              .then(response => {
                this.props.pageChangeSub(
                  "EditAction",
                  0,
                  0,
                  this.props.actionId,
                  this.props.creancier,
                  this.props.debiteur
                );
                this.props.history.push("/dashboard/EditAction");
                console.log(response);
              })
              .catch(error => {
                console.log(error);
              })
        },
        {
          label: "Non"
        }
      ]
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:4848/api/factures")
      .then(response => {
        this.setState({
          // returns all factures
          factures: response.data,
          // returns all factures whose active status is true
          facturesFiltered: response.data.filter(facture => facture.active)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div className="ml4">
          <NavLink
            to="/dashboard/EditAction"
            onClick={() =>
              this.props.pageChangeSub(
                "EditAction",
                0,
                0,
                this.props.actionId,
                this.props.creancier,
                this.props.debiteur
              )
            }
          >
            <img className="previousbutton" src={previous} alt="previous" />
          </NavLink>
        </div>
        <div className="fl w-100">
          <h2 className="ml5">Nouvelle facture</h2>
          <form className="pa4 ml4 mt4">
            <div>
              <div>
                <div className="pa2 b">N° de commande</div>
                <input
                  className="white-dark pa1"
                  type="text"
                  name="num_commande"
                  placeholder=""
                  onChange={this.handleMyUserInputs}
                />
              </div>
            </div>
            <div className="">
              <div>
                <div className="pa2 b">N° de confirmation de commande</div>
                <input
                  className="white-dark pa1"
                  type="text"
                  name="num_confirmation_commande"
                  placeholder=""
                  onChange={this.handleMyUserInputs}
                />
              </div>
            </div>
            <div className="">
              <div>
                <div className=" pa2 b">N° document de transport</div>
                <input
                  className="white-dark pa1"
                  type="text"
                  name="num_document_transport"
                  placeholder=""
                  onChange={this.handleMyUserInputs}
                />
              </div>
            </div>
            <div className="">
              <div>
                <div className=" pa2 b">N° facture</div>
                <input
                  className="white-dark pa1"
                  type="text"
                  name="num_facture"
                  placeholder=""
                  onChange={this.handleMyUserInputs}
                />
              </div>
            </div>
            <div className="">
              <div>
                <div className=" pa2 b">Date facture</div>
                <input
                  className="white-dark pa1"
                  type="text"
                  name="date_facture"
                  placeholder=""
                  onChange={this.handleMyUserInputs}
                />
              </div>
            </div>
            <div className="">
              <div>
                <div className=" pa2 b">Montant HT de la facture</div>
                <input
                  className="white-dark pa1"
                  type="text"
                  name="montant_ht"
                  placeholder=""
                  onChange={this.handleMyUserInputs}
                />
              </div>
            </div>
            <div className="">
              <div>
                <div className=" pa2 b">Montant TTC de la facture</div>
                <input
                  className="white-dark pa1"
                  type="text"
                  name="montant_ttc"
                  placeholder=""
                  onChange={this.handleMyUserInputs}
                />
              </div>
            </div>
            <div className="">
              <div>
                <div className=" pa2 b">Echeance de la facture</div>
                <input
                  className="white-dark pa1"
                  type="text"
                  name="echeance_facture"
                  placeholder=""
                  onChange={this.handleMyUserInputs}
                />
              </div>
            </div>
          </form>
          <div className="buttonsauvegarder tc pt1">
            <a
              className="f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue "
              href="#0"
              onClick={this.handleSubmit}
            >
              Sauvegarder
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Formulairefacture;
