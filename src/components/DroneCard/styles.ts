import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';


export const StyledPaper = styled(Paper)({
  gap: 4,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  ':hover': {
    boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
  },
});
export const StyledLink = styled(Link)({
  textDecoration: 'none',
});