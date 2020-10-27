import React, { useState, useEffect } from 'react'

import FilterItems from './FilterItems'
import { fetchSpaceXAllData, fetchSpaceXLaunchSuccessData, fetchSpaceXLaunchLandingData } from '../../APIs/launch';

import './style.scss';

const years = () => {
    const startYear = 2006;
    const currentYear =  new Date().getFullYear();
    let list = [];
    for(let i = startYear; i <= currentYear; i++){
        list.push(i);
    }
    return list;
}

const SuccessLaunchLanding = ['True','False'];

function Filters({filteredDataList}) {
    const [year, setYear] = useState("")
    const [successLaunch, setSuccessLaunch] = useState(true)
    const [successLand, setSuccessLand] = useState(true)
    const [activeYear, setActiveYear] = useState(null)
    const [activeLaunch, setActiveLaunch] = useState(null)
    const [activeLand, setActiveLand] = useState(null)

    
    async function fetchAllData(year,index){
        setYear(year)
        setActiveYear(index)
        const payload = {
            year,
            launch: successLaunch,
            land: successLand
        }
        const res = await fetchSpaceXAllData(payload)
        filteredDataList(res)
    }
    async function fetchSuccessLaunch(launch, index){
        launch = launch.toLowerCase()
        setSuccessLaunch(launch)
        setActiveLaunch(index)
        const res = await fetchSpaceXLaunchSuccessData(launch)
        filteredDataList(res)
    }
    async function fetchSuccessLand(land, index){
        land = land.toLowerCase()
        setSuccessLand(land)
        setActiveLand(index)
        const payload = {
            launch: successLaunch,
            land
        }
        const res = await fetchSpaceXLaunchLandingData(payload)
        filteredDataList(res)
    }

    return (
        <div className="launch-filters">
            <h4>Filters</h4>
            <FilterItems selectedIndex={activeYear} options={years()} labelName="Launch Year" handleFilter={(launchYear,index) => fetchAllData(launchYear, index)}/>
            <FilterItems selectedIndex={activeLaunch} options={SuccessLaunchLanding} labelName="Successful Launch" handleFilter={(successLaunch,index) => fetchSuccessLaunch(successLaunch, index)}/>
            <FilterItems selectedIndex={activeLand} options={SuccessLaunchLanding} labelName="Successful Landing" handleFilter={(successLand, index) => fetchSuccessLand(successLand, index)}/>
        </div>
    )
}

export default Filters;