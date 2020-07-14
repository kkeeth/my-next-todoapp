import styled from 'styled-components';
import Link from 'next/link';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default () => (
  <>
    <Title>Counter App</Title>
    <Link href="/counter">
      <a>go to counter page!</a>
    </Link>
  </>
);
