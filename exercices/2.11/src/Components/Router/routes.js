import ConnectPage from '../Pages/ConnectPage';
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import ProfilPage from '../Pages/Profil';
import RulePage from '../Pages/RulesPage';

const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/rules': RulePage,
  '/connect' : ConnectPage,
  '/myProfil' : ProfilPage
};

export default routes;
