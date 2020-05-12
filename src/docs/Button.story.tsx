import * as React from 'react';
import { Button, ButtonType } from '../components/Button';
import { H1 } from '../components/H1';

export default { title: 'Button' };

export const Basic = () => {
  return (
    <>
      <H1>Button</H1>
      <p>Style</p>
      <p>We support 4 types of button in the system, which is</p>
      <ul>
        <li>Primary</li>
        <li>Secondary</li>
        <li>Outlined</li>
        <li>Minimal</li>
      </ul>

      <Button type={ButtonType.PRIMARY} title="Primary" />
    </>
  );
};
