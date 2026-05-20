import { Routes } from '@angular/router';

export const routes: Routes = [

//   {
//     path: '',
//     loadComponent: () =>
//       import('./pages/home/home.component')
//         .then(m => m.HomeComponent)
//   },

  {
    path: 'about-us',
    loadComponent: () =>
      import('./pages/aboutus/aboutus')
        .then(m => m.Aboutus)
  },

//   {
//     path: 'contact-us',
//     loadComponent: () =>
//       import('./pages/contact-us/contact-us.component')
//         .then(m => m.ContactUsComponent)
//   },

//   {
//     path: 'events',
//     loadComponent: () =>
//       import('./pages/events/events.component')
//         .then(m => m.EventsComponent)
//   },

//   {
//     path: 'services',
//     loadComponent: () =>
//       import('./pages/services/services.component')
//         .then(m => m.ServicesComponent)
//   },

//   {
//     path: 'blogs',
//     loadComponent: () =>
//       import('./pages/blogs/blogs.component')
//         .then(m => m.BlogsComponent)
//   },

  {
    path: 'footer',
    loadComponent: () =>
      import('./footer/footer/footer')
        .then(m => m.Footer)
  },

  // 404 Page
  {
    path: '**',
    redirectTo: ''
  }

];