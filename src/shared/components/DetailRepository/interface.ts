import { User } from "../../services/controllers/getUser/interface";

export interface DetailRepositoryProps {
  user: User;
}


export interface DetailRepositoryPagination {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}