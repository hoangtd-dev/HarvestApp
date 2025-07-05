import { Routes } from '@angular/router';
export default [
  {
    path: '',
    loadComponent: () => import('./pptx-generator.component').then((m) => m.PptxGeneratorComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pptx-dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
    ],
  },
] as Routes;
