import React, {FC} from 'react';
import {Input,Icon} from "antd"

import styles from "@/components/layout/layout.less"


const SearchBar: FC = (props) => {
  return (
    <Input
      className={styles.search}
      placeholder='搜索文章'
      prefix={<Icon type='search' className={styles.search_icon} />}
    />
  );
}

export default SearchBar;
