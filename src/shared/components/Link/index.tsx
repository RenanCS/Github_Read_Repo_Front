

import { LinkProps } from './interface';
import * as Styled from './styles';

const Link: React.FC<LinkProps> = ({
  uri, 
  text, 
  children
}) => {
  return (
    <Styled.Link
              href={uri}
              target="_blank"
              rel="nofollow me noreferrer">
              {children}{text}
    </Styled.Link>
  ) 
}


export default Link;