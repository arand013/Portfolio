import React, { useState } from 'react';
import Typist from 'react-typist';

function Terminal(props) {
  const [showSuccess, setShowSuccess] = useState(false);

  const onTypingDone = async () => {
    window.setTimeout(function() {
      setShowSuccess(true);
    }, 1000);
    window.setTimeout(function() {
      props.history.push('/about');
    }, 2500);
  };
