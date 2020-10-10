import React from 'react';
import { css } from '@emotion/core'

const styles = {
  text: css({color: 'red!important'})
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p css={styles.text}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
