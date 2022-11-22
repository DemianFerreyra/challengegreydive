import {FC} from 'react';
import s from "Header.module.css"
import './App.css';


interface Props {
    name: String,
    tester: Number,
    video: String,
}
const Header:FC<Props> = ({name, tester, video}) => {
  return (
    <header className={s.Header}>
    </header>
  );
}

export default Header;
