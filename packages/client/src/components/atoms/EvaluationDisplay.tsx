import  { useState } from 'react';
/** @jsx jsx */
import { css,jsx } from '@emotion/core'

type EvaluationDisplayProps = {
  startDate: string,
  endDate: string,
  evaluation:String,
  marginBottom:any,//どうやるか後で調査
}

const EvaluationDisplay = (props:EvaluationDisplayProps) => {
  const styles = {
    card:css({
      width:'100%',
      height:'50vh',
      borderRadius:'30px',
      backgroundColor:'#FFF',
      textAlign:'center',
      padding:'10px',
      marginBottom:props.marginBottom,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
    }),
    wrap:css({
      height:'80%',
      // display:'flex',
      // justifyContent:'space-between',
      // flexDirection: 'column'
    }),
    title: css({
      fontSize:'20px',
      marginBottom:'10px'
    }),
    date:css({
      fontSize:'18px',
      marginBottom:'30%'
    }),
    round:css({
      borderRadius:'100px',
      border:'3px solid #27AE60',
      margin:'0 auto',
      color:'#27AE60',
      width:'20vh',
      height:'20vh',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      fontSize:'10vh'
    })
  }
  return (
    <div css={styles.card}>
      <div css={styles.wrap}>
        <div>
          <h2 css={styles.title}>自分の評価</h2>
          <p css={styles.date}>{props.startDate}~{props.endDate}</p>
        </div>
        <p css={styles.round}>{props.evaluation}</p>
      </div>
    </div>
  )
}

EvaluationDisplay.defaultProps = {
  startDate: '2020/04',
  endDate: '2020/08',
  evaluation:'A',
};

export default EvaluationDisplay;