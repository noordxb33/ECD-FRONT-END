import React from 'react'
import MiniDrawer from './Components/MiniDrawer'
import { Toaster } from 'react-hot-toast';



export default function RouteComponent(props) {
  const { Component } = props;



  return (
    <MiniDrawer pageContent={Component}/>

  )
}
