import Header from './components/Header';
import Banner from './components/Banner';
import Articles from './components/Articles';
import Info from './components/Info';
import Footer from './components/Footer';
import './App.scss';

function App() {
	return (
		<div className="app">
			<Header />
			<Banner />
			<div id="wrapper">
				<Articles />
				<Info />
				<Footer />
			</div>
		</div>
	);
}

export default App;
