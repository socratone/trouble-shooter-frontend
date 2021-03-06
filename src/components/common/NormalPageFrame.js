import React from 'react';
import styles from './NormalPageFrame.module.scss';

const NormalPageFrame = ({ children }) => {
  return (  
    <div className={styles.frameWrap}>
      <div className={styles.frame}>
        {children}
      </div>
    </div>
  );
}
 
export default NormalPageFrame;