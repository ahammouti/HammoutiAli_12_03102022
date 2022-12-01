import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAverageSession, getPerformance, getUserActivity, getUserInfos } from '../../api/dataAPI.js';
import LineChartComponent from '../LineChart/LineChartComponent.js';
import BarChartComponent from '../BarChart/BarChartComponent.js';
import StatisticsUserInfo from '../StatisticsUserInfo/StatisticsUserInfo.js';
import RadarChartComponent from '../RadarChart/RadarChartComponent.js';
import PieChartComponent from '../PieChart/PieChartComponent.js';

/**
 * @component Main
 * @returns {JSX Element} Main component with all graph components calls, and the different data of states passed in props.
 */
const Main = () => {
    const [datas, setDatas] = useState();
    const [dataActivity, setDataActivity] = useState();
    const [dataAverageSessions, setDataAverageSessions] = useState();
    const [dataPerformance, setDataPerformance] = useState();
    const { id } = useParams();

    const fetchData = async (getMethod, setState) => {
        const request = await getMethod(id);
        return setState(request);
    }

    useEffect(() => {
        fetchData(getUserInfos, setDatas)
        fetchData(getUserActivity, setDataActivity)
        fetchData(getAverageSession, setDataAverageSessions)
        fetchData(getPerformance, setDataPerformance)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    // console.log("state", datas !== undefined && (datas.todayScore || datas.score))

    return (
        <div className='main'>
            <div className="main__welcome">
                <h1 className="main__name">Bonjour <span className='main__name-color'>{datas !== undefined ? datas.userInfos.firstName : <p>LOADING</p>} </span></h1>
                <p className='main__motivationMsg'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <section className="main__statistics">
                <div className="main__statistics-left">
                    <BarChartComponent activity={dataActivity} />
                    <div className="graphicSection">
                        <LineChartComponent averageSessions={dataAverageSessions} />
                        <RadarChartComponent performance={dataPerformance} />
                        <PieChartComponent score={datas !== undefined && (datas.todayScore || datas.score)} />
                    </div>
                </div>
                <div className="main__statistics-right">
                    <StatisticsUserInfo type="calorieCount" value={datas !== undefined && datas.keyData.calorieCount} />
                    <StatisticsUserInfo type="proteinCount" value={datas !== undefined && datas.keyData.proteinCount} />
                    <StatisticsUserInfo type="carbohydrateCount" value={datas !== undefined && datas.keyData.carbohydrateCount} />
                    <StatisticsUserInfo type="lipidCount" value={datas !== undefined && datas.keyData.lipidCount} />
                </div>
            </section>
        </div>
    )
}

export default Main;