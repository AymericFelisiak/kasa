import React from 'react'
import Tag from '../../components/tag/Tag'
import Thumbnail from '../../components/thumbnail/Thumbnail'
import DropDownList from '../../components/drop-down-list/DropDownList'
import DropDownText from '../../components/drop-down-text/DropDownText'

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
        <div>
            <h1>Home</h1>
            <Tag name="Test"/>
            <Thumbnail/>
            <DropDownList title={"Equipements"} equipments={test.equipments}/>
            <DropDownText title={"Fiabilité"} text="Au coeur du quartier historique du Marais, cet appartement est idéal pour un couple à la découverte de Paris. Situé sur la rue de Rivoli, il est à 5 minutes du Louvre."/>
        </div>
    )
}