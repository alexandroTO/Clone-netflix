// @ts-nocheck
import React, { useEffect, useState } from "react";

import Modal from "react-modal";
import Tmdb from "../../Tmdb";
import ReactPlayer from "react-player";


export default ({ open, movie }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [ trailer, setTreiler] = useState('');
  const video = async () =>{
    movie.videos.results.map((item)=>{
      if(item.type == 'Trailer' || item.type == 'Teaser'){
        setTreiler(item.key)
        
      }
    })
  } 

  useEffect(() => {
    video()
  }, []);

  function fecharModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={fecharModal}
        style={{
          overlay: {},
          content: {
            margin: 0,
            padding: 0,
            backgroundColor: "#111",
            marginTop: "35px",
          },
        }}
      >
        {trailer ? 
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="650px"
            playing={true}
          />
         : 
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt=""
            style={{ width: "100%", height: "650px" }}
          />
        }
      </Modal>
    </div>
  );
};
