import React, { Component } from "react";
import Compte from "./compte";
import Creanciers from "./creanciers";
import Debiteurs from "./debiteurs";
import Historique from "./Historique";
import Actions from "./actions";
import Header from "./Header";
import Nav from "./Nav";
import Formulairecreancier from "./formulairecreancier";
import Formulairedebiteur from "./formulairedebiteur";
import "./dashboard.css";
import Formulairecompte from "./formulairecompte";
import Facture from "./EditAction";
import FormulaireAvoirs from "./formulaireavoir";
import Formulaireacompte from "./formulaireacompte";
import EditAction from "./EditAction";

class Dashboard extends Component {
  // la page d'origine c'est "Compte" on la défini dans une state
  state = {
    activePage: "Compte",
    creancierId: undefined
  };

  //on va changer la state pour changer la page active vers la page demandée
  handlePageChange = (activePage, creancierId, debiteurId) => {
    this.setState({
      activePage: activePage,
      creancierId: creancierId,
      debiteurId: debiteurId
    });
  };

  // Cette fonction sert charger le bon composant selon ce qu'il y a dans le state
  handleDisplay = () => {
    if (this.state.activePage === "Compte") {
      return <Compte pageChangeSub={this.handlePageChange} />;
    } else if (this.state.activePage === "formulairecompte") {
      return <Formulairecompte pageChangeSub={this.handlePageChange} />;
    } else if (this.state.activePage === "Debiteurs") {
      return <Debiteurs pageChangeSub={this.handlePageChange} />;
    } else if (this.state.activePage === "Creanciers") {
      return <Creanciers pageChangeSub={this.handlePageChange} />;
    } else if (this.state.activePage === "Actions") {
      return <Actions pageChangeSub={this.handlePageChange} />;
    } else if (this.state.activePage === "editaction") {
      return <EditAction pageChangeSub={this.handlePageChange} />;
    } else if (this.state.activePage === "Historique") {
      return <Historique pageChangeSub={this.handlePageChange} />;
    } else if (this.state.activePage === "FormAcompte") {
      return (
        <Formulaireacompte
          acompteId={this.state.acompteId}
          pageChangeSub={this.handlePageChange}
        />
      );
    } else if (this.state.activePage === "FormCreancier") {
      return (
        <Formulairecreancier
          creancierId={this.state.creancierId}
          pageChangeSub={this.handlePageChange}
        />
      );
    } else if (this.state.activePage === "FormDebiteur") {
      return (
        <Formulairedebiteur
          debiteurId={this.state.debiteurId}
          pageChangeSub={this.handlePageChange}
        />
      );
    } else {
      return "Page non existante";
    }
  };

  render() {
    if (this.state.activePage != null) {
      return (
        <div>
          <div className="fl w-20 fixed">
            <Nav pageChange={this.handlePageChange} />
          </div>
          <div className="fl w-80 ml-20">
            <Header />

            {this.handleDisplay()}
          </div>
        </div>
      );
    }
  }
}

export default Dashboard;
