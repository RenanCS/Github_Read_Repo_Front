import { SnackbarCloseReason } from "@mui/material";



export interface AlertCustomProps {
  message: string;
  severity: 'success' | 'info' | 'warning' | 'error';
  open: boolean;
  handleClose: ((event: Event | React.SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => void) | undefined
}

export interface ErrorDetail {
  message: string;
  open: boolean;
}