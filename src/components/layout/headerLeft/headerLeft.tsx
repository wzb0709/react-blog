import React, {FC} from 'react';
import {Icon} from "antd"

import styles from "@/components/layout/layout.less"


const HeaderLeft: FC = (props) => {
  return (
    <div className={styles.header_left}>
      <Icon type="schedule" theme="twoTone"/>
      <span className={styles.blog_name}>XXXXXXXX</span>
    </div>
  );
}

export default HeaderLeft;
