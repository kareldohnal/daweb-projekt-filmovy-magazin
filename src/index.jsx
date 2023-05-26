import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import ReviewsPage from './pages/ReviewPage';
import MoviesPage from './pages/MoviesPage';
import Menu from './components/Menu/Menu';
import MoviesDetail from './components/MovieDetail/MovieDetail';

const App = () => {
  return (
    <div className="container">
        <Menu />
        <Outlet/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'articles',
        element: <ArticlesPage />,
      },
      {
        path: 'reviews',
        element: <ReviewsPage />,
      },
      {
        path: 'movies',
        element: <MoviesPage />,
        children: [
          {
            path: ":id",
            element: <MoviesDetail />
          }
        ]
      },
      // {
      //   path: "movies/:id",
      //   element: <MoviesDetail />
      // }
    ]
  },
]);

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);
