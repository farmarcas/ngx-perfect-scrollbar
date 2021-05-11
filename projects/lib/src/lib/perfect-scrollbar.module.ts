import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PerfectScrollbarComponent } from "./perfect-scrollbar.component";
import { PerfectScrollbarDirective } from "./perfect-scrollbar.directive";
import { PerfectScrollbarService } from "./perfect-scrollbar.service";
import { ForceNativeScrollDirective } from "./perfect-scrollbar-force-native-scroll.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [
    PerfectScrollbarComponent,
    PerfectScrollbarDirective,
    ForceNativeScrollDirective,
  ],
  exports: [
    CommonModule,
    PerfectScrollbarComponent,
    PerfectScrollbarDirective,
    ForceNativeScrollDirective,
  ],
})
export class PerfectScrollbarModule {
  public static forRoot(): ModuleWithProviders<PerfectScrollbarModule> {
    return {
      ngModule: PerfectScrollbarModule,
      providers: [PerfectScrollbarService],
    };
  }

  public static forChild(): ModuleWithProviders<PerfectScrollbarModule> {
    return {
      ngModule: PerfectScrollbarModule,
    };
  }
}
