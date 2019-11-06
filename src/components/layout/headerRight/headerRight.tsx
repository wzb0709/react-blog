import React, {FC} from 'react';

import styles from "@/components/layout/layout.less"
import SearchBar from "./searchBar/searchBar"
import HeaderRightTabBar from "@/components/layout/headerRight/headerRightTabBar/headerRightTabBar"

const HeaderRight: FC = (props) => {
  return (
    <div className={styles.header_right}>
      <SearchBar />
      <HeaderRightTabBar />
    </div>
  );
}

export default HeaderRight;
