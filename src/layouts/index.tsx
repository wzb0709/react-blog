import React from 'react';
import {Layout, Row, Col} from 'antd';

import styles from './index.less';
import HeaderLeft from "@/components/layout/headerLeft"
import HeaderRight from "@/components/layout/headerRight"

const {Header} = Layout

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
      </Layout>
    </>
  );
};

export default BasicLayout;
