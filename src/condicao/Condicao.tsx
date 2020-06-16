import React from "react";

export default (props: { numero: number }) => {
    return (
        <div>
            <h2>O numero {props.numero} é</h2>
            {props.numero % 2 === 0 ?
            <span>Par</span> :
            <span>Impar</span> }
        </div>
    )
}
