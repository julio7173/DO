import { Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { HighlightsComponent } from './pages/highlights/highlights.component';

export const routes: Routes = [
    {path: "todo", component: TodoComponent},
    {path: "highlights", component: HighlightsComponent},
];
