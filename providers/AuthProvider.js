import React, {useContext, useState} from 'react';
import Realm from 'realm';
import {getRealmApp} from './getRealmApp';

// Access the Realm App.
const app = getRealmApp();

// Create a new Context object that will be provided to descendants of the AuthProvider.
const AuthContext = React.createContext(null);

const AuthProvider = ({children}) => {
  const login = () => null;
  const logout = () => null;
  const registerUser = () => null;
};

const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth == null) {
    throw new Error('useAuth() called outside of a AuthProvider?');
  }
  return auth;
};

export {AuthProvider, useAuth};
