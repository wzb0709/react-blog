import React, {FC} from 'react';

import styles from "@/components/layout/layout.less"
import SwitchBar from "@/components/layout/headerRight/headerRightTabBar/switchBar"
import LoginBar from "@/components/layout/headerRight/headerRightTabBar/loginBar"

const HeaderRightTabBar:FC = (props) => {
  return (
    <div className={styles.header_right_tabBar}>
      <SwitchBar />
      <LoginBar />
    </div>
  );
}

export default HeaderRightTabBar;
