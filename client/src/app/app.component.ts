import { Component } from '@angular/core';
import { MessageService } from './services/message.service';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	menuVisible: false;
	login = true;
	showLogin = false;

	email: string;
	password: string;
	passwordRepeat: string;

	searchString: string;

	constructor(
		private messageService: MessageService,
		private router: Router,
		private dataService: DataService
	) {}

	searchChange(newValue) {
		this.router.navigate(['/search']);
		this.searchString = newValue;
		this.messageService.sendMessage(this.searchString);
		console.log(this.searchString);
	}

	onClickMenu() {
		this.showLogin = false;
		const x = document.getElementById('myTopnav');
		if (x.className === 'topnav') {
			x.className += ' responsive';
		} else {
			x.className = 'topnav';
		}
	}
	onClickLink() {
		const x = document.getElementById('myTopnav');
		x.className = 'topnav';
	}
	switchLoginButtonPressed() {
		this.login = !this.login;
	}
	loginButtonPressed() {
		if (this.login) {
			console.log('login');
			let response: any;
			this.dataService.login(this.email, this.password).subscribe(
				data => {
					response = data;
				},
				err => console.error(err),
				() => {
					console.log(response);
				}
			);
		} else {
			console.log('register');
			let response: any;
			this.dataService.createUser(this.email, this.password).subscribe(
				data => {
					response = data;
				},
				err => console.error(err),
				() => {
					console.log(response);
				}
			);
		}
	}
	profileButtonPressed() {
		this.showLogin = !this.showLogin;
	}
}
