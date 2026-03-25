import { useEffect, useMemo, useState } from 'react';

const baseLines = ['\u203A', '\u203A'];
const message = '\u203A Hello Everyone, Welcome to my webpage!();';

function TypingIntro({ onComplete }) {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  const typedMessage = useMemo(
    () => message.slice(0, visibleCharacters),
    [visibleCharacters]
  );

  useEffect(() => {
    let intervalId;
    let closeTimer;
    let completeTimer;

    const startDelay = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setVisibleCharacters((currentValue) => {
          if (currentValue >= message.length) {
            window.clearInterval(intervalId);
            closeTimer = window.setTimeout(() => setIsClosing(true), 800);
            completeTimer = window.setTimeout(() => onComplete(), 1450);
            return currentValue;
          }

          return currentValue + 1;
        });
      }, 55);
    }, 450);

    return () => {
      window.clearTimeout(startDelay);
      window.clearTimeout(closeTimer);
      window.clearTimeout(completeTimer);
      window.clearInterval(intervalId);
    };
  }, [onComplete]);

  return (
    <div className={`intro-screen${isClosing ? ' is-closing' : ''}`}>
      <div className="intro-screen__shell">
        <div className="intro-screen__header">
          <span />
          <span />
          <span />
        </div>

        <div className="intro-screen__body" aria-live="polite">
          {baseLines.map((line, index) => (
            <p key={`${line}-${index}`}>{line}</p>
          ))}

          <p className="intro-screen__message">
            {typedMessage}
            <span className="intro-screen__cursor" aria-hidden="true" />
          </p>

          {visibleCharacters >= message.length ? (
            <p className="intro-screen__status">Redirecting...</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default TypingIntro;
