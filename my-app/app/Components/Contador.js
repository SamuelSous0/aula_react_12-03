'use client';
import React, { useState } from "react";

function NumeroAleatorio() {
  const [numero, setNumero] = useState(0);

  function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * 100) + 1;
    setNumero(novoNumero);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Número Aleatório</h2>
      <p>{numero}</p>
      <button onClick={gerarNumero}>Gerar Número</button>
    </div>
  );
}

export default NumeroAleatorio;





