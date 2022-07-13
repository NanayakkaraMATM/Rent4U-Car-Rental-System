import React from 'react'
import axios from 'axios'
import useEffect from 'react'

const ConfirmedBookings = () => {
    // const getBookingData = () => {
    //     const url = 'http://localhost:5000/newbooking'
    //     axios.get(url)
    //     .then(response => {
    //         console.log(response)
    //     })
    // }

    // useEffect(()=>{
    //     getBookingData();
    // },[])

    const url = 'http://localhost:5000/newbooking'

    const getBookings = () => {
        axios.get(url)
        .then((response) => {
            console.log(response)
        })
    }
  return (
    <div>Data</div>
    
  )
}

export default ConfirmedBookings

