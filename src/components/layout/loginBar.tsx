import React, {FC} from 'react';
import {Button} from "antd"

import styles from "@/components/layout/layout.less"

const LoginBar:FC = (props) => {
  return (
    <div className={styles.login_bar}>
      <Button size="small" type='primary'>登陆</Button>
      <Button size="small" type='danger'>注册</Button>
    </div>
  );
}

export default LoginBar;
