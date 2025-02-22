import { Route } from '@core/models/route.model';
export class IAppState {
  themes: IThemeState;
  sidebar: ISidebarState;
}

export class IThemeState {
  isDarkTheme: boolean;
}

export class ISidebarState {
  routes: Route[];
}
