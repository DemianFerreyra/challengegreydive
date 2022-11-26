import {FC} from 'react';
import s from "Header.module.css"


interface Props {
    name: string,
    transcription: string,
    video: string,
}
const Header:FC<Props> = ({name, transcription, video}) => {

  function createMarkup(transcripcion: string) {
    return {__html: transcripcion};
  }

  return (
    <section className='ClientArea'>
                <h2>{name}</h2>
                <h2>Test: Test de usabilidad en el sitio web</h2>
                <video src={video}></video>
                <section className='Transcription'>
                  <h1>Transcripción</h1>
                  <div dangerouslySetInnerHTML={createMarkup(transcription)}></div>
                </section>
    </section>
  );
}

export default Header;
