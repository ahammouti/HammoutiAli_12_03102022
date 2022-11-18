import React from 'react'
import calorieIcon from '../../assets/icons/fire.svg'
import proteinIcon from '../../assets/icons/chicken.svg'
import appleIcon from '../../assets/icons/apple.svg'
import burgerIcon from '../../assets/icons/burger.svg'

const StatisticsUserInfo = ({ value, type }) => {
    return (
        <div className='statisticCard'>
            {
                type === "calorieCount" ?
                    <div className="statisticCard__item">
                        <img src={calorieIcon} alt="" />
                        <div className="statisticCard__value">
                            {value.toLocaleString('en-US')}kCal
                            <span>Calories</span>
                        </div>
                    </div> :

                    type === "proteinCount" ?
                        <div className="statisticCard__item">
                            <img src={proteinIcon} alt="" />
                            <div className="statisticCard__value">
                                {value.toLocaleString('en-US')}g
                                <span>Proteines</span>
                            </div>
                        </div> :

                        type === "carbohydrateCount" ?
                            <div className="statisticCard__item">
                                <img src={appleIcon} alt="" />
                                <div className="statisticCard__value">
                                    {value.toLocaleString('en-US')}g
                                    <span>Glucides</span>
                                </div>
                            </div> :

                            type === "lipidCount" &&
                            <div className="statisticCard__item">
                                <img src={burgerIcon} alt="" />
                                <div className="statisticCard__value">
                                    {value.toLocaleString('en-US')}g
                                    <span>Lipides</span>
                                </div>
                            </div>
            }
        </div>
    )

    // if (type === "calorieCount") {
    //     return (
    //         <div className='statisticCard'>
    //             <h1>Calorie : {value}</h1>
    //         </div>
    //     )
    // }
    // if (type === "proteinCount") {
    //     return (
    //         <div className='statisticCard'>
    //             <h1>proteine : {value}</h1>
    //         </div>
    //     )
    // }
}
export default StatisticsUserInfo
// {
//     type === "proteinCount" &&
//     <h1>proteine : {type}</h1>
// }