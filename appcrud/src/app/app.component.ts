import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '', icon: 'home' },
    { title: 'Produto', url: '/produto', icon: 'bag-handle' },
    { title: 'Cliente', url: '/cliente', icon: 'people' },
    { title: 'Favoritos', url: '', icon: 'heart' },
    { title: 'Arquivados', url: '', icon: 'archive' },
    { title: 'Promoção', url: '', icon: 'pricetag' },
  ];
 
}
