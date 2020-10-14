/** @jsx jsx */
import { css,jsx } from '@emotion/core'
import AppButton from 'src/components/atoms/AppButton'

const styles = {
  text: css({color: 'green!important'})
}

const App = () => {
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
        <AppButton 
          url={'#'}
          text={'メインコインを付与'}
          fontSize={'18px'}
          textColor={'white'}
          backgroundColor={'#27AE60'}
          width={'100%'}
        />
        <AppButton 
          url={'#'}
          text={'がんばってるコインを付与'}
          fontSize={'18px'}
          textColor={'white'}
          backgroundColor={'orange'}
          width={'100%'}
        />
        <AppButton 
          url={'#'}
          text={'イベントコインを申請'}
          fontSize={'18px'}
          textColor={'white'}
          backgroundColor={'#56ccf2'}
          width={'100%'}
        />
      </header>
    </div>
  );
}

export default App;
