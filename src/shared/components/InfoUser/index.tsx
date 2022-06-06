import { Avatar, Stack } from "@mui/material";
import Box from "../Box";
import DetailRepository from '../DetailRepository';
import { InfoUserProps } from './interface';
import TwitterIcon from '@mui/icons-material/Twitter';
import * as Styled from './styles';
import WebIcon from '@mui/icons-material/Web';
import Link from "../Link";

const InfoUser: React.FC<InfoUserProps> = ({
  user
}) => {

  const hasBlog = !!user.blog;
  const hasTwitter = !!user.twitter_username;

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} paddingTop='1rem' gap='1rem'>
      <Box flexDirection='column' sx={{ p: 2, border: '1px dashed grey', alignItems: 'center' }} >
        <Avatar alt={user.name} src={user.avatar_url} sx={{ width: 256, height: 256 }} />
        <Box flexDirection='column'>
          <Box flexDirection='column' sx={{ alignItems: 'center' }}>
            <Styled.Span>{user.name}</Styled.Span>
            <label>{user.login}</label>
          </Box>
          {hasTwitter && (
            <Link text={`@${user.twitter_username}`} uri={`https://twitter.com/${user.twitter_username}`}>
              <TwitterIcon />
            </Link>
          )}
          {hasBlog && (
            <Link text={user.blog} uri={user.blog}>
              <WebIcon />
            </Link>
          )}
        </Box>

      </Box>
      <DetailRepository user={user} />
    </Stack >
  )
}

export default InfoUser;