import React, {FC, useEffect, useState} from 'react';
import {router, withRouter} from "umi"
import {Icon} from "antd"
import RouterTypes from "umi/routerTypes"

import styles from "@/components/layout/layout.less"


interface ITabBarItem {
  title: string,
  icon: string,
  isActive: boolean,
  path: string,
}

const SwitchBar: FC<RouterTypes> = (props) => {

  const [tabBar, setTabBar] = useState<Array<ITabBarItem>>([
    {title: '首页', icon: 'home', isActive: false, path: '/'},
    {title: '归档', icon: 'edit', isActive: false, path: '/archives'},
    {title: '分类', icon: 'folder', isActive: false, path: '/categories'},
    {title: '关于', icon: 'user', isActive: false, path: '/about'},
  ])

  useEffect(() => {
    const pathname = props.location.pathname
    let tempTabBar: Array<ITabBarItem> = JSON.parse(JSON.stringify(tabBar))
    tempTabBar.forEach(item => {
      item.isActive = item.path === pathname
    })
    setTabBar(tempTabBar)
  }, [props.location.pathname])

  const handleNavigateTo = (path: string) => {
    router.push(path)
  }

  return (
    <div className={styles.tabBar}>
      {tabBar.map(item => {
        return (
          <div
            className={`${styles.tabBar_item} ${item.isActive ? styles.active : ''}`}
            key={item.title}
            onClick={() => handleNavigateTo(item.path)}
          >
            <Icon type={item.icon}/>
            <div style={{marginLeft: 10}}>{item.title}</div>
          </div>
        )
      })}
    </div>
  );
}

export default withRouter(SwitchBar);
