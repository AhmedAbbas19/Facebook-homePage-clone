import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SpinnerService {
  loadingSub: BehaviorSubject<{url: string, loading: boolean}> = new BehaviorSubject(null);
  loadingMap: Map<string, boolean> = new Map<string, boolean>();

  constructor() {}

  setLoading(loading: boolean, url: string): void {
    if (!url) {
      throw new Error(
        "The request URL must be provided to the LoadingService.setLoading function"
      );
    }    
    this.loadingSub.next({url, loading});
  }
}
