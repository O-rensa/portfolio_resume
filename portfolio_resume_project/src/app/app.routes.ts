import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'hero',
        title: 'Welcome',
        component: HeroComponent,
    },
    {
        path: '**',
        title: 'PAGE NOT FOUND',
        component: PageNotFoundComponent,
    }
];
