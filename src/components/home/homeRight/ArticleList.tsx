import React, {FC} from 'react';

import styles from '../home.less'
import {Divider} from "antd"

interface IProps {
  readonly artTitleList:Array<string>
}

const ArticleList:FC<IProps> = (props) => {
  return (
    <div className={styles.home_right}>
      <Divider orientation="center">文章列表</Divider>
      {props.artTitleList.map((item,index)=>{
        return(
          <div key={index} className={styles.article_title}>文章标题</div>
        )
      })}
    </div>
  );
}

export default ArticleList;
