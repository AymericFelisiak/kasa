import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Accomodation() {

    const { state } = useLocation();

    console.log(state.id);

    return (
        <main>
            <h1>Accomodation</h1>
        </main>
    )
}