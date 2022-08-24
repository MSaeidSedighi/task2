import React from "react";

export function FirstComponent (props)
{
    return (
        <section>
            <h1>Hi I'm {props.name}</h1>
            <h1>I'm {props.age} years old</h1>
        </section>
    )
}