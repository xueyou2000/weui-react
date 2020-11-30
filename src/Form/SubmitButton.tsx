import React, { useContext, useState } from 'react';
import Button, { ButtonProps } from '../Button';
import FormContext from './context/FormContext';

export default function SubmitButton(props: ButtonProps) {
  const context = useContext(FormContext);
  const [loading, setLoading] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    setLoading(true);
    context.methods
      .submit()
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
    e.stopPropagation();
    e.preventDefault();
  }

  return <Button type="primary" loading={loading} onClick={handleClick} {...props}></Button>;
}
