import { useMemo, useState } from 'react';

export const usePagination = (
  data = [],
  initialPageSize = 10
) => {
  const [page, setPage] =
    useState(1);

  const [pageSize, setPageSize] =
    useState(initialPageSize);

  const paginatedData =
    useMemo(() => {
      const startIndex =
        (page - 1) * pageSize;

      return data.slice(
        startIndex,
        startIndex + pageSize
      );
    }, [data, page, pageSize]);

  return {
    page,
    pageSize,
    setPage,
    setPageSize,
    paginatedData,
    totalRecords: data.length,
  };
};