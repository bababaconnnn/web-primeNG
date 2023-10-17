import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AllTableComponent } from './table/all-table/all-table.component';
import { AllButtonComponent } from './button/all-button/all-button.component';
import { AllInputComponent } from './input/all-input/all-input.component';
import { AllChartComponent } from './chart/all-chart/all-chart.component';
import { AllMessageComponent } from './message/all-message/all-message.component';
import { AllThemeComponent } from './theme/all-theme/all-theme.component';
import { MainFormComponent } from './useage/form/main-form/main-form.component';

const routes: Routes = [
  { path: '', component: MainFormComponent },
  { path: 'Table', component: AllTableComponent },
  { path: 'Button', component: AllButtonComponent },
  { path: 'Input', component: AllInputComponent },
  { path: 'Chart', component: AllChartComponent },
  { path: 'Message', component: AllMessageComponent },
  { path: 'Theme', component: AllThemeComponent },
  { path: 'Form', component: MainFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
