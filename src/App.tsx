import './App.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';

const App = () => {
  const client = window.location.pathname;
  const [ClientTest, setClientTest] = useState(Array<any>);
  const [ClientExists, setClientExists] = useState("searching");
  function GetData(){
    fetch("/db.json")
    .then(function(res) {
      return res.json();
    })
    .then(function(data){
      setClientTest(data.filter((e:any) => e.cliente === client.slice(1)));
      if(data.filter((e:any) => e.cliente === client.slice(1)).length === 0){
        setClientExists("dontExists");
      }
      console.log(data.filter((e:any) => e.cliente === client.slice(1)));
    })
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <header className="App">
      {
        ClientTest.length === 0?(
          <>
          {
            ClientExists === "searching"?(<h1>Buscando cliente...</h1>):(<h1>El cliente {client.slice(1)} no existe, prueba buscando con otro nombre</h1>)         
          }
          </>       
        ):(
          <>
             {
              ClientTest[0]?(<article className='TestingArea'>
                <Header name={ClientTest[0].cliente} transcription={ClientTest[0].transcripcion} video={ClientTest[0].linkVideo}/>
                <section className='Tareas'>
                   <h1>Tareas</h1>
                   <p>Escenario: {ClientTest[0].escenario}</p>
                   {
                    ClientTest[0].preguntas.map((e:any, index: any) =>(<section key={index}>
                        <h1>Tarea {index}</h1>
                        <h1>{e.texto}</h1>
                        <p>Duracion de la tarea: {e.tiempo}</p>
                    </section>))
                   }
                </section>
              </article>):(<h1>{`el cliente: ${client.slice(1)} no existe`}</h1>)
             }
          </>
        )
      }
    </header>
  );
}


export default App;
