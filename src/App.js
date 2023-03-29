// @ts-nocheck
import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";

export default function () {
  const [movieList, setMovielist] = useState([]);
  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovielist(list);
    };
    loadAll();
  }, []);
  
  return <div>ola mundo</div>;
}
