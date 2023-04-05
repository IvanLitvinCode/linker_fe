import type { SortByFn } from 'react-table';

import type { FetchRssSource } from '@/types';

import { isKey } from './type-helpers';

const PRIORITY = {
  HIGH: 3,
  MEDIUM: 2,
  LOW: 1,
} as const;

export const prioritySort: SortByFn<FetchRssSource> = (
  rowA,
  rowB,
  _id,
  _desc
) => {
  const priorityAAccessor = rowA.original['priority'];
  const priorityBAccessor = rowB.original['priority'];

  if (
    !(isKey(priorityAAccessor, PRIORITY) && isKey(priorityBAccessor, PRIORITY))
  ) {
    return 0;
  }

  if (PRIORITY[priorityAAccessor] > PRIORITY[priorityBAccessor]) {
    return 1;
  }
  if (PRIORITY[priorityAAccessor] < PRIORITY[priorityBAccessor]) {
    return -1;
  }

  return rowB.original['label'].localeCompare(rowA.original['label']);
};
