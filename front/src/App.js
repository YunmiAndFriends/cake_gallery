import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gallery from './pages/Gallery/Gallery';
import LoginPage from './pages/Login/login_page';
import Cover from './pages/Main/cover';
import Main from './pages/Main/main';
import Store from './pages/Gallery/Store';
import Mypage from './pages/Main/mypage';
import _Mypage from './pages/Main/_mypage';
import Customer from './pages/Login/customer_sign_up';
import SignUp from './pages/Login/sign_up';
import AllReview from './pages/Review/AllReview';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="login" element={<LoginPage />} />
				<Route path="customer_signup" element={<Customer />} />
				<Route path="sign_up" element={<SignUp />} />
				<Route path="/" element={<Cover />} />
				<Route path="/main" element={<Main />} />
				<Route path="/mypage" element={<Mypage />} />
				<Route path="/_mypage" element={<_Mypage />} />

				<Route path="/AllGallery" element={<Gallery />} />
				<Route path="/Store" element={<Store />} />
				<Route path="/AllReview" element={<AllReview />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
