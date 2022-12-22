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
import { useSelector } from 'react-redux';
import SuccessPopup from './components/SuccessPopup';

function App() {
  const [isShow, setIsShow] = React.useState<boolean>(true);
  const [popup, setPopup] = React.useState<boolean>(false);
  const [success,setSuccess] = React.useState<boolean>(false);
  const [dataState, setDataState] = React.useState<any>();

  const {categoryId, currentPage} = useSelector((state:any)=> state.pages);

  const send = useEffect(()=>{
    axios.get(`https://6375f81a7e93bcb006becc5c.mockapi.io/Books?page=${currentPage}&limit=8`
  ).then((res)=>{
      setDataState(res.data);
    });
    console.log(dataState);
  },[currentPage]);


  const overflowHandler = ()=> {
      document.body.style.overflow = 'unset';
      document.body.style.overflowX = 'hidden';
  }

  const splashHandler = () => {
    setIsShow(false);
  }

  const isSuccess = ()=>{
    setSuccess(true);
  }

  const successHandler = ()=>{
    setSuccess(false);
  }

  const popupHandler = () => {
    setPopup(!popup);
    if(popup === false){
      setSuccess(false);
    }
  }
  return (
    <div className="app">

      <div onClick={overflowHandler} className={isShow?`splash`:`disabled`}>
          <div className='splash-middle'>
            <img className='splash-middle-inner' src="/img/btb-logo-inner.png" alt="image-inner" />
            <img onClick={()=> splashHandler()} className='splash-middle-outer' src="/img/btb-logo-outer.png" alt="image-outer" />
          </div>
      </div>
      {popup?<Popup isSuccess={isSuccess} popupHandler={popupHandler}/>:null}
      {success?<SuccessPopup successHandler={successHandler}/>:null}
      <Header popupHandler={popupHandler}/>
    <Routes>
      <Route path="/" element={<MainPage isSuccess={isSuccess}/>}/>
      <Route path="/club" element={<Club isSuccess={isSuccess} popupHandler={popupHandler}/>}/>
      <Route path="/shelf" element={<Shelf/>}/>
      <Route path="/booklist" element={<Booklist isSuccess={isSuccess} dataState={dataState} />}/>
      <Route path="/contact" element={<Contact isSuccess={isSuccess}/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
