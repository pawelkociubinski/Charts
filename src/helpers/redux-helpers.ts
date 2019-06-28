import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import {useMemo} from 'react';

export function useActions(actions) {
  const dispatch = useDispatch();

  return useMemo(
    () =>
      Object.keys(actions).reduce(
        (acc, name) => ({
          ...acc,
          [name]: bindActionCreators(actions[name], dispatch),
        }),
        {}
      ),
    [dispatch]
  );
}
