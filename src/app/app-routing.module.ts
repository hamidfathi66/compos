import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'collections', loadChildren: () => import('./collections/collections.module').then(m => m.CollectionsModule)
  },
  {
    path: 'elements', loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule)
  },
  {
    path: 'views', loadChildren: () => import('./views/views.module').then((x) => x.ViewsModule),
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full' 
  },
  { 
    path: 'home', component: HomeComponent 
  },
  { 
    path: 'not-found', component: NotFoundComponent 
  },
  { 
    path: '**', redirectTo: '/not-found' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
