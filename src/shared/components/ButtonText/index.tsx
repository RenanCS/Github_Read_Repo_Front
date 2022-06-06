import { ButtonTextProps } from "./interface";
import * as Styled from './styles';

const ButtonText: React.FC<ButtonTextProps> = ({title, ...rest }) => (
  <Styled.Container 
  data-testid="button-text"
  variant="outlined" 
  size="large" 
  {...rest}>
    {title}
  </Styled.Container>
);

export default ButtonText;