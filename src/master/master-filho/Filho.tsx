import React from "react";

export default (props: { children: React.ReactNode; }) =>
    <div>
        <h2>Component Filho</h2>
        <div>{props.children}</div>
    </div>
