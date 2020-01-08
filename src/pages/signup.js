import React, { useState, useEffect } from 'react';
import firebase, { auth, firestore } from 'services/firebase';

import { useAuthRedirect } from 'hooks';

import { Link, navigate } from 'gatsby';

import { Button, Col, Icon, Row, Typography } from 'antd';
const { Text, Title } = Typography;
import { geekblue } from '@ant-design/colors';

import { Layout, SEO } from 'components';

import LoginForm from 'forms/auth-form';

import mustNotBeAuthenticated from 'hocs/mustNotBeAuthenticated';

const SignUpPage = () => {
  const [errors, setErrors] = useState({});

  const [result, redirectError, { signinWithGitHub, signinWithGoogle }] = useAuthRedirect();

  if (result) {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    if (result.token) {
      var token = result.credential.accessToken;
    }

    if (result.user) {
      navigate('/dashboard');
    }
  }

  if (redirectError) {
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // // The email of the user's account used.
    // var email = error.email;
    // // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;
  }

  const signupWithEmail = async ({ email, password }) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);

      // TODO: create firestore user

      // send them to the home page
      navigate('/dashboard');
    } catch (error) {
      // if firestore user failed logout

      // if already exists in auth but no firestore self heal

      // set errors
      // setErrors({
      //   form: 'sfdsf',
      //   email: 'sfdsf'
      //   password: 'sfdsf'
      // })
    }
  };

  return (
    <Layout>
      <SEO title="Signup" />

      <Row style={{ marginTop: 50 }} justify={'center'} type={'flex'}>
        <Col>
          <Title>Blueprints</Title>

          <Button
            style={{ backgroundColor: 'black', fontSize: 20, color: 'white' }}
            onClick={signinWithGitHub}
            icon={'github'}
            size={'large'}>

            <Text style={{ color: 'white', fontSize: 14 }}>Continue With Github</Text>
          </Button>

          <Button
            style={{ backgroundColor: geekblue[5], fontSize: 20, color: 'white' }}
            onClick={signinWithGoogle}
            icon={'google'}
            size={'large'}>

            <Text style={{ color: 'white', fontSize: 14 }}>Continue With Google</Text>
          </Button>

          <LoginForm actionText={'Sign Up'} onSubmit={signupWithEmail} externalErrors={errors}/>

          <Link href={'/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </Layout>
  );
};

export default mustNotBeAuthenticated(SignUpPage);