import React, { useEffect, useState } from "react";
import './reset.css'
import imgLogo from './img/logo.png'
import imgLupa from './img/lupa.png'
import Card from './compoments/Card'

function App() {

  return (
    <section className="section_principal">
      <header className="cabecalho">
        <img src={imgLogo}/>
        <ul className="menu">
          <li className="btn_cabecalho"><a>Home</a></li>
          <li className="btn_cabecalho"><a>Usuários</a></li>
          <li className="btn_cabecalho"><a>Produtos</a></li>
          <li className="btn_cabecalho"><a><img src={imgLupa}/></a></li>
        </ul>
      </header>
      <div className="titulo">
        <hr/>
        <h2>Lista de Usuários</h2>
      </div>
      <section className="section_conteudo">
        <Card/>
      </section>

      <footer className="rodape">
        <p>2022 - Todos os direitos reservados</p>
      </footer>
    </section>
  );
}

export default App;
