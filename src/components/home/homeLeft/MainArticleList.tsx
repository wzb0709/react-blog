import React, {FC} from 'react';
import ReactMarkdown from "react-markdown"
import {Divider, Icon, Tag} from "antd"

import styles from '../home.less'
import {getTagColor} from "@/utils/tags"
import {IArticle} from "@/pages"

interface IProps {
  readonly articleList: Array<IArticle>
}

const MainArticleList: FC<IProps> = (props) => {
  return (
    <div className={styles.home_left}>
      {props.articleList.map((item, index) => {
        return (
          <div key={index} className={styles.article_item}>
            <div style={{height: 55}}>
              <Divider orientation='left'>
                <div className={styles.article_item_title}>
                  {item.article_title}<span>{item.createAt}</span>
                </div>
              </Divider>
            </div>
            <div className={styles.article_item_content}>
              <ReactMarkdown
                source={item.article_content}
                escapeHtml={false}
              />
            </div>
            <div className={styles.article_item_footer}>
              <div className={styles.icon}>
                <Icon type='message' style={{fontSize: 12}}/>
                <div style={{marginLeft: 5}}>{item.message_count}</div>
              </div>
              <div className={styles.icon} style={{marginLeft: 10, paddingRight: 10, borderRight: '1px solid #f0f1f2'}}>
                <Icon type='eye' style={{fontSize: 12}}/>
                <div style={{marginLeft: 5}}>{item.view_count}</div>
              </div>
              <div className={styles.icon} style={{marginLeft: 10}}>
                <Icon type='tags' style={{fontSize: 14}}/>
                {item.tags.map((tagItem, tagIndex) => {
                  return (
                    <Tag
                      key={tagIndex}
                      style={{marginLeft: 5}}
                      color={getTagColor()}
                    >
                      {tagItem.name}
                    </Tag>
                  )
                })}
              </div>
              <div className={styles.icon} style={{marginLeft: 10}}>
                <Icon type='folder' style={{fontSize: 14}}/>
                {item.categories.map((categoriesItem, categoriesIndex) => {
                  return (
                    <Tag
                      key={categoriesIndex}
                      style={{marginLeft: 5}}
                      color={getTagColor()}
                    >
                      {categoriesItem.name}
                    </Tag>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default MainArticleList;
