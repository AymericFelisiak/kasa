import React from 'react'
import { useLocation } from 'react-router-dom'
import Carousel from '../../components/carousel/Carousel';

export default function Accomodation() {

    const { state } = useLocation();

    console.log(state.id);

    return (
        <main>
            <Carousel urls={state.pictures}/>
        </main>
    )
}