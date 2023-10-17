import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

//PrimeNG
import { ButtonModule } from 'primeng/button';
import { UserComponent } from './table/user/user.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { TableWithPaginatorComponent } from './table/table-with-paginator/table-with-paginator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllTableComponent } from './table/all-table/all-table.component';
import { TreeModule } from 'primeng/tree';
import { AllButtonComponent } from './button/all-button/all-button.component';
import { AllInputComponent } from './input/all-input/all-input.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AllChartComponent } from './chart/all-chart/all-chart.component';
import { ChartModule } from 'primeng/chart';
import { VerticalChartComponent } from './chart/vertical-chart/vertical-chart.component';
import { AllMessageComponent } from './message/all-message/all-message.component';
import { MessagesModule } from 'primeng/messages';
import { KeyFilterModule } from 'primeng/keyfilter';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageModule } from 'primeng/message';
import { ButtonWithIconComponent } from './button/button-with-icon/button-with-icon.component';
import { ButtonRoundedComponent } from './button/button-rounded/button-rounded.component';
import { ButtonOutlineComponent } from './button/button-outline/button-outline.component';
import { ButtonBasicComponent } from './button/button-basic/button-basic.component';
import { InputWithRegexComponent } from './input/input-with-regex/input-with-regex.component';
import { AllThemeComponent } from './theme/all-theme/all-theme.component';
import { MainFormComponent } from './useage/form/main-form/main-form.component';
import { DisplayBlockComponent } from './useage/form/display-block/display-block.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AddProductFormComponent } from './useage/form/add-product-form/add-product-form.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TableWithPaginatorComponent,
    AllTableComponent,
    AllButtonComponent,
    AllInputComponent,
    AllChartComponent,
    VerticalChartComponent,
    AllMessageComponent,
    ButtonWithIconComponent,
    ButtonRoundedComponent,
    ButtonOutlineComponent,
    ButtonBasicComponent,
    InputWithRegexComponent,
    AllThemeComponent,
    MainFormComponent,
    DisplayBlockComponent,
    AddProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    TagModule,
    RatingModule,
    FormsModule,
    BrowserAnimationsModule,
    TreeModule,
    InputNumberModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    RadioButtonModule,
    ChartModule,
    MessagesModule,
    KeyFilterModule,
    CheckboxModule,
    MessageModule,
    ScrollPanelModule,
    InputTextareaModule,
    DropdownModule,
    ToastModule
  ],
  providers: [MessageService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }





