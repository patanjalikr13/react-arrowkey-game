import React from 'react';

class TableRow extends React.Component{
    render() {
        let tdStyle = {
            width: 48,
            height: 48
        };
        if(this.props.rowCount != null && this.props.columnCount!=null && this.props.positionPrince!=null){

                if(this.props.columnKey === this.props.positionPrince.column
                    && this.props.rowKey === this.props.positionPrince.row)
                return(
                    <td style={tdStyle}><img src="https://img.icons8.com/color/48/000000/moderator-male.png" /></td>
            );


                for(let i=0; i<this.props.demonsPositions.length; i++){
                    let v = this.props.demonsPositions[i];
                if(v.row === this.props.rowKey && v.column === this.props.columnKey){
                    return(
                        <td style={tdStyle}><img src="https://img.icons8.com/color/48/000000/vampire.png" /></td>
                    )
                }
            }


        } else
            return null;

        return  (<td style={tdStyle}></td>);
    }
}
//https://img.icons8.com/color/48/000000/vampire.png
//https://img.icons8.com/color/48/000000/moderator-male.png
export default TableRow;