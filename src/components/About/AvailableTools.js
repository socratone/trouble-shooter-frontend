import React from 'react';
import NormalPageFrame from '../common/NormalPageFrame';
import SectionHeader from './SectionHeader';
import styles from './AvailableTools.module.scss';

const Tool = ({ image, children }) => (
  <article className={styles.tool}>
    <img 
      className={styles.image}
      alt={children}
      src={image}
      width="50"/>
    <p className={styles.name}>{children}</p>
  </article>
);

const AvailableTools = () => {
  return (  
    <section className={styles.tools}>
      <SectionHeader title="Available Tools" bright>
        다음 프로그램들을 다룰 수 있습니다.
      </SectionHeader>
      <NormalPageFrame>
        <div className={styles.grid}>
          <Tool image="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/ps.png">
            Photoshop
          </Tool>
          <Tool image="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/ai.png">
            Illustrator
          </Tool>
          <Tool image="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/pr.png">
            Premiere
          </Tool>
          <Tool image="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/ae.png">
            After Effects
          </Tool>
          <Tool image="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/cb.png">
            Cubase
          </Tool>
          <Tool image="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/pm.png">
            Postman
          </Tool>
          <Tool image="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/wb.png">
            Workbench
          </Tool>
        </div>
      </NormalPageFrame>
    </section>
  );
}
 
export default AvailableTools;