import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Link, Container } from './Layout.styled';
import Loader from '../../components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Header>

      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;