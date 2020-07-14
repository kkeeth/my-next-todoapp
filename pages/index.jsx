import Link from 'next/link';
import styled from 'styled-components';
import { RootStyles } from '../styles';

const Title = styled.h1`
  font-size: 2rem;
  font-family: Futura, Josefin-sans;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primary};
`;

const LinkText = styled.p`
  margin-top: 20px;
`;

export default () => (
  <>
    <RootStyles>
      <Title>Counter App / ToDo App by nextjs</Title>
      <Link href="/counter">
        <a>
          <LinkText>Go to counter app</LinkText>
        </a>
      </Link>
    </RootStyles>
  </>
);
