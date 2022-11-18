import React from 'react'
import VerticalBarIcons from '../VerticalBarIcons/VerticalBarIcons'
import yoga from '../../assets/icons/yoga.svg'
import swim from '../../assets/icons/swim.svg'
import bicycle from '../../assets/icons/bicycle.svg'
import musculation from '../../assets/icons/musculation.svg'


const VerticalLayout = () => {
    return (
        <div className='verticalLayout'>
            <ul className="verticalLayout__listBtn">
                <li className="verticalLayout__itemBtn">
                    <VerticalBarIcons path={yoga} alt="yoga" />
                </li>
                <li className="verticalLayout__itemBtn">
                    <VerticalBarIcons path={swim} alt="swim" />
                </li>
                <li className="verticalLayout__itemBtn">
                    <VerticalBarIcons path={bicycle} alt="bicycle" />
                </li>
                <li className="verticalLayout__itemBtn">
                    <VerticalBarIcons path={musculation} alt="musculation" />
                </li>
            </ul>
            <div className="verticalLayout__copiryght">
                <p>Copyright, SportSee 2020</p>
            </div>
        </div>
    )
}

export default VerticalLayout