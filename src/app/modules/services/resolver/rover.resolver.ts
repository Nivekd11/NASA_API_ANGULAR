import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
import { SearchService } from '../../dashboard/services/search.service';

@Injectable({
  providedIn: 'root'
})
export class RoverResolver implements Resolve<any> {

  constructor(private searchService: SearchService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const regex = /[ ]/g;
    return this.searchService.searchRobert(moment().subtract(1, 'days').format('YYYY MM DD').replace(regex,"-")) ;
  }
}
