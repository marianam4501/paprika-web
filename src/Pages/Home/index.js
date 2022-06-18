import { Link } from 'react-router-dom';
export function Home() {
    return (
      <div>
        HOME
        <br />
        <button className='border rounded bg-light-orange shadow-sm'>
          <Link to="/register">Register</Link>
        </button>
      </div>
    );
  }