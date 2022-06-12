function Caja(props) {
    return (
      <div className="Caja">
        <p>
            Buenas noches {props.nombre} {props.apellido} ! 
        </p>
      </div>
    );// El nombre lo ingreso en el sj de index
  }
  
  export default Caja; // Sirve para poder importar este componente en otro lado. Permite que otros archivos puedaas unsar lo que contenga este componente.