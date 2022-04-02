import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestPage from './pages/TestPage/TestPage';
import Gallery from './pages/Gallery/Gallery';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TestPage />} />
				<Route path="/AllGallery" element={<Gallery />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
