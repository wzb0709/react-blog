import React, {FC} from 'react';

import styles from "@/components/layout/layout.less"
import SwitchBar from "@/components/layout/switchBar"
import LoginBar from "@/components/layout/loginBar"

const HeaderRightTabBar:FC = (props) => {
  return (
    <div className={styles.header_right_tabBar}>
      <SwitchBar />
      <LoginBar />
    </div>
  );
}

export default HeaderRightTabBar;
