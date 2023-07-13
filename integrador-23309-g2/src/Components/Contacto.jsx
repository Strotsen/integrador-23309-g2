import "./Contacto.css"



export const Contacto = () => {
  

  return (
    <>
      <h1 className="titulo_pagina">Contacto</h1>
      <p className="texto-consultas">
        Escribinos y a la brevedad, uno de nuestros representantes va a comunicarse
      </p>

      <section className="section_consultas">
      <div className="formContainer">
          <form
            className="consultas_form"
            action="mailto: laangioplastia@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="nombre">Nombre y apellido</label>
              <input
                type="text"
                className="form-control-Consultas"
                name="nombre"
                id="nombre"
                placeholder="Nombre.."
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control-Consultas"
                name="email"
                id="email"
                placeholder="ejemplo@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                className="form-control-Consultas"
                name="mensaje"
                id="mensaje"
                rows="10"
                placeholder="Deja tu mensaje aquí"
                maxLength={200}
              ></textarea>
            </div>
            <button className="btn-consulta" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contacto;


