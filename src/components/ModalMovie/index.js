// @ts-nocheck
import React, { useEffect, useState } from "react";

import Modal from "react-modal";
import Tmdb from "../../Tmdb";

export default ({ open, idMovie }) => {
  const [movieData, setMovieData] = useState(null)  
  const [isOpen, setIsOpen] = useState(open);
  
  const load = async () => {
    let info = await Tmdb.getMovieInfo(idMovie, "tv");
    setMovieData(info);
    
}
useEffect(()=>{
    load();
    console.log(movieData)
},[])
  
  function fecharModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={fecharModal}
        style={{
          overlay: {
            
          },
          content: {
            backgroundColor:'#111',
            marginTop: "35px",
          },
        }}
      >
        <h1 style={{  marginTop: "45px" }}>{idMovie}</h1>
      </Modal>
    </div>
  );
};
