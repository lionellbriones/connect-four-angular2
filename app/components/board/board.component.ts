import {Component, OnInit} from 'angular2/core';
@Component({
    selector: 'board',
    templateUrl: 'components/board/board.component.html',
    styleUrls: ['components/board/board.component.css']
})
export class BoardComponent implements OnInit {
  public board = [];
  public boardHeader = [];
  public maxColumn = 7;
  public maxRow = 6;
  public turn = 0;

  private changePlayer() {
    this.turn = this.turn == 1 ? 2 : 1;
  }

  dropTurn(columnId) {
    var maxRow = this.maxRow-1;
    for(var row = maxRow; row>=0; row--){
      if(this.board[row][columnId].player == 0){
        this.board[row][columnId].player = this.turn;
        this.changePlayer();
        return;
      }
    }

    alert('Full');
  }

  ngOnInit() {
    for(var column=0; column < this.maxColumn; column++){
      this.boardHeader.push(column);
    }
    for(var row=0; row < this.maxRow; row++){
      this.board[row] = [];
      for(var column=0; column < this.maxColumn; column++){
        this.board[row][column] = {player: 0};
      }
    }

    this.changePlayer();
  }

}
