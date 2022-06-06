
import { TextFieldProps } from './interface';
import * as Styled from './styles';

const TextField: React.FC<TextFieldProps> = ({
  ...rest
}) => (
  <Styled.Container  fullWidth variant="outlined" {...rest} />
);

export default TextField;