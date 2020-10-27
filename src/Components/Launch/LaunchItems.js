import React from 'react'
import './style.scss';

export default function LaunchItems(props) {
    const Items = props.itemsList && props.itemsList.map((launch, index) => {
        return (
            <div key={index} className="item">
                <div className="img-cont"><img src={launch.links.mission_patch_small} alt={launch.mission_name} /></div>
                <div className="item-desc">
                    <h4>{launch.mission_name} #{launch.flight_number}</h4>
                    <label><strong>Mission Ids:</strong> <span>{launch.mission_id}</span></label>
                    <label><strong>Launch Year:</strong> <span>{launch.launch_year}</span></label>
                    <label><strong>Successful Launch:</strong> <span>{`${launch.launch_success}`}</span></label>
                    <label><strong>Successful Landing:</strong> <span>{`${launch.rocket.first_stage.cores[0].land_success}`}</span></label>
                </div>
            </div>
        )
    });

    return (
        <div className="launch-items">
            {Items}
        </div>
    )
}
