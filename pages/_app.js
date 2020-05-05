import React from 'react';
import useSWR from 'swr';
import fetch from 'unfetch';
import 'styles/global.scss';
import 'styles/layout.scss';

const fetcher = url => fetch(url).then(r => r.json());

function App({Component, pageProps}) {
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(true);
  const {data, error} = useSWR('https://restcountries.eu/rest/v2/all', fetcher);

  console.log(data, error)

  return(
    <div id="root" className={(darkModeEnabled ? 'dark' : '')}>
      <header className="bg-element">
        <div className="container">
          <h1>Where in the world?</h1>
          <button onClick={() => setDarkModeEnabled(!darkModeEnabled)}>{
            darkModeEnabled ?
              [
                <svg viewBox="0 0 24 24">
                  <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path>
                </svg>,
                <span>Light Mode</span>
              ]
              :
              [
                <svg viewBox="0 0 24 24">
                  <path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"></path>
                </svg>,
                <span>Dark Mode</span>
              ]
          }</button>
        </div>
      </header>

      <main className="container">
        <Component {...pageProps} countries={data}/>
      </main>
    </div>
  );
}

export default App;
