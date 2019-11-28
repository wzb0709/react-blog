import React, {FC, useState} from 'react';
import {Divider, Icon, Row, Tag} from "antd"

import styles from "@/components/layout/layout.less"
import {getTagColor} from "@/utils/tags"

const LayoutSider: FC = () => {

  const [popularArticles] = useState<Array<string>>(['', '', '', '', '', ''])
  const [tags] = useState<Array<string>>(['react', 'react-hooks', 'eggjs', 'javascript', 'typescript', 'nodejs', 'webpack', 'sequelize'])

  return (
    <div className={styles.sider}>
      <div className={styles.avatar}/>
      <div className={styles.name}>XXX</div>
      <div className={styles.description}>some description</div>
      <Row type='flex' align='middle' style={{marginTop: 5}}>
        <Icon type='github'/>
        <div style={{marginLeft: 5}}>github</div>
      </Row>
      <Divider orientation='left'>热门文章</Divider>
      {popularArticles.map((item, index) => {
        return (
          <div key={index} className={styles.popular_article_title}>文章标题</div>
        )
      })}
      <Divider orientation='left'>标签</Divider>
      <div style={{padding:'0 20px'}}>
        {tags.map((item, index) => {
          return (
            <Tag
              style={{marginBottom:8,cursor:'pointer'}}
              key={index}
              color={getTagColor()}
            >
              {item}
            </Tag>
          )
        })}
      </div>
    </div>
  );
}

export default LayoutSider;
