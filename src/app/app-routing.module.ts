import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "chat",
    pathMatch: "full"
  },
  {
    path: "chat",
    component: DashboardComponent,
  },
  {
    path: "review",
    component: ReviewFormComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
