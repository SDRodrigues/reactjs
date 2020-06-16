import React from "react";

export default (params: { titulo: React.ReactNode; subTitulo: React.ReactNode; }) =>
    <>
        <h3>{params.titulo}</h3>
        <p>{params.subTitulo}</p>
    </>

