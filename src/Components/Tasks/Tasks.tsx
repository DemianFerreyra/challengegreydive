import { FC } from 'react';
import s from "./Tasks.module.css"


interface Props {
    escenario: string,
    preguntas: Array<string>,
}
const Tasks: FC<Props> = ({ escenario, preguntas }) => {
    return (
        <section className={s.Tareas}>
            <h1>Tareas</h1>
            <p>Escenario: {escenario}</p>
            {
                preguntas.map((e: any, index: any) => (<section key={index}>
                    <h1>Tarea {index}</h1>
                    <h1>{e.texto}</h1>
                    <p>Duracion de la tarea: {e.tiempo}</p>
                </section>))
            }
        </section>
    );
}

export default Tasks;
