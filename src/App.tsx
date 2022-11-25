import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const client = window.location.pathname;
  const [ClientTest, setClientTest] = useState(Array<any>);
  function GetData(){
    fetch("/db.json")
    .then(function(res) {
      return res.json();
    })
    .then(function(data){
      setClientTest(data.filter((e:any) => e.cliente === client.slice(1)));
      console.log(data.filter((e:any) => e.cliente === client.slice(1)));
    })
  }

  useEffect(() => {
    GetData();
  }, []);

  function createMarkup(transcripcion: string) {
    return {__html: transcripcion};
  }


  return (
    <header className="App">
      {
        ClientTest.length === 0?(
          <h1>Buscando cliente...</h1>
        ):(
          <>
             {
              ClientTest[0]?(<article className='TestingArea'>
                <section className='ClientArea'>
                <h2>{ClientTest[0].cliente}</h2>
                <h2>Test: Test de usabilidad en el sitio web</h2>
                <video src={ClientTest[0].linkVideo}></video>
                </section>
                <section className='Transcription'>
                  <h1>Transcripción</h1>
                  <div dangerouslySetInnerHTML={createMarkup(ClientTest[0].transcripcion)}></div>
                </section>
                <section className='Tareas'>
                   <h1>Tareas</h1>
                   <p>Escenario:{ClientTest[0].escenario}</p>
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
