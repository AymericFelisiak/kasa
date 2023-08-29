import React from 'react'
import Banner from '../../components/banner/Banner'
import BannerImage from '../../images/home-banner-image.png'
import Thumbnail from '../../components/thumbnail/Thumbnail'

export default function Home() {
    const test = {
        "description": "Au coeur du quartier historique du Marais, cet appartement est idéal pour un couple à la découverte de Paris. Situé sur la rue de Rivoli, il est à 5 minutes du Louvre.",
        "equipments": [
        "Télévision",
        "Four",
        "Frigo",
        "Hotte",
        "Wi-fi",
        "Micro-Ondes"
    ]};

    
    
    return (
        <main>
            <Banner url={BannerImage}/>
            <section class="grid-wrapper">
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
            </section>
        </main>
    )
}