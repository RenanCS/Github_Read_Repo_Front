

import { BoxProps } from '@mui/material/Box';
import * as Styled from './styles';

const Box : React.FC<BoxProps> = ({children, ...rest}) => {
  return (
    <Styled.Container 
    data-testid="div-box"
    display='flex'
     {...rest}>
      {children}
    </Styled.Container>
  )
}

export default Box;
