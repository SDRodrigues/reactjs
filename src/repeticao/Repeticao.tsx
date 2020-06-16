import React from "react";
import produtos from '../data/produtos';


export default () => {
    function getProdutos() {
        return produtos.map(p => {
            return <li key={p.id}>
                {p.id} - {p.nome} - R${p.preco}
            </li>
        })
    }
    return (
        <div>
            <h2>Repeticao</h2>
            <ul>
                {getProdutos()}
            </ul>
        </div>
    )
}
