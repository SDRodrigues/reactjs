import React from 'react';
import './App.css';
import Layout from "./layout/Layout";
import Master from "./master/Master";
import Param from "./param/Param";
import Filho from "./master/master-filho/Filho";
import Repeticao from "./repeticao/Repeticao";
import Condicao from "./condicao/Condicao";


function App() {
  return (
      <div>
          <Layout footer={"Primeiro Component"}>
              <Master/>
          </Layout>
          <Layout footer={"Component com Parametros"}>
                  <Param titulo={"ComponentComParametro"} subTitulo={"ComponentComParametro"}/>
          </Layout>
          <Layout footer={"Component com Filhos"}>
              <Filho>
                  <ul>
                      <li>Filho1</li>
                      <li>Filho2</li>
                      <li>Filho3</li>
                      <li>Filho4</li>
                  </ul>
              </Filho>
          </Layout>
          <Layout footer={"Component Repeticao"}>
              <Repeticao/>
          </Layout>
          <Layout footer={"Condicao Component"}>
              <Condicao numero={35}/>
          </Layout>
      </div>
  );
}

export default App;
