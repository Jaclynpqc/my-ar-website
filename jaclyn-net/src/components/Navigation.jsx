import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900">Your Name</Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link 
              to="/" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                location.pathname === '/' 
                  ? 'text-gray-900 border-b-2 border-indigo-500' 
                  : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                location.pathname === '/about' 
                  ? 'text-gray-900 border-b-2 border-indigo-500' 
                  : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent'
              }`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                location.pathname === '/projects' 
                  ? 'text-gray-900 border-b-2 border-indigo-500' 
                  : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                location.pathname === '/contact' 
                  ? 'text-gray-900 border-b-2 border-indigo-500' 
                  : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 