import { Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { HighlightsComponent } from './pages/highlights/highlights.component';
import { CommentsComponent } from './pages/comments/comments.component';

export const routes: Routes = [
    {path: "todo", component: TodoComponent},
    {path: "highlights", component: HighlightsComponent},
    {path: "comments", component: CommentsComponent},
];
