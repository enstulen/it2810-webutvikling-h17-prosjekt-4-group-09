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
	loggedIn = false;

	email: string;
	password: string;
	passwordRepeat: string;
	warningLabel: string;

	searchString: string;

	constructor(
		private messageService: MessageService,
		private router: Router,
		private dataService: DataService
	) {
		this.warningLabel = '';
		if (localStorage.getItem('token')) {
			this.loggedIn = true;
		}
	}

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
		this.showLogin = false;
		this.warningLabel = '';
		const x = document.getElementById('myTopnav');
		x.className = 'topnav';
	}
	switchLoginButtonPressed() {
		this.warningLabel = '';
		this.login = !this.login;
	}

	loginServer() {
		let response: any;
		this.dataService.login(this.email, this.password).subscribe(
			data => {
				response = data;
				this.showLogin = false;
				this.loggedIn = true;
				this.router.navigate(['/profile']);
				localStorage.setItem('token', response.token);
				this.warningLabel = '';
			},
			err => {
				this.warningLabel = 'Feil ved innlogging.';
				console.error(err);
			},
			() => {
				console.log(response);
			}
		);
	}
	registerServer() {
		let response: any;
		if (this.password === this.passwordRepeat) {
			this.dataService.createUser(this.email, this.password).subscribe(
				data => {
					response = data;
					this.showLogin = false;
					this.warningLabel = '';
					this.loginServer();
				},
				err => {
					this.warningLabel = 'Feil ved registrering.';
					console.error(err);
				},
				() => {
					console.log(response);
				}
			);
		} else {
			this.warningLabel = 'Passord må være like.';
		}
	}

	loginButtonPressed() {
		if (this.login) {
			this.loginServer();
		} else {
			this.registerServer();
		}
	}
	profileButtonPressed() {
		this.showLogin = !this.showLogin;
	}
	profileButtonMenuPressed() {
		this.showLogin = false;
		this.router.navigate(['/profile']);
	}
	logoutButtonPressed() {
		this.router.navigate(['/']);
		this.loggedIn = false;
		this.showLogin = false;
		localStorage.removeItem('token');
	}
}
