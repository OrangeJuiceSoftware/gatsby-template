import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

export default (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      if (props.user && !props.userLoading) {
        navigate('/dashboard');
      }
    });

    return <WrappedComponent {...props}/>;
  };
};