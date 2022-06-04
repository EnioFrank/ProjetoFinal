import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '', icon: 'home' },
    { title: 'Produto', url: '/produto', icon: 'fish' },
    { title: 'Cliente', url: '/cliente', icon: 'person' },
    { title: 'Favoritos', url: '', icon: 'heart' },
    { title: 'Arquivados', url: '', icon: 'archive' },
    { title: 'Promoção', url: '', icon: 'pricetag' },
  ];
 
}
