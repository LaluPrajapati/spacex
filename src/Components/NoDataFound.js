import React from 'react'

export default function NoDataFound() {
    const nodata = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#fff',
        marginLeft: '10px',
        borderRadius: '5px',
      };
    return (
        <div style={nodata}>
            <p>No Data Found</p>
        </div>
    )
}
