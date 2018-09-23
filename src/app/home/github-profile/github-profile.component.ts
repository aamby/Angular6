import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService, IProfile } from '../services/profile.service';

@Component({
  selector: 'githubprofile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private service: ProfileService) {}
  profile:IProfile;

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      let id = +params.get('id');
      this.profile = this.service.getProfile(id);
      
      // this.service.getProfile(id).subscribe((profile)=>{
      //   this.profile = profile;
      // });
    });
  }

  onPostsLinkClick(){
    //Showing both mandatory and optional parameters
    // this.router.navigate(['/posts', this.profile.name],{
    //   queryParams: {email: this.profile.email}
    // });

    this.router.navigate(['/app/posts'],{
      queryParams: {email: this.profile.email}
    });
  }
}
