import React from 'react';
import './App.css';
import Table from './components/Table';
class App extends  React.Component{
    constructor(props){
        super(props);

        this.state = {
            positionPrince: null,
            demonsPositions: null,
            rowCount: null,
            columnCount: null,
            totalMoves: 0
    }
    }

    updateGameState(positionPrince){
        let newDemonsPostions = this.state.demonsPositions;


        for (let i = 0; i < this.state.demonsPositions.length; i++) {

            if (positionPrince.row === this.state.demonsPositions[i].row && positionPrince.column === this.state.demonsPositions[i].column) {
                newDemonsPostions.splice(i, 1);
                break;
            }
        }

        this.setState({
            demonsPositions: newDemonsPostions,
            positionPrince: positionPrince,
            totalMoves: this.state.totalMoves + 1
        })

    }

    movePrince(direction) {
        if (direction === "up") {
            if (this.state.positionPrince.row == 0)
                return;
            let positionPrince = {
                row: this.state.positionPrince.row - 1,
                column: this.state.positionPrince.column
            }
            this.updateGameState(positionPrince);


        }


        if (direction === "down") {
            if (this.state.positionPrince.row == this.state.rowCount - 1)
                return;
            let positionPrince = {
                row: this.state.positionPrince.row + 1,
                column: this.state.positionPrince.column
            }

            this.updateGameState(positionPrince);
        }


        if (direction === "left") {
            if (this.state.positionPrince.column == 0)
                return;
            let positionPrince = {
                row: this.state.positionPrince.row,
                column: this.state.positionPrince.column - 1
            }
            this.updateGameState(positionPrince);
        }

        if (direction === "right") {
            if (this.state.positionPrince.column == this.state.rowCount - 1)
                return;
            let positionPrince = {
                row: this.state.positionPrince.row,
                column: this.state.positionPrince.column + 1
            }
            this.updateGameState(positionPrince);
        }
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.demonsPositions.length == 0)
        {
            alert("Game complete. Total Moves "+this.state.totalMoves);
        }
}

    componentDidMount() {

        let checkkey = (e) => {

            if(this.state.demonsPositions.length == 0)
                return;

            e = e || window.event;

            if (e.keyCode == '38') {
                this.movePrince("up");
            }
            else if (e.keyCode == '40') {
                this.movePrince("down");
            }
            else if (e.keyCode == '37') {
                this.movePrince("left");
            }
            else if (e.keyCode == '39') {
                this.movePrince("right");
            }

        }

        let rowsCount = prompt("Enter width", "10");
        let columnCount = prompt("Enter height", "10");

        let numOfDemons = parseInt((rowsCount*columnCount)/10);

        let demonsPositions = [];

       let positionPrince = { row: parseInt(rowsCount/2), column: parseInt(columnCount/2)};


       while(demonsPositions.length != numOfDemons){

           let randomPosition = Math.random() * (rowsCount*columnCount);
           let demonPosition = {
               row: parseInt(randomPosition/10),
               column: parseInt(randomPosition%10)
           }
           if(demonPosition !== positionPrince) {
               demonsPositions.push(demonPosition);
           }
       }

        this.setState({
            positionPrince: positionPrince,
            demonsPositions: demonsPositions,
            rowCount: rowsCount,
            columnCount: columnCount
        }, () => {
            document.addEventListener('keydown', checkkey);

        });
    }

    render (){
console.log(this.state.totalMoves);
    return(<div className="App">
      <Table rowCount={this.state.rowCount}
             positionPrince={this.state.positionPrince}
             demonsPositions={this.state.demonsPositions}
             columnCount={this.state.columnCount} />
    </div>);
  }
}

export default App;
