import React, {FC, useState} from 'react';
import {Timeline} from "antd"

const Item = Timeline.Item

const Archives: FC = () => {

  const [articleList] = useState<Array<string>>(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''])

  return (
    <Timeline style={{marginTop:10}}>
      {articleList.map((item, index) => {
        return (
          <Item key={index}>11-28 这里是文章内容</Item>
        )
      })}
    </Timeline>
  );
}

export default Archives;
