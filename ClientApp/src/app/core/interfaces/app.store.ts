import { Route } from '@core/models/route.model';
import { User } from '@models/api/auth/user.model';
export class IAppState {
  themes: IThemeState;
  sidebar: ISidebarState;
  user: User | null;
}

export class IThemeState {
  isDarkTheme: boolean;
}

export class ISidebarState {
  routes: Route[];
}
