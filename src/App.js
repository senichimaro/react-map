import React, { useEffect } from 'react';
import axios from 'axios';

import Map from './Map/components/Map'

import './style.css';

export default function App() {

  const queryAPI = async () => {
    let url = 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=E85,ELEC&state=CA&limit=2&api_key=uhWKHx6NkDOjqqjqPDbo2hA8bsbXajIeAf0EZ3TJ';
    const response = await axios(url)
    console.log('queryAPI', response);
  }

  useEffect(() => {
    queryAPI()
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Map />
    </div>
  );
}
