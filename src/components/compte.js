import React, { Component } from "react";
import "./compte.css";
import modifier from "./Icones_Arigoni/icone_modifier.png";
import upload from "./Icones_Arigoni/icone_upload.png";
// import signature from "./Icones_Arigoni/signature.png";
import Axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
// import Formulairecompte from "./formulairecompte";
import { NavLink } from "react-router-dom";
import valider from "./Icones_Arigoni/valider.svg";
import entete from "./images/entete.png";

class Compte extends Component {
  state = {
    data: [],
    titre: "",
    nom: "",
    prenom: "",
    num_rue: "",
    libelle_rue: "",
    code_postal: "",
    ville: "",
    tel: "",
    fax: "",
    mail: "",
    num_TVA: "",
    file: ""
  };

  onFormSubmitSignature = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("signature", this.state.file);
    console.log(formData);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    Axios.post("http://localhost:4848/dashboard/signature", formData, config)
      .then(response => {
        alert("Le fichier a été téléchargé avec succès");
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  onFormSubmitEntete = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("entete", this.state.file);
    console.log(formData);
    const config = {
      headers: {
        // app.post("/dashboard/entete", upload.single("entete"), (req, res, next) => {
        //   console.log(req.files);
        //   for (f of req.files)
        //     fs.rename(f.path, "public/images/" + f.originalname, function(err) {
        //       if (err) {
        //         res.send("problème durant le déplacement");
        //       } else {
        //         res.send("Fichier uploadé avec succès");
        //       }
        //     });
        // });
        "content-type": "multipart/form-data"
      }
    };
    Axios.post("http://localhost:4848/dashboard/", formData, config)
      .then(response => {
        alert("Le fichier a été téléchargé avec succès");
      })
      .catch(error => {
        console.log(error);
      });
  };

  onChange = e => {
    this.setState({ file: e.target.files[0] });
    // setTimeout(this.onFormSubmitSignature(), 5000);
  };

  reloadNow = () => {
    Axios.get("http://www.localhost:4848/api/cabinet")
      .then(response => {
        this.setState({
          data: response.data[0]
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = id => {
    const myId = id;
    confirmAlert({
      title: "Merci de confirmer",
      message:
        "Voulez-vous vraiment modifier les informations de votre cabinet d'avocat ?",
      buttons: [
        {
          label: "Oui",
          onClick: () =>
            Axios.put(`http://localhost:4848/api/cabinet/${myId}`, this.state)
              .then(response => {
                this.reloadNow(myId);
                alert(`Vos informations ont bien été modifiées.`);
                console.log(response);
              })
              .catch(error => {
                console.log(error);
              })
        },
        {
          label: "Non"
          // onClick: () => alert("Le créancier n'a pas été supprimé.")
        }
      ]
    });
  };

  handleMyUserInputs = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    Axios.get("http://localhost:4848/api/cabinet")
      .then(response => {
        this.setState({
          data: response.data[0]
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const infosCompte = this.state.data;
    return (
      <div className="fl w-100 pt3">
        {/* ce que le modèle va donner */}
        <div className="fl w-100 pt3 tc stylish-cab">
          <span className="f1 b title-seysey">Cabinet {infosCompte.nom}</span>
          <div className="ba br4 mt4 w-60-ns nested-copy-line-height tc b--gray firstBorder size-think">
            <p className="b black">
              {infosCompte.titre} {infosCompte.nom} {infosCompte.prenom}
            </p>
            <p className="b black">
              {infosCompte.num_rue} {infosCompte.libelle_rue}
              {infosCompte.code_postal} {infosCompte.ville}
            </p>
            <p className="b black">Tel: {infosCompte.tel}</p>
            <p className="b black">Fax: {infosCompte.fax}</p>
            <p className="b black">Email: {infosCompte.mail}</p>
            <p className="b black">Nº TVA: {infosCompte.num_TVA}</p>
            <NavLink
              to="/dashboard/formulairecompte"
              onClick={() => this.props.pageChangeSub("formulairecompte")}
            >
              <img
                className="icone pointer ml2 mb2"
                src={modifier}
                alt="modifier"
              />
            </NavLink>
          </div>

          <div className="ba br4 mt3 w-60-ns nested-copy-line-height tc pb2 h4 b--gray otherBorder">
            <p className="b black tl ml4">
              {" "}
              En-tête: <img className="w-40 ml6" src={entete} alt="entete" />
            </p>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Compte;
