// @ts-nocheck
import React, { useEffect, useState } from "react";

import Modal from "react-modal";
import Tmdb from "../../Tmdb";

export default ({ open, movie }) => {
    
  const [isOpen, setIsOpen] = useState(open);
  
  
useEffect(()=>{
   
    console.log(movie)
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
        <h1 style={{  marginTop: "45px" }}>{movie.id}</h1>
      </Modal>
    </div>
  );
};
