import React, { useState } from "react";
import "./FeatureMovie.css";
import ModalMovie from "../ModalMovie";

export default ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  let description = item.overview;
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }
  if (description.length > 150) {
    description = description.substring(0, 200) + "...";
  }
  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">
              {item.vote_average.toFixed(2)} pontos
            </div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--sesons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons > 1 && "s"}
            </div>
          </div>
          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
            <a
              href="#"
              onClick={() => {
                setIsOpen(true);
              }}
              className="featured--watchbutton"
            >
              ► Assistir
            </a>
            <a href={`/list/add/${item.id}`} className="featured--mylist">
              + Minha Lista
            </a>
          </div>
          <div className="featured--genres">
            <strong>Gêneros: </strong>
            {genres.join(", ")}
          </div>
        </div>
      </div>
      {isOpen && <ModalMovie open={isOpen} idMovie={item.id} />}
    </section>
  );
};
