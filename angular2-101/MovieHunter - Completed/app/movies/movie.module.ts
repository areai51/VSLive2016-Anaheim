import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { movieRoutingModule } from './movie.routing';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieFilterPipe } from './movie-filter.pipe';
import { MovieService } from './movie.service';

@NgModule({
  imports: [
    SharedModule,
    movieRoutingModule
  ],
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    MovieFilterPipe
  ],
  providers: [
    MovieService
  ]
})
export class MovieModule {}
