import "../style.css"
const Clima = ({ state }) => {
  return (
    <div className="clima-busqueda" >
      {state.name.length>0?<div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card card-body mt-2 animated fadeInUp">
            <h5>
              <i className="bi bi-geo-alt-fill"></i> {state.name}
            </h5>
            <h4>
              <i className="bi bi-cloud-sun-fill"></i>{" "}
              {state.temperature ? parseInt(state.temperature ) + "°C" : ""}
            </h4>
            <h5><i className="bi bi-thermometer-high"></i>{parseInt(state.max )+ "°c"} max.</h5>
            <h5><i className="bi bi-thermometer-low"></i>{parseInt(state.min )+ "°c"} min.</h5>
            <h6>Humedad: {state.humedad+"%"}</h6>
          </div>
          
        </div>
      </div>:null}
    </div>
  );
};

export default Clima;
