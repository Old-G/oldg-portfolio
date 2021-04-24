import Contact from './components/Contact'
import Header from './components/Header'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Stack from './components/Stack'
import content from './content'

function App() {
  return (
    <div className=''>
      <Nav data={content.nav} />
      <Header data={content.header} />
      <Projects data={content.work} />
      <Stack data={content.stack} />
      <Contact data={content.contact} />
    </div>
  )
}

export default App
