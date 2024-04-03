import { useEffect, useState } from "react";
import Tabelas from "./components/Tabela";



function App() {

  const [variavelAux, setVariavelAux] = useState(0);

  const [alturaUser, setAlturaUser] = useState(0);
  const [pesoUser, setPesoUser] = useState(0);

  const [resultadoImc, setResultadoImc] = useState(0);
  const [feito, setFeito] = useState(true);

  const calcularImc = (altura, peso) => {
    const mult = Math.pow(altura, 2);
    return peso / mult;
  }

  const verificarIMC = (result) => {

    if(result < 18.5){
      return( <p> Magreza - {result}</p> )
    } else if(result >= 18.5 && result < 25){
      return( <p> Normal - {result}</p>)
    } else if(result >= 25 && result < 30){
      return( <p> Sobrepeso - {result}</p> )
    } else if(result >= 30 && result < 40){
      return( <p> Obesidade - {result} </p> )
    } else if( result >= 40 && result <= 10000) {
      return( <p> Obesidade grave - {result} </p>)
    } else {
      return( <p>Realizando calculo </p> )
    }

    setResultadoImc(0);

  }

  useEffect(() => {

    setFeito(false);
    setAlturaUser(variavelAux / 100);
    setResultadoImc(calcularImc(alturaUser, pesoUser));

    

  }, [pesoUser, variavelAux]);

  return (
    <div className="container">

      <form>
        <input type="number" placeholder="Sua altura" onBlur={e => setVariavelAux(e.target.value)} />
        <input type="number" placeholder="Seu peso" onBlur={e => setPesoUser(e.target.value)} />
      </form>

      {verificarIMC(resultadoImc.toFixed(2))}

    </div>
  )
}

export default App
