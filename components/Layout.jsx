import React from 'react';
import 'styles/global.scss';
import 'styles/layout.scss';

export default function Layout(props) {
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(true);

  return(
    <div id="root" className={(darkModeEnabled ? 'dark' : '')}>
      <header className="bg-element">
        <div className="container">
          <h1>Where in the world?</h1>
          <button onClick={() => setDarkModeEnabled(!darkModeEnabled)}>{
            darkModeEnabled ? [<span>Light Mode</span>] : [<span>Dark Mode</span>]
          }</button>
        </div>
      </header>

      <main className="container">{props.children}</main>
    </div>
  );
}
