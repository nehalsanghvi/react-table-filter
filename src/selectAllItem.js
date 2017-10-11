import React from 'react';
import createReactClass from 'create-react-class';

const SelectAllItem = createReactClass({
	getInitialState(){
		return {
		};
	},

	componentWillMount(){
		// console.log('------', this.props.children);
	},

	componentDidMount(){

	},

	_selectAllClicked(){
		this.props.filterClicked();
	},

	render(){
		const checkBoxClass = [this.props.selected ? "selected " : "", "filter-check-box"].join('');
		return (<div className="filter-list-item" onClick={this._selectAllClicked}>
					<div className={ checkBoxClass } ></div>
					<div className="filter-label select-all-label">Select All</div>
				</div>);
	}
});

// TODO - Write Proptypes Definition
// FilterListItem.propTypes = {
// }

export default SelectAllItem