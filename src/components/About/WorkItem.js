import React from 'react';
import styles from './WorkItem.module.scss';

const WorkItem = ({ 
  head, even, subTitle, title, term, description, image, firstLink, secondLink
}) => {
  const setOrder = () => {
    if (even) return { order: '2' };
    return {};
  };

  const setBackgroundColor = () => {
    if (!even) return { backgroundColor: 'whitesmoke' };
    return {};
  };

  const setPadding = () => {
    if (head) return { paddingTop: '25px' }
    return {};
  }

  return (  
    <article className={styles.itemWrap} style={setBackgroundColor()}>
      <div className={styles.item} style={setPadding()}>
        <div className={styles.imageArea} style={setOrder()}>
          <img src={image} alt={title} className={styles.image}/>
        </div>
        <div>
          <p className={styles.subTitle}>{subTitle}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.term}>{term}</p>
          <div className={styles.description}>{description}</div>
          {firstLink && <a 
            className={styles.firstButton}
            href={firstLink}
            rel="noreferrer"
            target="_blank">
              <p>자세히 보기</p>
          </a>}
          {secondLink && <a 
            className={styles.secondButton}
            href={secondLink}
            rel="noreferrer"
            target="_blank">
              <p>홈페이지</p>
          </a>}
        </div>
      </div>
    </article>
  );
}
 
 
export default WorkItem;