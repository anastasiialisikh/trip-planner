import Layout from './components/layout/Layout'
import Feed from './pages/Feed'
import './App.css';
import NewTrip from './pages/NewTrip';

function App() {
	return (
		<Layout>
			{/* <Feed /> */}
			<NewTrip />
		</Layout>
	);
}

export default App;
