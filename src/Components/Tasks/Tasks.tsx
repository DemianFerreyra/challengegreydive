import { FC } from 'react';
import s from "./Tasks.module.css"


interface Props {
    escenario: string,
    preguntas: Array<string>,
}
const Tasks: FC<Props> = ({ escenario, preguntas }) => {
    return (
        <section className={s.Tasks}>
            <h1>Tareas</h1>
            <p>Escenario: {escenario}</p>
            <section className={s.TaskZone}>
            {
                preguntas.map((e: any, index: any) => (<article key={index} className={s.Task}>
                    <h1>Tarea {index}</h1>
                    <h1 className={s.ToDo}>{e.texto}</h1>
                    <p>Duracion de la tarea: {e.tiempo}</p>
                </article>))
            }
            </section>     
        </section>
    );
}

export default Tasks;
