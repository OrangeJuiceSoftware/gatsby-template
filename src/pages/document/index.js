import React from 'react';
import { Router } from '@reach/router';

import Edit from 'pages/document/edit';
import View from 'pages/document/view';

import { Layout } from 'components';

const Document = () => {
  return (
    <Layout>
      <Router>
        <View path='/document/:documentID/view'/>
        <Edit path='/document/:documentID/edit'/>
      </Router>
    </Layout>
  );
};

export default Document;
