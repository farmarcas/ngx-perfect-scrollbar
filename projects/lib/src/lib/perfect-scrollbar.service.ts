import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { PerfectScrollbarListener } from "./perfect-scrollbar.interfaces";

@Injectable({
  providedIn: "root",
})
export class PerfectScrollbarService {
  public listenerSubject = new Subject<PerfectScrollbarListener>();
}
