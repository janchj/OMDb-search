import { TitleSearchComponent } from './title/title-search.component'
import { TitleComponent } from './title/title-detail.component'

export const AppRoutes = [
  { path: '', component: TitleSearchComponent },
  { path: 'title/:id', component: TitleComponent }
]