import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Auth.css';
import Login from './Login';
import Signup from './Signup';
function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <>
      {showLogin ? 
        <Login switchToSignup={() => setShowLogin(false)} /> : 
        <Signup switchToLogin={() => setShowLogin(true)} />
      }
    </>
  );
}

export default AuthPage;