import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {Container, Wrapper, Submit, Error, Headline, Form} from './styles';
import {useForm, Field} from './form';
// Helpers
import {useActions} from '../../helpers/redux-helpers';
// Actions
import {authenticate} from '../../actions';

const forms = [
  {
    type: 'text',
    label: 'Email',
    name: 'email',
    validator: value => value.length >= 5,
    warning: 'Incorrect email format',
  },
  {
    type: 'password',
    label: 'Password',
    name: 'password',
    validator: value => value.length >= 5,
    warning: 'Password must be at least 5 characters long',
  },
];

export default () => {
  const [formState, onChange, onFocus, onBlur] = useForm(forms);
  const actions = useActions({authenticate});
  const error = useSelector(state => state.user.error);

  const submit = _event => {
    const email = formState[0].value;
    const password = formState[1].value;

    actions.authenticate(email, password);
  };

  return (
    <Container>
      <Wrapper>
        <Headline>Log in to your account</Headline>
        {error && <Error>There was a problem with your login.</Error>}
        <Form>
          {formState.map(input => (
            <Field
              key={input.name}
              name={input.name}
              state={formState}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              error={error}
            />
          ))}
          <Submit onClick={submit}>Login</Submit>
        </Form>
      </Wrapper>
    </Container>
  );
};
