import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CanvasComponent } from './canvas/canvas.component';
import { SideModalComponent } from './side-modal/side-modal.component';
import { TreeComponent } from './tree/tree.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { LanguageComponent } from './language/language.component';
import { ResponsibilitiesComponent } from './responsibilities/responsibilities.component';
import { ModalFooterComponent } from './modal-footer/modal-footer.component';
import { ColorFormComponent } from './color-form/color-form.component';
import { LiModalComponent } from './li-modal/li-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CanvasComponent,
    SideModalComponent,
    TreeComponent,
    SideMenuComponent,
    ColorPickerComponent,
    LanguageComponent,
    ResponsibilitiesComponent,
    ModalFooterComponent,
    ColorFormComponent,
    LiModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
