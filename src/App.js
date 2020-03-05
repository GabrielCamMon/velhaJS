import React,{useState ,useEffect,useRef} from 'react';



import './App.css';



function App() {
 
  
  const [jogador,setJogador]= useState("X");
  const [a1,setA1]= useState("X");
  const [a2,setA2]= useState("2");
  const [a3,setA3]= useState("2");
  const [b1,setB1]= useState("2");
  const [b2,setB2]= useState(" ");
  const [b3,setB3]= useState(" ");
  const [c1,setC1]= useState(" ");
  const [c2,setC2]= useState(" ");
  const [c3,setC3]= useState(" ");
  


  

  const inteligencia= async()=>{
    if(jogador=="X"){
      await setJogador("O")
   }else{
     await setJogador("X")
   }
   
 }
 const  ref = useRef({a1,a2,a3,b1,b2,b3,c1,c2,c3});

 useEffect(() => {
 
    if(a1!==ref.a1){
      console.log("oi")
    }
  


},[a1,a2,a3,b1,b2,b3,c1,c2,c3]);


  return (
    <div class="container">
    <div class="row mt-5">
      <div class="col-12">
        <div class="row d-flex justify-content-center mb-5">
          <div class="col-1">
            <div class="text-center mt-5 position-absolute z-index-100 width-100">
              <div class="bg-blue-dark color-blue-ligth p-2 marcar-vez" data-player="1">
                <span class="font-weight-bold font-size-25">X</span>
                <br/>
                <small class="font-weight-bold">Jogador 1</small>
                <small>Pontos: <span id="pontos-player-1">0</span></small>
              </div>
              <div class="bg-blue-dark color-blue-ligth p-2" data-player="2">
                <span class="font-weight-bold font-size-25">O</span>
                <br/>
                <small class="font-weight-bold">Jogador 2</small>
                <small>Pontos: <span id="pontos-player-2">0</span></small>
              </div>
              <div class="rodada mt-2">
                <p>Rodada: <span id="quantidade-rodada">1</span></p>
              </div>
            </div>
          </div>
          <div class="col-6 bg-branco jogo">
            <div class="ml-5 p-2">
              <table class="table table-hash" id="jogo-velha">
                <tbody>
                  <tr>
                    <td onClick={ async()=>{!a1.trim() && await setA1(jogador); inteligencia()}} >{a1}</td>
                    <td onClick={()=>{setA2(jogador); inteligencia()}}>{a2}</td>
                    <td onClick={()=>{setA3(jogador); inteligencia()}}>{a3}</td>
                  </tr>
                  <tr>
                    <td onClick={()=>{setB1(jogador); inteligencia()}}>{b1}</td>
                    <td onClick={()=>{setB2(jogador); inteligencia()}}>{b2}</td>
                    <td onClick={()=>{setB3(jogador); inteligencia()}}>{b3}</td>
                  </tr>
                  <tr>
                    <td onClick={()=>{setC1(jogador); inteligencia()}}>{c1}</td>
                    <td onClick={()=>{setC2(jogador); inteligencia()}}>{c2}</td>
                    <td onClick={()=>{setC3(jogador); inteligencia()}}>{c3}</td>
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
