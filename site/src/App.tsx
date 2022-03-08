import React from 'react';
import './App.css';
import MapOptions from './control/MapOptions';
import DashboardMap from './map/Map';
import ChartContainer from './charts/Chart';

function App() {
  return (
    <div className="App">
      <div>
        {/* Sample Title */}
        <h2 className="title">Growing Pains</h2>
        <h4>Rising LGBTQ+ numbers with high mental health indicators</h4>
      </div>
      <DashboardMap/>
      <MapOptions/>
      <div className="bar-charts">
        <ChartContainer type={'bar'}/>
      </div>
      <div className="source-footer">
        <ul className="sources">
          <li>
            [1] <a href="https://news.gallup.com/poll/203513/vermont-leads-states-lgbt-identification.aspx">
              <span style={{fontStyle: 'italic', color: 'blue'}}>Gallup, 2013</span>
            </a>
          </li>
          <li>
            [2] <a href="https://news.gallup.com/poll/160517/lgbt-percentage-highest-lowest-north-dakota.aspx">
              <span style={{fontStyle: 'italic', color: 'blue'}}>Gallup, 2016</span>
            </a>
          </li>
          <li>
            [3] <a href="https://williamsinstitute.law.ucla.edu/wp-content/uploads/LGBT-Adult-US-Pop-Jul-2020.pdf">
              <span style={{fontStyle: 'italic', color: 'blue'}}>Williams Institute, 2020</span>
            </a>
          </li>
          <li>
            [4] <a href="https://www.liebertpub.com/doi/10.1089/trgh.2015.0001">
              <span style={{fontStyle: 'italic', color: 'blue'}}>Mental Health Disparities Within the LGBT Population: A Comparison Between Transgender and Nontransgender Individuals</span>
            </a>
          </li>
          <li>
            [5] <a href="https://www.samhsa.gov/data/sites/default/files/NSDUH-SexualOrientation-2015/NSDUH-SexualOrientation-2015/NSDUH-SexualOrientation-2015.htm">
              <span style={{fontStyle: 'italic', color: 'blue'}}>SAMHSA</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
