import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import VerticalLayout from '../components/VerticalLayout/VerticalLayout'

/**
 * @component DashboardUi
 * @returns {JSX} DashboardUi component
 */
const DashboardUi = () => {
    return (
        <div className='dashbo'>
            <Header />
            <div className="containerBarAndMain">
                <VerticalLayout />
                <Main />
            </div>
        </div>
    )
}
export default DashboardUi