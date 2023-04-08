import React from 'react';
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer'
import Videos from './Videos';
import Chat from './Chat';

export default function abc() {
  return (
    <>
      <div className="container">
        <SideMenu />
        <Videos />
        <Chat />
      </div>
      <Footer />
    </>
  )
}
