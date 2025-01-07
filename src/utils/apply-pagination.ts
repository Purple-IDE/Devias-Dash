export function applyPagination<T>(items: T[], page: number, rowsPerPage: number): T[] {
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  
  return items.slice(startIndex, endIndex);
} 