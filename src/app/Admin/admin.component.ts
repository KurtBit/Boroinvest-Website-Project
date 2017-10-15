import {Component} from '@angular/core';

@Component({
    selector: 'app-admin',
    template: `
        <div class="app-admin">
            <div class="row">
                <div class="col-md-12">
                    Navbar
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2">
                    Sidebar
                </div>
                <div class="col-md-6 col-md-offset-2">
                   <router-outlet></router-outlet>                              
                </div>
            </div>
        </div>
    `
})
export class AdminComponent{

}