import React, { useEffect } from 'react';
import { firestore } from 'services/firebase';

import { useCollection } from 'react-firebase-hooks/firestore';

// import { Link, navigation } from 'Gatsby';

import { Button, Col, Icon, Menu, Row, Typography } from 'antd';
const { SubMenu } = Menu;

import { Layout, SEO } from 'components';

import { mustBeAuthenticated } from 'hocs';

const Dashboard = () => {
  const [value, loading, error] = useCollection(firestore.collectionGroup('directories'));

  if (!loading && value) {
    const data = value.docs.map((document) => document.data());
    data.map(async (doc) => {
      if (doc.root) {
        const parent = await doc.root.get();
        // console.log(parent.ref);
        // console.log(parent.data());
      }
    });
  }

  const generateSidebarItems = () => {
    return (
      <Menu style={{ borderRight: 'none' }} selectable={false} mode={'inline'}>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="folder" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <Menu.Item key="12"><Icon type="file-text"/>Option 12</Menu.Item>
      </Menu>
    );
  };

  return (
    <Layout sidebarItems={generateSidebarItems()}>
      <SEO title='Dashboard'/>

      <Row style={{ height: 150 }}>
        dashboard
      </Row>
    </Layout>
  );
};

export default mustBeAuthenticated(Dashboard);
