import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-full  min-h-screen bg-light dark:bg-primary">
      <div className="text-center space-y-8 text-dark dark:text-slight">
        <h1 className="flex items-center mb-4">
          <span className="text-8xl font-bold mx-4"> 404</span> <span>| Not found</span>
        </h1>

        {/* go to home */}
        <Link to="/" className="text-dark dark:text-white">
          <button className="btn m-3 text-lg underline underline-2 underline-offset-2 fw-bold">
            Go to home
          </button>
        </Link>
      </div>
    </div>
  );
}
