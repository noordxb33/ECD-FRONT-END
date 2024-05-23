import React from 'react'
import MiniDrawer from './Components/MiniDrawer'


export default function RouteComponent(props) {
  return (
    <MiniDrawer  pageContent={props.element} />
  )
}
