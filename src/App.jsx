import './App.css'
import SkillCard from './components/SkillCard'
import Header from './components/Header'
import HeroSection from './components/Homepage/HeroSection'

function App() {

	return (
		<>
			<Header />
			<HeroSection />
		<div className='grid grid-cols-3 dark:bg-slate-900 p-8'>
				<SkillCard courseTitle={"Being An Asshole"} />
				<SkillCard/>
				<SkillCard/>
			</div>
		</>
	)
}

export default App
