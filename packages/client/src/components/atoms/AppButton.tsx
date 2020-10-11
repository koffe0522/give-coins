import React from 'react';
import { css } from '@emotion/core'

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
    })
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <p css={styles.text}>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
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
