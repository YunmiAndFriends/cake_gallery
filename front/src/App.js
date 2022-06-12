import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cover from './pages/Main/cover';
import Gallery from './pages/Gallery/Gallery';
import Main from './pages/Main/main';
import Mypage from './pages/Main/mypage';
import _Mypage from './pages/Main/_mypage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Cover />} />
				<Route path="/main" element={<Main />} />
				<Route path="/mypage" element={<Mypage />} />
				<Route path="/_mypage" element={<_Mypage />} />

				<Route path="/AllGallery" element={<Gallery />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
