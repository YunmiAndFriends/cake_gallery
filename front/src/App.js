import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gallery from './pages/Gallery/Gallery';
import LoginPage from './pages/Login/login_page';
import Cover from './pages/Main/cover';
import Main from './pages/Main/main';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="login" element={<LoginPage />} />
				<Route path="/" element={<Cover />} />
				<Route path="/" element={<Main />} />
				<Route path="/AllGallery" element={<Gallery />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
