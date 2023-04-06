// @ts-nocheck
import React, { useEffect, useState } from "react";

import Modal from "react-modal";

import ReactPlayer from "react-player";
import "./ModalMovie.css";

export default ({ open, movie }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [trailer, setTreiler] = useState("");
  const video = async () => {
    movie.videos.results.map((item) => {
      if (item.type === "Trailer" || item.type === "Teaser") {
        setTreiler(item.key);
      }
    });
  };

  useEffect(() => {
    video();
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
            backgroundColor: "#000",
            marginTop: "35px",
          },
        }}
      >
        <div className="Modal--movie">
          {trailer ? (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailer}`}
              width="inherit"
              height="inherit"
              playing={true}
              onEnded={() => setTreiler("")}
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt=""
              style={{ width: "inherit", height: "inherit" }}
            />
          )}
         <div className="Modal--vertical"></div>
        </div>
        <div className="Modal--content">
          <h1 className="Modal--name">{movie.original_name}</h1>
          <p className="Modal--description">{movie.overview}</p>
        </div>
      </Modal>
    </div>
  );
};
