import axios from "axios";
import { useState, useEffect } from "react";
import Clima from "../objects/Clima";
import "../style.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Recomendaciones from "../objects/Recomendaciones";
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [city, setCity] = useState("");
  const [load, setLoad] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const sug = [
    { id: 0, txt: "Bogota" },
    { id: 1, txt: "Medellin" },
    { id: 2, txt: "Cali" },
    { id: 3, txt: "Houston" },
    { id: 4, txt: "La Guajira" },
    { id: 5, txt: "Pereira" },
    { id: 6, txt: "Los Angeles" },
    { id: 7, txt: "Cartagena" },
    { id: 8, txt: "Villavicencio" },
    { id: 9, txt: "Tokyo" },
    { id: 10, txt: "Meta" },
    { id: 11, txt: "Caracas" },
    { id: 12, txt: "Cuba" },
    { id: 13, txt: "Madrid" },
    { id: 14, txt: "California" }
  ];
  const kelvin = 274.15;
  const [state, setState] = useState({
    temperature: "",
    name: "",
    pais: "",
    min: "",
    humedad: "",
    max: "",
  });

  const clima = async (e) => {
    e.preventDefault();
    setLoad(true);
    await axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city.trim().toLowerCase() +
          "&appid=" +
          REACT_APP_API_KEY
      )
      .then((res) => {
        setLoad(false);
        setState({
          temperature: res.data.main.temp - kelvin,
          name: res.data.name,
          pais: res.data.sys.country,
          max: res.data.main.temp_max - kelvin,
          min: res.data.main.temp_min - kelvin,
          humedad: res.data.main.humidity,
        });
        setCity("");
      })
      .catch((error) => {
        setLoad(false);
        setCity("");
      });
  };
  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
      if (
        elemento.txt
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toString().trim().toLowerCase())
      ) {
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
  };
  useEffect(() => {
    setUsuarios(sug);
    setTablaUsuarios(sug);
  }, []);
  const handleChange = (e) => {
    setCity(e.target.value);
    filtrar(e.target.value);
  };
  return (
    <div className="container clima">
      <form autoComplete="off" className="input-and-button" onSubmit={clima}>
        <input
          onChange={handleChange}
          placeholder="Bogota - Medellin - Nueva York - Houston"
          type="text"
          value={city}
          id="clima-input"
          className="form-control"
        />

        <button type="submit" className="btn btn-primary button-academica">
          {load ? (
            <div class="load spinner-border text-light" role="status" />
          ) : (
            <i class="bi bi-search"></i>
          )}
        </button>
        {city.trim().toLowerCase().length > 0 ? (
          <div id="global" className="div-sug">
            {usuarios.map((i) => {
              return (
                <div id="mensajes" key={i.id}>
                  <button
                    onClick={() => {
                      setCity(sug[i.id].txt);
                    }}
                    className="sugerencia"
                  >
                    {i.txt}
                  </button>
                </div>
              );
            })}
          </div>
        ) : null}
      </form>
      {load?<Skeleton className="skeleton"/>:<Clima state={state} />}
      <div className="page-recomendation">
        <h5 className="recomendacion-txt">Recomendaciones </h5>
        <Recomendaciones state={state} />
      </div>
    </div>
  );
};

export default Home;
