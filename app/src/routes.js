import HomePage from './containers/HomePage';
import NewTask from './containers/NewTask';
import ResetPage from './containers/ResetPage';
import DeletedPage from './containers/DeletedPage';




// import NotFound from './containers/NotFoundPage'
// import Base from './containers/Base';



const routes = [
  {
    component: HomePage,
    path: '/',
    exact: true,
    loadData: () => {},
  },
  {
    component: NewTask,
    path: '/new',
    loadData: () => {},
  },
  {
    component: ResetPage,
    path: '/reset',
    loadData: () => {},
  },
  {
    component: DeletedPage,
    path: '/deleted',
    loadData: () => {},
  },

  // {
  //   component: Base(NotFound),
  //   loadData: () => {},
  // }
]

export default routes;
