import { Paper, Table, TableBody, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useI18n } from "../../i18n";
import { getRepository } from "../../services/controllers/getRepositories";
import { Project, RepositoriesInputModel } from "../../services/controllers/getRepositories/interface";
import Box from "../Box";
import Link from "../Link";
import { DetailRepositoryProps } from "./interface";
import { StyledTableCell, StyledTableRow } from './styles';

const DetailRepository: React.FC<DetailRepositoryProps> = ({ user }) => {

  const { translate } = useI18n()
  const [projects, setProjects] = useState<Project[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const fetchRepositories = useCallback((skip: number, take: number) => {
    const { login } = user;
    const inputModel: RepositoriesInputModel = {
      userName: login,
      skip,
      take
    };

    getRepository(inputModel)
      .subscribe(list => setProjects(list));
  }, [user])

  useEffect(() => {
    fetchRepositories(page, rowsPerPage);
  }, [fetchRepositories, page, rowsPerPage])

  return (
    <Box width="100%">
        <TableContainer component={Paper}>
          <Table aria-label="customized table"  data-testid="table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">{translate('COLUNANOME')}</StyledTableCell>
                <StyledTableCell align="right">{translate('COLUNAESTRELAS', 2)}</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                projects.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      <Link text={row.name} uri={row.html_url}></Link>
                      </StyledTableCell>
                    <StyledTableCell align="right">{row.stargazers_count}</StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[15, 30, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={user.public_repos}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': `${translate('LINHASPORPAGINA', 2)}`,
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
    </Box>
  );
}

export default DetailRepository;