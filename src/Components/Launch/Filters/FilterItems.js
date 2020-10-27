import React from 'react'

import './style.scss';

export default function FilterItems({labelName, options, handleFilter, selectedIndex}) {
    let temp = null
    const list = options && options.map((item, index) => {
        if((index + 1) % 2 === 0){
            return (
                <div>
                    {temp}
                    <li id={index} key={index} onClick={() => handleFilter(item, index)} key={index} className={index == selectedIndex ? 'active' : ''}>{item}</li>
                </div>
            )
        } else if(index + 1 === options.length) {
            return (
                <div>
                    <li id={index} onClick={() => handleFilter(item, index)} key={index} className={index == selectedIndex ? 'active' : ''}>{item}</li>
                </div>
            )
        } else {
               temp = <li id={index} onClick={() => handleFilter(item, index)} key={index} className={index == selectedIndex ? 'active' : ''}>{item}</li>
        }
    });
    return (
        <div className="filters-option">
            <label className="border-bottom d-block mb-0 text-center"><span>{labelName}</span></label>
            <ul>
                {list}
            </ul>
        </div>
    )
}
