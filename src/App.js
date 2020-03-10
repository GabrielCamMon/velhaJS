import React, { useState, useEffect, useRef } from 'react';
import './App.css';

let normalTable = ["", "", "", "", "", "", "", "", ""];
let contarJogadas = 0;
let dontwin = true

function areEqual(){
  var len = arguments.length;
  for (var i = 1; i< len; i++){
  
     if (arguments[i] === null || arguments[i] !== arguments[i-1]|| arguments[i] === "")
        return false;
  }
  return true;
}


function App() {
  //tabela inteligencia
  //estado inicial jogador
  let  jogador = "X";
  //estados iniciais dos campos do jogo da velha
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [b1, setB1] = useState("");
  const [b2, setB2] = useState("");
  const [b3, setB3] = useState("");
  const [c1, setC1] = useState("");
  const [c2, setC2] = useState("");
  const [c3, setC3] = useState("");
  // copia da referencia dos estados inicias
  const ref = useRef({ a1, a2, a3, b1, b2, b3, c1, c2, c3 });

  // setar na tabela pela a inteligencia
  const setTable = i => {
    switch (i) {
      case 0:
        setA1("O")
        normalTable[0] = "O";
        break;
      case 1:
        setA2("O")
        normalTable[1] = "O";
        break;
      case 2:
        setA3("O")
        normalTable[2] = "O";
        break;
      case 3:
        setB1("O")
        normalTable[3] = "O";
        break;
      case 4:
        setB2("O")
        normalTable[4] = "O";
        break;
      case 5:
        setB3("O")
        normalTable[5] = "O";
        break;
      case 6:
        setC1("O")
        normalTable[6] = "O";
        break;
      case 7:
        setC2("O")
        normalTable[7] = "O";
        break;
      case 8:
        setC3("O")
        normalTable[8] = "O";
        break;
      default:
        console.log('It all fox');
    }
  
  }

  // const count = () => {
  //   return normalTable.reduce((total, value) => {
  //     if (value) {
  //       return total + 1
  //     } else {
  //       return total
  //     }
  //   }, 0)

  // }



  const verificar=(e)=>{
    //horizontal
    if(areEqual(normalTable[0],normalTable[1],normalTable[2])||areEqual(normalTable[3],normalTable[4],normalTable[5])||areEqual(normalTable[6],normalTable[7],normalTable[8])){
      alert(jogador + " Ganhou");
      dontwin = false
      window.location.reload()
    }
    //vertical
    if(areEqual(normalTable[0],normalTable[3],normalTable[6])||areEqual(normalTable[1],normalTable[4],normalTable[7])||areEqual(normalTable[2],normalTable[5],normalTable[8])){
      alert(e + " Ganhou")
      dontwin =  false
      window.location.reload()
      
    }
    //diagonal

    if(areEqual(normalTable[0],normalTable[4],normalTable[8])||areEqual(normalTable[2],normalTable[4],normalTable[6])){
      alert(e + " Ganhou")
      dontwin =  false
      window.location.reload()
    }
    

  }
  // funçao inteligencia
  const inteligencia = (i) => {

      let indexTableInteli= null;
        while (normalTable[indexTableInteli] !== "") {
          indexTableInteli = Math.floor(Math.random() * 10);
        }
        setTable(indexTableInteli);
        console.log(jogador)
        dontwin && verificar('O')
   //   trocarJogador()
      

  }

  //trocar turno do jogagor
  const trocarJogador = () => {
    if (jogador === "X") {
       jogador =  "O";
    } else {
     jogador = "X";
    }
   
  }


  const setSimbol = async (value) => {
    console.log(jogador)
    switch (value) {
      case 'a1':
        setA1(jogador)
        normalTable[0] = jogador;
        break;
      case 'a2':
        setA2(jogador)
        normalTable[1] = jogador;
        break;
      case 'a3':
        setA3(jogador)
        normalTable[2] = jogador;
        break;
      case 'b1':
        setB1(jogador)
        normalTable[3] = jogador;
        break;
      case 'b2':
        setB2(jogador)
        normalTable[4] = jogador;
        break;
      case 'b3':
        setB3(jogador)
        normalTable[5] = jogador;
        break;
      case 'c1':
        setC1(jogador)
        normalTable[6] = jogador;
        break;
      case 'c2':
        setC2(jogador)
        normalTable[7] = jogador;
        break;
      case 'c3':
        setC3(jogador)
        normalTable[8] = jogador;
        break;
      default:
        console.log('IT TO BAD');
      }
      
      if(jogador ==='X' && contarJogadas< 4){
        contarJogadas++;
        inteligencia()
      }
      trocarJogador()
      console.log(jogador)
      dontwin && verificar(jogador)
      

  }

  return (
    <div class="container">
      <div class="row mt-5">
        <div class="col-12">
          <div class="row d-flex justify-content-center mb-5">
           
            <div class="col-6 bg-branco jogo">
              <div class="ml-5 p-2">
                <table class="table table-hash" id="jogo-velha">
                  <tbody>
                    <tr>
                      <td  onClick={() => {!a1.trim() && setSimbol('a1') }} >{a1}</td>
                      <td onClick={() => { !a2.trim() && setSimbol('a2') }}>{a2}</td>
                      <td onClick={() => { !a3.trim() && setSimbol('a3')}}>{a3}</td>
                    </tr>
                    <tr>
                      <td onClick={() => { !b1.trim() && setSimbol('b1')}}>{b1}</td>
                      <td onClick={() => { !b2.trim() && setSimbol('b2') }}>{b2}</td>
                      <td onClick={() => { !b3.trim() && setSimbol('b3')}}>{b3}</td>
                    </tr>
                    <tr>
                      <td onClick={() => { !c1.trim() && setSimbol('c1') }}>{c1}</td>
                      <td onClick={() => { !c2.trim() && setSimbol('c2') }}>{c2}</td>
                      <td onClick={() => { !c3.trim() && setSimbol('c3') }}>{c3}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
