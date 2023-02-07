import axios from 'axios'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const LayoutPublic = () => {
      // Llamado para acceder a los datos de la tienda
      async function callStore(url) {
        const res = await axios.get(url);
        const data = res.data.data;
        console.log(data);
      }
    
      callStore('http://localhost:5000/api/store/collections');
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default LayoutPublic