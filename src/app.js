/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", execute);
};

let pronoun = ["my", "the", "our", "thy"];
let adj = ["great", "big", "chunky"];
let noun = ["jogger", "racoon", "puppy", "chicken"];
let dom = [".com", ".us", ".org", ".net"];

const execute = () => {
  let results = document.getElementById("resultados-dominios");
  results.innerHTML = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dom.length; l++) {
          let domain = pronoun[i] + adj[j] + noun[k] + dom[l];
          let prgh = document.createElement("p");
          let text = document.createTextNode(domain);
          prgh.appendChild(text);
          results.appendChild(prgh);
        }
      }
    }
  }
};
