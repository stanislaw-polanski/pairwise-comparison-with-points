class Item {

  constructor(value, score, secondGradeScore) {
    this.value = value;
    this.score = score || 0;
    this.secondGradeScore = secondGradeScore || 0;
  }
}

class Pair {

  constructor(item1, item2) {
    this.item1 = item1;
    this.item2 = item2;
    this.winner = null;
  }

  WinningPoints = () => 3;
  DrawPoints = () =>  1;
  DrawLabel = () =>  "draw";

  get voted() {
    return this.winner != null;
  }

  _voteFor(item, secondGradeScore) {
    if (!this.voted) {
      item.score = item.score + this.WinningPoints();
      item.secondGradeScore = item.secondGradeScore + secondGradeScore;
      this.winner = item;
    }
  }

  voteForDraw() {
    if (!this.voted) {
      this.item1.score = this.item1.score + this.DrawPoints();
      this.item2.score = this.item2.score + this.DrawPoints();
      this.winner = this.DrawLabel();
    }
  }

  voteForItem1() {
    this._voteFor(this.item1, this.WinningPoints());
  }

  voteForItem2() {
    this._voteFor(this.item2, this.WinningPoints());
  }

  voteForItem1WithPoints(points) {
    this._voteFor(this.item1, points);
  }

  voteForItem2WithPoints(points) {
    this._voteFor(this.item2, points);
  }

  isItem1Winner() {
    return this.winner == this.item1;
  }

  isItem2Winner() {
    return this.winner == this.item2;
  }
}