import debounce from 'lodash.debounce';
import * as React from 'react';

export const useSearch = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  const [searchValue, setSearchValue] = React.useState(initialValue);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callSearch = React.useCallback(
    debounce((value) => {
      setSearchValue(value.toLowerCase());
    }, 500),
    []
  );

  const inputChangeHandler = React.useCallback(
    (e) => {
      const value = e.target.value;

      if (value.match(/[^a-zA-Z0-9 ]/gi)) return;

      setValue(value);
      callSearch(value);
    },
    [callSearch]
  );

  const clearHandler = React.useCallback(() => {
    setValue('');
    setSearchValue('');
  }, []);

  return {
    value,
    searchValue,
    inputChangeHandler,
    clearHandler,
  };
};
