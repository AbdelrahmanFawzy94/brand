export interface IPagination {
  itemsPerPage: number[];
  currentPage: number;
  pageSize: number;
  totalItems: number;
  orderBy: string | null;
  sortDirection: string | null;
}
