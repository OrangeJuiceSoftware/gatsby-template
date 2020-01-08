import React, { useEffect } from 'react';
import { auth, firestore } from '../services/firebase';

import { Layout, SEO } from 'components';
import { Button } from 'antd';

const AccountSettings = () => {

  return (
    <Layout>
      <SEO title='Settings'/>
    </Layout>
  );
};

export default AccountSettings;
