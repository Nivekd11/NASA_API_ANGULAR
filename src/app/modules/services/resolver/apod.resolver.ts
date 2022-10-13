import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import * as moment from 'moment';
import { map, Observable, of, tap } from 'rxjs';
import { SearchService } from '../../dashboard/services/search.service';

@Injectable({
  providedIn: 'root'
})
export class ApodResolver implements Resolve<any> {

  constructor(private router: Router,private searchService: SearchService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    
    const regex = /[ ]/g;
    return this.searchService.searchApod(moment().subtract(3, 'days').format('YYYY MM DD').replace(regex,"-"),moment().format('YYYY MM DD').replace(regex,"-"))

  }
}
