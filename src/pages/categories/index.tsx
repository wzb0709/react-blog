import React, {FC, useState} from 'react';
import {Badge, Tag} from "antd"
import {getTagColor} from "@/utils/tags"

const Categories: FC = () => {

  const [categories] = useState<Array<string>>(['Javascript', 'React', 'HTTP', 'CSS', 'React-hooks', 'umi', 'Typescript', 'git', 'EggJs', 'mysql'])

  return (
    <>
      <div style={{textAlign: 'center', fontSize: 20}}>文章分类</div>
      <div style={{textAlign: 'center', fontSize: 14, marginTop: 40}}>目前共有10种分类</div>
      <div style={{textAlign: 'center', marginTop: 40, display: 'flex', alignItems: 'center',justifyContent:'center'}}>
        {categories.map((item, index) => {
          return (
            <div key={index} style={{marginRight:30}}>
              <Badge count={10}>
                <Tag color={getTagColor()}>{item}</Tag>
              </Badge>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default Categories;
