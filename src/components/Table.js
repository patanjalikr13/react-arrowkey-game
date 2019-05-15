import React from 'react';
import TableRow from './TableRow';

class Table extends React.Component{

    render() {
        if(this.props.rowCount != null && this.props.columnCount!=null){
            let rows = [];
            for(let i=0; i<this.props.rowCount; i++){
                rows.push(<TableRow key={i}
                                    rowKey={i}
                                    positionPrince={this.props.positionPrince}
                                    demonsPositions={this.props.demonsPositions}
                                    rowCount={this.props.rowCount}
                                    columnCount={this.props.columnCount} />);
            }
            return(
                <table border={1}>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            )
        }else
            return null;
    }
}

export default Table;