import 'jest';
import React from 'react';
import renderer, { ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';
import Button from '../index';
import LoadingIcon from '../LoadingIcon';

describe('Button', () => {
  it('Render correctly', () => {
    const wrapper: ReactTestRenderer = renderer.create(<Button>确定</Button>);
    expect(wrapper.root.children.length).toBe(1);
    const button = wrapper.root.children[0] as ReactTestInstance;
    expect(button.type).toBe('button');
    expect(button.children.length).toBe(2);

    const icon = button.children[0] as ReactTestInstance;
    expect(icon.props.loading).toBeFalsy();

    const span = button.children[1] as ReactTestInstance;
    expect(span.type).toBe('span');
    expect(span.children).toEqual(['确定']);
  });

  it('Loading', () => {
    const wrapper: ReactTestRenderer = renderer.create(<Button loading={true}>确定</Button>);
    expect(wrapper.root.findByType(LoadingIcon).props.loading).toBeTruthy();
  });
});
