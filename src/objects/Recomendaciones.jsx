import axios from "axios";
import { useEffect, useState } from "react";
import Clima from "./Clima";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
const citys = [
  "manizales",
  "bogota",
  "medellin",
  "houston",
  "caracas",
  "cuba",
  "venezuela",
  "tokyo"
];
const Recomendaciones = ({ state }) => {
  const [load, setLoad] = useState(true)
  const [data, setData] = useState({
    temperature: "",
    name: "",
    pais: "",
    max: "",
    min: "",
    humedad: "",
  });
  const obtener = async () => {
    const aleatorio = citys[Math.floor(Math.random() * citys.length)];
    await axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          aleatorio +
          "&appid=" +
          REACT_APP_API_KEY
      )
      .then((res) => {
        setData({
          temperature: res.data.main.temp - 273.15,
          name: res.data.name,
          pais: res.data.sys.country,
          max: res.data.main.temp_max - 273.15,
          min: res.data.main.temp_min - 273.15,
          humedad: res.data.main.humidity,
        });
        setLoad(false)
      })
      .catch((error) => {
        setLoad(false)
      });
  };
  useEffect(() => {
    obtener();
  }, []);
  return (
      <>{load?<Skeleton className="skeleton"/>:<Clima state={data} />}</>
  );
};

export default Recomendaciones;
