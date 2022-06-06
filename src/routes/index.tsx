import { Route as SimpleRoute, Switch } from 'react-router-dom';
import UsersPage from '../pages/users';
import { useI18n } from '../shared/i18n';
import Route from './Route';

export const Routes: React.FC = () => {
  const {translate} = useI18n()

  return(
    <Switch>
       <SimpleRoute path={translate('ROTAPROCURARUSUARIO')} exact component={UsersPage} />
       <Route path="*" component={UsersPage}   route="ROTAPROCURARUSUARIO" />
    </Switch>
  )
}

