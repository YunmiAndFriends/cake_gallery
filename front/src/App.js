import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gallery from './pages/Gallery/Gallery';
import LoginPage from './pages/Login/login_page';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/AllGallery" element={<Gallery />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
