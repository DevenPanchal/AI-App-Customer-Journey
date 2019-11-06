import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule,
  MatMenuModule, MatSidenavModule, MatListModule, MatRadioModule
} from '@angular/material';

import { DirectPredictComponent } from './direct-predict/direct-predict.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ListComponent } from './components/list/list.component';
import { SingleComponent } from './components/single/single.component';
import { LoginComponent } from './login/login.component';
import {NifiPipelineComponent} from './nifi-pipeline/nifi-pipeline.component';
import{TrainModelComponent} from './train-model/train-model.component';

import { NewsService } from './news.service';
import { DataAppDirectService } from './data-app-direct.service';
import {AuthService} from "./auth.service";
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AccountService } from './account.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'direct-predict', component:  DirectPredictComponent },
  { path: 'nifi-training', component: TrainModelComponent },
  { path: 'nifi-inference', component: NifiPipelineComponent },

  { path: 'delete/:id', component: DeleteComponent },
  { path: 'list', component: ListComponent },
  { path: 'list/:id', component: SingleComponent },
 { path: '', redirectTo: '/login', pathMatch: 'full' } ,
 { path: '**', redirectTo: '/login' },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DeleteComponent,
    ListComponent,
    SingleComponent,
    DirectPredictComponent,
    HomePageComponent,
    LoginComponent,
    TrainModelComponent,
    NifiPipelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule, MatMenuModule, MatSidenavModule, MatListModule,FormsModule,CommonModule


  ],
  providers: [AccountService,NewsService, DataAppDirectService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
