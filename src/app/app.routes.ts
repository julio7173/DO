import { Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { HighlightsComponent } from './pages/highlights/highlights.component';
import { SignalsComponent } from './pages/signals/signals.component';

export const routes: Routes = [
    {path: "todo", component: TodoComponent},
    {path: "highlights", component: HighlightsComponent},
    {path: "signals", component: SignalsComponent},
];
