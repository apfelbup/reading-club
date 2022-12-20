import React, { useEffect } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './app.scss';
import MainPage from './pages/MainPage/MainPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Club from './pages/Club/Club';
import Shelf from './pages/shelf/Shelf';
import Contact from './pages/Contact/Contact';
import Popup from './components/Popup';
import Booklist from './pages/Booklist/Booklist';
import axios from 'axios';

function App() {
  const [isShow, setIsShow] = React.useState<boolean>(true);
  const [menu, setMenu] = React.useState<boolean>(false);
  const [popup, setPopup] = React.useState<boolean>(false);
  const [dataState, setDataState] = React.useState<any>();

  const send = useEffect(()=>{
    axios.get('https://6375f81a7e93bcb006becc5c.mockapi.io/Books'
  ).then((res)=>{
      setDataState(res.data);
    });
  },[setDataState]);
  console.log(dataState);


  const overflowHandler = ()=> {
      document.body.style.overflow = 'unset';
      document.body.style.overflowX = 'hidden';
  }

  const splashHandler = () => {
    setIsShow(false);
  }

  const menuHandler = () => {
    setMenu(!menu);
  }
  const popupHandler = () => {
    setPopup(!popup);
  }
  return (
    <div className="app">
      <div onClick={overflowHandler} className={isShow?`splash`:`disabled`}>
          <div className='splash-middle'>
            <img className='splash-middle-inner' src="/img/btb-logo-inner.png" alt="image-inner" />
            <img onClick={()=> splashHandler()} className='splash-middle-outer' src="/img/btb-logo-outer.png" alt="image-outer" />
          </div>
      </div>
      {popup?<Popup popupHandler={popupHandler}/>:null}
      <Header menuHandler={menuHandler} menu={menu}/>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/club" element={<Club popupHandler={popupHandler}/>}/>
      <Route path="/shelf" element={<Shelf/>}/>
      <Route path="/booklist" element={<Booklist dataState={dataState} />}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
