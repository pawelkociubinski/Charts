import React, {useState} from 'react';
import Input from '../../components/molecules/Input';

export const enhancements = {
  text: {
    isDirty: false,
    isFocused: false,
    isValid: false,
    value: '',
    validator: value => !value.length,
    warning: 'Input cannot be empty',
  },
  password: {
    isDirty: false,
    isFocused: false,
    isValid: false,
    value: '',
    validator: value => !value.length,
    warning: 'Password cannot be empty',
  },
};

export const enhance = schema => {
  return {
    ...enhancements[schema.type],
    ...schema,
  };
};

const components = {
  text: Input,
  password: Input,
};

export const Field = props => {
  const field = props.state.find(field => props.name === field.name);
  const Component = components[field.type];

  return (
    <Component
      {...field}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      error={props.error}
    />
  );
};

export const useForm = form => {
  const initialState = form.map(field => enhance(field));
  const [state, setState] = useState(initialState);

  const onChange = event => {
    const index = state.findIndex(field => field.name === event.target.name);

    setState([
      ...state.slice(0, index),
      {
        ...state[index],
        value: event.target.value,
        isValid: state[index].validator(event.target.value),
        isDirty: true,
      },
      ...state.slice(index + 1),
    ]);
  };

  const onFocus = event => {
    const index = state.findIndex(field => field.name === event.target.name);

    setState([
      ...state.slice(0, index),
      {
        ...state[index],
        isFocused: true,
      },
      ...state.slice(index + 1),
    ]);
  };

  const onBlur = event => {
    const index = state.findIndex(field => field.name === event.target.name);

    setState([
      ...state.slice(0, index),
      {
        ...state[index],
        isFocused: false,
      },
      ...state.slice(index + 1),
    ]);
  };

  return [state, onChange, onFocus, onBlur];
};
