import React from 'react';
import Layout from 'components/Layout';
import 'styles/home.scss';

export default function Home(props) {
  return(
    <Layout>
      <div className="search">

        <div className="input bg-element">
          <input id="input-search" type="search" value="" onInput="" required disabled={!props.countries && false}/>
          <label htmlFor="input-search">Search for a country</label>
        </div>

        <div className="input bg-element">
          <select id="select-region" disabled={!props.regions}>{
            (props.regions || []).map(region => <option key={region} value={region}>{region}</option>)
          }</select>
          <label htmlFor="select-region">Filter by Region:</label>
        </div>
      </div>
    </Layout>
  );
}
