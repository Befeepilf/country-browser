import React from 'react';
import Selector from 'components/Selector';
import 'styles/home.scss';

export default function Home(props) {
  const [region, setRegion] = React.useState();
  const [searchValue, setSearchValue] = React.useState("");

  return [
    <div className="search">
      <div className="input bg-element">
        <input
          id="input-search"
          type="search"
          value={searchValue}
          onInput={e => setSearchValue(e.target.value)}
          required disabled={!props.countries && false}
        />
        <label htmlFor="input-search">Search for a country</label>
      </div>

      <Selector
        placeholder="Select a region:"
        options={props.countries ? props.countries.map(c => c.region).filter((r, i, self) => r !== "" && self.indexOf(r) === i) : []}
        onChange={setRegion}
      />
    </div>,
    <div id="countries">
      {props.countries ?
        (region || searchValue.length ?
          props.countries.filter(c => c.region === region || (searchValue.length && JSON.stringify(c).includes(searchValue)))
          :
          props.countries).map(c => (
            <div key={c.numericCode} className="country">
              <img src={c.flag} alt={"Flag of " + c.name}/>
            </div>
          ))
        :
        <div></div>
      }
    </div>
  ];
}
