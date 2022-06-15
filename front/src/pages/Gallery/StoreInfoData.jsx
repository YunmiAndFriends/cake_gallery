import React from 'react';
import { StoreInfoWrap, Storename, Storearea } from './StoreInfoData.style';

const StoreInfoData = ({ id, name, content, intro }) => {
	return (
		<StoreInfoWrap>
			<Storename>{name}</Storename>
			<Storearea>{content}</Storearea>
			<Storearea>{intro}</Storearea>
		</StoreInfoWrap>
	);
};

export default StoreInfoData;
