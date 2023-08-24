import React from 'react'
import Tag from '../../components/tag/Tag'
import Thumbnail from '../../components/thumbnail/Thumbnail'
import DropDownList from '../../components/drop-down/DropDown'
import Banner from '../../components/banner/Banner'
import BannerImage from '../../images/home-banner-image.png'

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
            <h1>Home</h1>
            <Tag name="Test"/>
            <Thumbnail/>
            <DropDownList title={"Equipements"} content={test.equipments} />
            <DropDownList title={"Fiabilité"} content="Au coeur du quartier historique du Marais, cet appartement est idéal pour un couple à la découverte de Paris. Situé sur la rue de Rivoli, il est à 5 minutes du Louvre." />
            <Banner url={BannerImage}/>
        </main>
    )
}