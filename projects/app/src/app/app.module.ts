import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";

import { FlexLayoutModule } from "@angular/flex-layout";

import {
  PerfectScrollbarModule,
  PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG,
} from "@farmarcas/ngx-perfect-scrollbar";

import { AppComponent } from "./app.component";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
};

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, FlexLayoutModule, PerfectScrollbarModule.forRoot()],
  exports: [],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class AppModule {}
