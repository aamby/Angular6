import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';

// import 'rxjs/add/observable/combineLatest';
// import {combineLatest} from 'rxjs/observable/combineLatest'

@Component({
  selector: 'githubfollowers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //We can use observable or we can go for snapshot
    //But its better to use observables
    //Combining multiple observables
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(combined=>{
      let id = +combined[0].get('id'); //This + will make the string to number
      let page= +combined[1].get('page');
      let order = combined[1].get('order');

      console.log(id, page, order);

      //next with these params we can call some db calls
      //Those calls will have also subscribe method, that is little ugly, we need to handle that in a better way
    });

    //Mandatory params
    //let id=this.route.snapshot.paramMap.get('id');
    // this.route.paramMap.subscribe(params=>{

    // });
    
    //Optional params - query params
    // let page=this.route.snapshot.queryParamMap.get('page');
    // let order = this.route.snapshot.queryParamMap.get('order');
    // console.log(page, order);

    // this.route.queryParamMap.subscribe(params=>{
      
    // });
   
  }

  id:number = 1;
  name:string = 'Roy';
}
