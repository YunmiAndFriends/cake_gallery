import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cover from './pages/Main/cover';
import Gallery from './pages/Gallery/Gallery';
import Main from './pages/Main/main';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Cover />} />
				<Route path="/" element={<Main />} />
				<Route path="/AllGallery" element={<Gallery />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
