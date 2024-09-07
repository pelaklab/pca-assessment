import React from 'react';

interface ConditionalButtonProps {
  onClick: () => void;
  buttonText: string;
  className?: string;
}

// Only shows on the Assessment path
const ConditionalButton = (props: ConditionalButtonProps) => {
  const { onClick, className, buttonText } = props;
  // Get the current location object which contains the URL
  const currentPath = window.location.pathname;
  const ASSESSMENT_PATH = '/assessments';
  if (!currentPath.includes(ASSESSMENT_PATH) || currentPath.includes('all')) {
    return null;
  }
  return (
    <button className={className} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default ConditionalButton;
