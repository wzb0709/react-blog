import React, {FC, useEffect, useState} from 'react';

import styles from './index.less';
import MainArticleList from "@/components/home/homeLeft/MainArticleList"
import ArticleList from "@/components/home/homeRight/ArticleList"

export interface IArticle {
  readonly article_title: string,
  readonly article_content: string,
  readonly createAt: string,
  readonly view_count: number,
  readonly message_count: number
  readonly tags: Array<ITag>,
  readonly categories: Array<ITag>
}

export interface ITag {
  readonly name: string
}

const Home: FC = (props) => {
  const [articleList,setArticleList] = useState<Array<IArticle>>([])
  const [artTitleList] = useState<Array<string>>(['','','','','','','','','','','',])

  useEffect(() => {
    let list:Array<IArticle> = []
    for (let i = 0; i < 10 ; i++) {
      list.push({
        article_title: "这里是文章标题",
        categories: [{name:'react'}],
        createAt: "2019-11-6 08:00:00",
        message_count: 10,
        tags:  [{name:'react'}],
        view_count: 100,
        article_content:`1231`
      })
    }
    setArticleList(list)
  },[])

  return (
    <div className={styles.home}>
      <MainArticleList
        articleList={articleList}
      />
      <ArticleList
        artTitleList={artTitleList}
      />
    </div>
  );
}

export default Home
