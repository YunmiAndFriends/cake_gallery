import React from 'react';
import { StoreInfoWrap, Storename, Storearea } from './StoreInfoData.style';

const StoreInfoData = ({ id, name, content }) => {
	return (
		<StoreInfoWrap>
			<Storename>{name}</Storename>
			<Storearea>{content}</Storearea>
		</StoreInfoWrap>
	);
};

export default StoreInfoData;
