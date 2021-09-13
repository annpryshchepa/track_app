import { format } from 'date-fns';
import { mockedRecords } from './mockedRecords';

import './Dashboard.scss'

const CN = 'Dashboard'
const currentDate= format(new Date(), 'dd MMMM yyyy');
const currentTime = format(new Date(), 'kk:mm:ss')


export const Dashboard = () => {
  const renderRecords = mockedRecords.map(({date, name, number}) => {
    const modifiedData = format(new Date(date), 'dd MMMM yyyy');

  return <li>{`Date: ${modifiedData}, #${number}, File name: ${name}`}</li>
  })

  return (
    <div className={CN}>
      <div className={`${CN}--block`}>
        <p>sbc date: {currentDate}</p>
        <p>sbc time: {currentTime}</p>
      </div>
      <div className={`${CN}--block`}>
        <h2>battery info</h2>
        <ul>
          <li>battery: 26%</li>
          <li>temperature: 26&deg;C</li>
          <li>battery connected: 1</li>
          <li>battery charging: 0</li>
          <li>battery voltage: 3.91V</li>
          <li>battery amperage: 0.61A</li>
          <li>power battery: 2.37W</li>
        </ul>
      </div>
      <div className={`${CN}--block`}>
        <h2>other info</h2>
        <ul>
          <li>last modification: 0 seconds ago</li>
          <li>system load: 20%</li>
          <li>memory usage: 11% of 998m</li>
          <li>cpu temperature: 26&deg;C</li>
          <li>up time: 1:51</li>
          <li>IP: 192.111.111.11.111</li>
          <li>usage of: 5% of 29gb</li>
          <li>ac connected: 0</li>
          <li>ac voltage: 0.0V</li>
          <li>ac amperage: 0.0A</li>
          <li>power ac: 0.0W</li>
        </ul>
      </div>
      <div className={`${CN}--block`}>
        <h2>Previous records</h2>
        <ul>
          {renderRecords}
        </ul>
      </div>
    </div>
  )
}
