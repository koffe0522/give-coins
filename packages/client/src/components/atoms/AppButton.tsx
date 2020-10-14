import  { useState } from 'react';
// NOTE:: 下記の記述はemotionの特殊なコンパイラを使用するために記述する必要がある
/** @jsx jsx */
import { css,jsx } from '@emotion/core'

type ButtonProps = {
  url?: string
  text: string
  fontSize:string
  textColor: string
  backgroundColor: string
  width: string
  maxWidth?: string
}

function AppButton(props: ButtonProps) {
  const [testData,setTestData] = useState(1)

  const styles = {
    button: css({
      color: props.textColor,
      backgroundColor: props.backgroundColor,
      width: props.width,
      maxWidth: props.maxWidth,
      fontSize: props.fontSize,
      display:'block',
      textDecoration:'none',
      textAlign:'center',
      borderRadius:'10px',
      marginBottom:'10px',
      padding:'10px',
      '&hover': {
        color: 'white'
      },
    })
  }

  return (
    <a href="{props.url}" css={styles.button}>
      { props.text }
    </a>
  );
}

AppButton.defaultProps = {
  url: '#',
  text: 'テキストをpropsに入れてください',
};

export default AppButton;
