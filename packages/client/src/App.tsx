/** @jsx jsx */
import { Global,css,jsx } from '@emotion/core'
import AppButton from 'src/components/atoms/AppButton'
import EvaluationDisplay from 'src/components/atoms/EvaluationDisplay'
import emotionReset from "emotion-reset";

const styles = {
  text: css({color: 'green!important'}),
  homePage:css({
    backgroundColor:'#e5e5e5',
    minHeight:'100vh',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  }),
  wrap: css({
    width:'80%',
    maxWidth:'800px',
    margin:'0 auto',
  }),
  mb5:css({
    marginBottom:'50px'
  })
}

const App = () => {
  return (
    <div className="App">
      <Global
        styles={css`
          ${emotionReset}
          * {
            box-sizing: border-box;
          }
        `}
      />
      <div css={styles.homePage}>
          <div css={styles.wrap}>
            <EvaluationDisplay
              startDate={'2020/04'}
              endDate={'2020/08'}
              evaluation={'B'}
              marginBottom={'50px'}
            />
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
          </div>
        </div>
    </div>
  );
}

export default App;
