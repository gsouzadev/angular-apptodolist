import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './components/header/header.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { InputToDoListComponent } from './components/input-to-do-list/input-to-do-list.component';
import { BtnDeleteAllToDoListComponent } from './components/btn-delete-all-to-do-list/btn-delete-all-to-do-list.component';

// Pages
import { HomeComponent } from './pages/home/home.component';

// Modules 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    ToDoListComponent,
    InputToDoListComponent,
    BtnDeleteAllToDoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
