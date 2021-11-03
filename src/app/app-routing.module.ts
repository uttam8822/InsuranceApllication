import { FetchuserdetailsComponent } from './fetchuserdetails/fetchuserdetails.component';
import { FetchuwdetailsComponent } from './fetchuwdetails/fetchuwdetails.component';
import { DentalvisiondetailsComponent } from './dentalvisiondetails/dentalvisiondetails.component';
import { DentaluserdetailsComponent } from './dentaluserdetails/dentaluserdetails.component';
import { Contact1Component } from './contact1/contact1.component';
import { Aboutus1Component } from './aboutus1/aboutus1.component';
import { CreatuwComponent } from './creatuw/creatuw.component';
import { ServiceComponent } from './service/service.component';
import { DentalVisionComponent } from './dental-vision/dental-vision.component';
import { DentalComponent } from './dental/dental.component';
import { LifeComponent } from './life/life.component';
import { UhomeComponent } from './uhome/uhome.component';
import { UwloginComponent } from './uwlogin/uwlogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { UwhomeComponent } from './uwhome/uwhome.component';
import { AdhomeComponent } from './adhome/adhome.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FetchdatadentalComponent } from './fetchdatadental/fetchdatadental.component';
import { FetchdatalifeComponent } from './fetchdatalife/fetchdatalife.component';
import { FetchdatadentalvisionComponent } from './fetchdatadentalvision/fetchdatadentalvision.component';
import { CreateadminComponent } from './createadmin/createadmin.component';
import { SuccessfullcomponentComponent } from './successfullcomponent/successfullcomponent.component';
import { LifeServiceUserDetailsComponent } from './life-service-user-details/life-service-user-details.component';
import { Service1Component } from './service1/service1.component';
import { UwFetchDentalDataComponent } from './uw-fetch-dental-data/uw-fetch-dental-data.component';
import { UwFetchDVDataComponent } from './uw-fetch-dvdata/uw-fetch-dvdata.component';
import { UwFetchLifeDataComponent } from './uw-fetch-life-data/uw-fetch-life-data.component';
import { UwLifeDetailsComponent } from './uw-life-details/uw-life-details.component';
import { UwDentalDetailsComponent } from './uw-dental-details/uw-dental-details.component';
import { UwDVDetailsComponent } from './uw-dvdetails/uw-dvdetails.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { SendmailUWComponent } from './sendmail-uw/sendmail-uw.component';
import { UserAuthGuard } from './Auth/user-auth.guard';
import { UwriterAuthGuard } from './Auth/uwriter-auth.guard';
import { AdminAuthGuard } from './Auth/admin-auth.guard';
const routes: Routes = [
  {path:'',pathMatch:"full", redirectTo:"home"},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'adhome',component:AdhomeComponent,canActivate:[AdminAuthGuard]},
  {path:'uwriterhome',component:UwhomeComponent,canActivate:[UwriterAuthGuard]},
  {path:'uwlogin',component:UwloginComponent},
  {path:'adlogin',component:AdloginComponent},
  {path:'uhome',component:UhomeComponent,canActivate:[UserAuthGuard]},
  {path:'life',component:LifeComponent},
  {path:'service',component:ServiceComponent},
  {path:'cretuw',component:CreatuwComponent},
  {path:'dental',component:DentalComponent},
  {path:'denvi',component:DentalVisionComponent},
  {path:'signup',component:SignupComponent},
  {path:"detaldata",component:FetchdatadentalComponent},
  {path:"lifedata",component:FetchdatalifeComponent},
  {path:"DVdata",component:FetchdatadentalvisionComponent},
  {path:"createAdmin",component:CreateadminComponent},
  {path:"success",component:SuccessfullcomponentComponent},
  {path:"lifeServiceDetails",component:LifeServiceUserDetailsComponent},
  {path:"about1",component:Aboutus1Component},
  {path:"service1",component:Service1Component},
  {path:"contact1",component:Contact1Component},
  {path:"dentaldetails",component:DentaluserdetailsComponent},
  {path:"dvdetails",component:DentalvisiondetailsComponent},
  {path:"UWFetchDental11",component:UwFetchDentalDataComponent},
  {path:"UWFetchDV11",component:UwFetchDVDataComponent },
  {path:"UWFetchLife11",component:UwFetchLifeDataComponent},
  {path:"UWLifeDetails11",component:UwLifeDetailsComponent},
  {path:"UWDentalDetails11",component:UwDentalDetailsComponent},
  {path:"UWDVDetails11",component:UwDVDetailsComponent},
  {path:"fetchuwdetails",component:FetchuwdetailsComponent},
  {path:"fetchuserdetails",component:FetchuserdetailsComponent},
  {path:"UWDVDetails11",component:UwDVDetailsComponent},
  {path:"sendEmail",component:SendEmailComponent},
  {path:"sendEmailUW",component:SendmailUWComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
