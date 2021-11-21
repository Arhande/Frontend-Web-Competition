import './App.css';
import FirstLayout from './components/FirstLayout';
import SecondLayout from './components/SecondLayout';
import ThirdLayout from './components/ThirdLayout';
import FourthLayout from './components/FourthLayout';
import FifthLayout from './components/FifthLayout';
import SixthLayout from './components/SixthLayout';
import SeventhLayout from './components/SeventhLayout';
import EighthLayout from './components/EightLayout';
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
	return (
		<div className="App">
			<FirstLayout />
			<SecondLayout />
			<ThirdLayout />
			<FourthLayout />
			<FifthLayout />
			<SixthLayout />
			<SeventhLayout />
			<EighthLayout />
			<Footer/>
		</div>
	);
}

export default App;
