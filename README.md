This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture

Given the time constraint, I did not invest much time into maintaining an organized file structure and instead defaulted to a simple solution. The location of page components is dictated by the AppRouter API, individual components are in the `app/components` directory, utlity functions are in `app/utils`, constant variables are in `app/constant`, and common types are in `app/types`.

The `app/layout.tsx` file handles setting the up the site's header and footer and a context provider for external data.

## Improvements

Some things I would have liked to have improved if I had more time in order of importance:

 * Setting up and adding tests
 * Improved UX
   * Additional accessibility improvements
   * Leaning more into tailwind's theme capabilites rather than specifying pixels in various components
   * Surfacing errors when unable to persist data
   * Loading state indicator
 * Some minor styling improvements
   * `Add set` section header is center aligned but should be left aligned with respect to the input section
   * The `+` in the `add set` button is not vertically centered
 * Organizing the components directory to establish a standard

## Issues

I noticed in the mobile mock the `add set` button does not have a black outline but it does in the desktop mock. I've not included it as I think it looks better without but this would be something I would clarify with a designer or compare against existing examples in the codebase in a typical workday.

Since we're fetching on the server and are therefore hitting the same end point multiple times on page navigation we could potentially run into an issue where the item from the initial fetch is no longer present in subsequent fetches (per the spec). I originally had set this up to run the query once and persist the data in memory locally via context to avoid this issue but that came with cors issues. So the solution is lean into the server side rendering model of Next which is generally preferred anyway. Part of the issue that confused me here was just being unfamiliar with the interaction between Server and Client components. 
