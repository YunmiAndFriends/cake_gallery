import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Cover from './pages/Main/cover';
import Gallery from './pages/Gallery/Gallery';
import Main from './pages/Main/main';
import Store from './pages/Gallery/Store';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" element={<Cover />} /> */}
				<Route path="/" element={<Main />} />
				<Route path="/AllGallery" element={<Gallery />} />
				<Route path="/Store" element={<Store />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
