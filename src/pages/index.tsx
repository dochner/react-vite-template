import { LockClosedIcon } from '@heroicons/react/20/solid';

export default function Example() {
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 w-full bg-dark-page">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-center fw-black bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary text-5xl font-display drop-shadow-24">
              React + Vite Template
            </h1>
            <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-white">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border-1 ring-1 border-gray-300 px-3 py-2 text-dark placeholder-gray-500 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border-1 ring-1 border-gray-300 px-3 py-2 text-dark placeholder-gray-500 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:text-primary-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-primary-500 group-hover:text-primary-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
