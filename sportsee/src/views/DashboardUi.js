import React from 'react'
import Header from '../components/Header/Header'
import VerticalLayout from '../components/VerticalLayout/VerticalLayout'

/**
 * @component
 * @returns 
 */
const DashboardUi = () => {
    return (
        <>
            <Header />
            <div className="containerBarAndMain">
                <VerticalLayout />

            </div>
        </>
    )
}

export default DashboardUi