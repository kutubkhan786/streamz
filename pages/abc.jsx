import React from "react";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";
import Videos from "./Videos";
import Chat from "./Chat";

export default function abc(videosrc) {
  return (
    <>
      <div className="container">
        <SideMenu />
        <Videos videosrc={videosrc} />
        <Chat />
      </div>
      <Footer />
    </>
  );
}
