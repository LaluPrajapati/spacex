export const fetchSpaceXInitialData = () => {
   const ApiResponse =  fetch(`https://api.spacexdata.com/v3/launches?limit=100`)
      .then(res => res.json())
      .then(data => {
          return data
        }
    )
    return ApiResponse
}

export const fetchSpaceXLaunchSuccessData = (param) => {
    const ApiResponse =  fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${param}`)
       .then(res => res.json())
       .then(data => {
           return data
         }
     )
     return ApiResponse
 }

 export const fetchSpaceXLaunchLandingData = (param) => {
    const ApiResponse =  fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${param.launch}&land_success=${param.land}`)
       .then(res => res.json())
       .then(data => {
           return data
         }
     )
     return ApiResponse
 }

 export const fetchSpaceXAllData = (param) => {
    const ApiResponse =  fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${param.launch}&land_success=${param.land}&launch_year=${param.year}`)
       .then(res => res.json())
       .then(data => {
           return data
         }
     )
     return ApiResponse
 }