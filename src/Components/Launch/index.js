import React, {useState, useEffect} from 'react'

import Filters from './Filters';
import LaunchItems from './LaunchItems';
import {fetchSpaceXInitialData} from '../APIs/launch';
import NoDataFound from '../NoDataFound';

import './style.scss';

export default function Launch() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchInitialData() {
            const res = await fetchSpaceXInitialData();
            setItems(res);
        }
        fetchInitialData();
    }, [])

    return (
        <div className="launch">
            <Filters filteredDataList={data => setItems(data)}/>
            {items.length ? <LaunchItems itemsList={items}/> : <NoDataFound />}
        </div>
    )
}
