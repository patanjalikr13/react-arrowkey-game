import React from 'react';
import TableCell from './TableCell';

class TableRow extends React.Component{

    render() {
        if(this.props.rowCount != null && this.props.columnCount!=null){

            let cells = [];
            for(let i=0; i<this.props.columnCount; i++){
                cells.push(<TableCell key={i}
                columnKey = {i}
            rowKey={this.props.rowKey}
            positionPrince={this.props.positionPrince}
            demonsPositions={this.props.demonsPositions}
            rowCount={this.props.rowCount}
            columnCount={this.props.columnCount} />);
            }
            return(
               <tr>
                   {cells}
               </tr>
            )
        }else
            return null;
    }
}

export default TableRow;