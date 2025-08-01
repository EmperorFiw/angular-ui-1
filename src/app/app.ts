import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from './pages/main/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
