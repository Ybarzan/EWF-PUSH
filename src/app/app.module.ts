import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ProductListComponent } from "./product-list/product-list.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HttpClient } from "@angular/common/http";

NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        NavbarComponent,
        HttpClient
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }