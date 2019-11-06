import React from 'react';
import {Layout, Row, Col} from 'antd';

import styles from './index.less';
import HeaderLeft from "@/components/layout/headerLeft/headerLeft"
import HeaderRight from "@/components/layout/headerRight/headerRight"
import LayoutSider from "@/components/layout/sider/LayoutSider"

const {Header,Sider} = Layout

const BasicLayout: React.FC = props => {
  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <Row>
            <Col span={4}>
              <HeaderLeft />
            </Col>
            <Col span={20}>
              <HeaderRight />
            </Col>
          </Row>
        </Header>
        <div style={{height:40,background:'#FFF'}} />
        <Layout style={{background:'#FFF'}}>
          <Sider width={250} className={styles.sider} theme='light'>
            <LayoutSider />
          </Sider>
        </Layout>
      </Layout>
    </>
  );
};

export default BasicLayout;
