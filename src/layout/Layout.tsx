import React from "react";
import './Layout.css';

export default (props:{ children: React.ReactNode, footer: React.ReactNode; }) =>
    <div className={'Layout'}>
        <div className={'Conteudo'}>
            {props.children}
        </div>
        <div className={'Footer'}>
            {props.footer}
    </div>
    </div>
