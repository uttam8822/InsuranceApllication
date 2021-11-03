import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule ,} from '@angular/forms';
import { AdhomeComponent } from './adhome/adhome.component';
import { UwhomeComponent } from './uwhome/uwhome.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { UwloginComponent } from './uwlogin/uwlogin.component';
import { UhomeComponent } from './uhome/uhome.component';
import { LifeComponent } from './life/life.component';
import { DentalComponent } from './dental/dental.component';
import { DentalVisionComponent } from './dental-vision/dental-vision.component';
import { ServiceComponent } from './service/service.component';
import { CreatuwComponent } from './creatuw/creatuw.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdheaderComponent } from './adheader/adheader.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FetchdatadentalComponent } from './fetchdatadental/fetchdatadental.component';
import { FetchdatalifeComponent } from './fetchdatalife/fetchdatalife.component';
import { FetchdatadentalvisionComponent } from './fetchdatadentalvision/fetchdatadentalvision.component';
import { CreateadminComponent } from './createadmin/createadmin.component';
import { SuccessfullcomponentComponent } from './successfullcomponent/successfullcomponent.component';
import { LifeServiceUserDetailsComponent } from './life-service-user-details/life-service-user-details.component';
 import { MatDialogModule } from '@angular/material/dialog';
import { POPUPComponent } from './popup/popup.component';
import { Service1Component } from './service1/service1.component';
import { Aboutus1Component } from './aboutus1/aboutus1.component';
import { Contact1Component } from './contact1/contact1.component';
import { DentaluserdetailsComponent } from './dentaluserdetails/dentaluserdetails.component';
import { DentalvisiondetailsComponent } from './dentalvisiondetails/dentalvisiondetails.component';
import { UWheaderComponent } from './uwheader/uwheader.component';
import { UWSidelistComponent } from './uwsidelist/uwsidelist.component';
import { UwFetchDentalDataComponent } from './uw-fetch-dental-data/uw-fetch-dental-data.component';
import { UwFetchLifeDataComponent } from './uw-fetch-life-data/uw-fetch-life-data.component';
import { UwFetchDVDataComponent } from './uw-fetch-dvdata/uw-fetch-dvdata.component';
import { UwLifeDetailsComponent } from './uw-life-details/uw-life-details.component';
import { UwDVDetailsComponent } from './uw-dvdetails/uw-dvdetails.component';
import { UwDentalDetailsComponent } from './uw-dental-details/uw-dental-details.component';
import { SendEmailComponent } from './send-email/send-email.component';

import { FetchuwdetailsComponent } from './fetchuwdetails/fetchuwdetails.component';
import { FetchuserdetailsComponent } from './fetchuserdetails/fetchuserdetails.component';
import { SendmailUWComponent } from './sendmail-uw/sendmail-uw.component';
import { UserAuthGuard } from './Auth/user-auth.guard';
import { RegistrationService } from './registration.service';
import { UwriterAuthGuard} from './Auth/uwriter-auth.guard';
import { AdminAuthGuard } from './Auth/admin-auth.guard';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    AdhomeComponent,
    UwhomeComponent,
    AdloginComponent,
    UwloginComponent,
    UhomeComponent,
    LifeComponent,
    DentalComponent,
    DentalVisionComponent,
    ServiceComponent,
    CreatuwComponent,
    AdheaderComponent,
    SidenavListComponent,
    FetchdatadentalComponent,
    FetchdatalifeComponent,
    FetchdatadentalvisionComponent,
    CreateadminComponent,
    SuccessfullcomponentComponent,
    LifeServiceUserDetailsComponent,
    POPUPComponent,
    Service1Component,
    Aboutus1Component,
    Contact1Component,
    DentaluserdetailsComponent,
    DentalvisiondetailsComponent,
    UWheaderComponent,
    UWSidelistComponent,
    UwFetchDentalDataComponent,
    UwFetchLifeDataComponent,
    UwFetchDVDataComponent,
    UwLifeDetailsComponent,
    UwDVDetailsComponent,
    UwDentalDetailsComponent,
    FetchuwdetailsComponent,
    FetchuserdetailsComponent,
    SendEmailComponent,
    SendmailUWComponent
    



  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatDialogModule

  ],
  providers: [UserAuthGuard,RegistrationService,UwriterAuthGuard,AdminAuthGuard],
  bootstrap: [AppComponent],
  entryComponents:[POPUPComponent]

})
export class AppModule { }
