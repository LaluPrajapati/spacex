import React from 'react'

import './style.scss';

export default function Footer(props) {
    return (
        <div className="footer">
            <p><strong>Developed by: </strong>{props.developedby}</p>
        </div>
    )
}
