import * as React from 'react';

import { useQueryParams } from '@/hooks/useQueryParams';

export type SearchContextType = {
  /**
   * search value string
   */
  searchValue: string;
  /**
   * string describing checked items
   */
  selectedTextItems: string;
  /**
   * search value
   */
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  /**
   * function to set selecteed items
   */
  setSelectedTextItems: React.Dispatch<React.SetStateAction<string>>;
  /**
   * clear context state
   */
  clearState: () => void;
  /**
   * sync URL state with local state
   */
  syncState: (reset?: boolean) => void;
};

const SearchBarContext = React.createContext<SearchContextType | null>(null);

export const SearchBarProvider: React.FunctionComponent<
  Record<string, unknown>
> = ({ children }) => {
  const [searchValue, setSearchValue] = React.useState('');
  const [selectedTextItems, setSelectedTextItems] = React.useState('');
  const firstRender = React.useRef(true);

  const [, queryParams] = useQueryParams();

  const syncState = React.useCallback(
    (reset = false) => {
      const search = queryParams?.search;
      if (typeof search === 'string') {
        const searchFromUrlExists = search.length > 0;

        if (searchFromUrlExists && reset) {
          setSearchValue(search);
          return;
        }
        if (searchFromUrlExists && searchValue.length === 0) {
          setSearchValue(search);
        }
      }
    },
    [queryParams, searchValue]
  );

  React.useEffect(() => {
    if (firstRender.current) {
      syncState();
      firstRender.current = false;
    }
  }, [syncState]);

  const clearState = React.useCallback(() => {
    setSelectedTextItems('');
    setSearchValue('');
  }, []);

  const value = React.useMemo(
    () => ({
      clearState,
      searchValue,
      selectedTextItems,
      setSearchValue,
      setSelectedTextItems,
      syncState,
    }),
    [clearState, searchValue, selectedTextItems, syncState]
  );

  return (
    <SearchBarContext.Provider value={value}>
      {children}
    </SearchBarContext.Provider>
  );
};

export const useSearchBarState = (): SearchContextType => {
  const context = React.useContext(SearchBarContext);

  if (!context)
    throw new Error('search bar context should be used inside search bar');

  return context;
};
