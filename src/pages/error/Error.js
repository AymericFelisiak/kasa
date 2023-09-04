import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <main className='error-container'>
            <section>
                <div>
                    <h2>404</h2>
                    <h3>Oups! La page que vous demandez n'existe pas.</h3>
                </div>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </section>
            
        </main>
    )
}