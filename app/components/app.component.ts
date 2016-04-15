import {Component} from 'angular2/core';
import {BoardComponent} from './board/board.component';

@Component({
    selector: 'my-app',
    templateUrl: 'components/app.component.html',
    styleUrls: ['components/app.component.css'],
    directives: [BoardComponent]
})
export class AppComponent {
}
