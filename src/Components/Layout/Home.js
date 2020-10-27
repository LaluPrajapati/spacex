import React from 'react'

import Launch from '../Launch'
import Footer from '../Footer';
import './style.scss';

export default function Home() {
    return (
        <div className="launch-container">
            <h2>SpaceX launch Programs</h2>
            <Launch />
            <Footer developedby="Lalu Prajapati" />
        </div>
    )
}
