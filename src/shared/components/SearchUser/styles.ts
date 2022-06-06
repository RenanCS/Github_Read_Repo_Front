import Stack from "@mui/material/Stack";
import styled from "styled-components";
import  CircularProgress from "@mui/material/CircularProgress";





export const Container = styled(Stack).attrs({ direction:'row', spacing:2 })`
  width: 100%;
`

export const Line = styled.div`
    width: 100%;
    height: 0.1rem;
    margin-top: 1rem;
    background: rgb(190, 202, 220);
`

