import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import Logo  from '../components/Logo'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            The best job tracking application for students and working professionals.
            Never miss an opportunity and leave nothing to chance! 
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
