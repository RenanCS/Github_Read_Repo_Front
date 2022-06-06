
import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';
import { TranslationKeys } from '../shared/i18n/interface';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
  route: keyof TranslationKeys
}
const Route: React.FC<RouteProps> = ({
  component: Component,
  route,
  ...rest
}) => {
  return (
    <ReactDOMRoute
    {...rest}
    render={() => (
      <Component />
    )}
  />
  );
};
export default Route;
