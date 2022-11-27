import './App.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Tasks from './Components/Tasks/Tasks';

const App = () => {
  const client = window.location.pathname;
  const [ClientTest, setClientTest] = useState(Array<any>);
  const [ClientExists, setClientExists] = useState("searching");
  function GetData() {
    fetch("/db.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setClientTest(data.filter((e: any) => e.cliente === client.slice(1)));
        if (data.filter((e: any) => e.cliente === client.slice(1)).length === 0) {
          setClientExists("dontExists");
        }
        console.log(data.filter((e: any) => e.cliente === client.slice(1)));
      })
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <header className="App">
      {
        ClientTest.length === 0 ? (
          <article className='TestingArea'>
            {
              ClientExists === "searching" ? (<h1 className='Status'>Buscando cliente...</h1>) : (<h1 className='Status'>El cliente {client.slice(1)} no existe, prueba buscando con otro nombre</h1>)
            }
          </article>
        ) : (
          <>
            {
              ClientTest[0] ? (<article className='TestingArea'>
                <Header name={ClientTest[0].cliente} transcription={ClientTest[0].transcripcion} video={ClientTest[0].linkVideo} />
                <Tasks escenario={ClientTest[0].escenario} preguntas={ClientTest[0].preguntas} />
              </article>) : (<h1>{`el cliente: ${client.slice(1)} no existe`}</h1>)
            }
          </>
        )
      }
    </header>
  );
}


export default App;
