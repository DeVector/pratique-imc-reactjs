import { useEffect, useState } from "react";
import Tabelas from "./components/Tabela";



function App() {

  const [variavelAux, setVariavelAux] = useState(0);

  const [alturaUser, setAlturaUser] = useState(0);
  const [pesoUser, setPesoUser] = useState(0);

  const [resultadoImc, setResultadoImc] = useState(0);
  const [imcResult, setImcResult] = useState('');

  const calcularImc = (altura, peso) => {
    const mult = Math.pow(altura, 2);
    return peso / mult;
  }

  const verificarIMC = (result) => {

    if (result >= 5 && result < 18.5) {
      return ("Magreza")

    } else if (result >= 18.5 && result < 25) {
      return ("Normal")

    } else if (result >= 25 && result < 30) {
      return ("Sobrepeso")

    } else if (result >= 30 && result < 40) {
      return ("Obesidade")

    } else if (result >= 40 && result <= 10000) {
      return ("Obesidade grave")

    } else {
      return (<p>Realizando calculo </p>)
    }


  }

  useEffect(() => {

    const altura = variavelAux / 100;

    const imc = calcularImc(altura, pesoUser);
    setResultadoImc(imc);
    setImcResult(verificarIMC(imc.toFixed(2)));


  }, [pesoUser, variavelAux]);

  return (
    <div className="container">

      <form>
        <input type="number" placeholder="Sua altura" onBlur={e => setVariavelAux(e.target.value)} />
        <input type="number" placeholder="Seu peso" onBlur={e => setPesoUser(e.target.value)} />
      </form>

      <Tabelas result={imcResult} />

      { }

    </div>
  )
}

export default App
