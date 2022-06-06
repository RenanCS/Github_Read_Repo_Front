import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import { AlertCustomProps } from "./interface";

const AlertCustom: React.FC<AlertCustomProps> = ({ message, severity, open, handleClose }) => {
  return (
    <Snackbar open={open} onClose={handleClose}  >
      <Alert severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default AlertCustom