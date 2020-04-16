import React from 'react';
// import Cards from './components/Cards';
// import Chart from './components/Chart';
// import CountryPicker from './components/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import Styles from './App.module.css';

class App extends React.Component {
render() {
    return(
                <div className = {Styles.container}>
                    <Cards />
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}


export default App;