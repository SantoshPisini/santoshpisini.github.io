import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectComponent } from './components/redirect/redirect.component';

const routes: Routes = [
  {
    path: 'resume',
    component: RedirectComponent,
    data: { key: 'resume' },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
