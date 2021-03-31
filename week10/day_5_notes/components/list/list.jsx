import React from 'react';
import Item from 'components/list/item';

import React from 'react';
import Item from 'components/list/item';

const List = ({ items, resetItems }) => {
	const listItems = items.map((item, idx) => (
		<Item key={idx} item={item} />
	);

	return (
		<div className="list">
			<h1 onClick={resetItems}>
				Click to Reset
			</h1>
			<ul className='list-items'>
				{listItems}
			</ul>
		</div>
	);
};

export default List;