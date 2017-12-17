import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [`${require('./app.component.css')}`,`${require('../../../../public/css/clarity-ui.min.css')}`]
})
// バインディング変数をここに記述
export class AppComponent {
    public logoPath = "../../../../public/css/logo.png";
  back_home() {
  }
}
