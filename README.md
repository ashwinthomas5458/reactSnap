# reactSnap

A React (Create React App) course-marketplace landing page that is pre-rendered at build time with [react-snap](https://github.com/stereobooster/react-snap) for SEO. It is a variant of the `evoque_task` page (package name `test`).

## Overview

- `src/index.js` hydrates the app when the root element already has pre-rendered HTML (`ReactDOM.hydrate`), otherwise renders it normally.
- `src/App.js` uses `BrowserRouter` with a home route (`/`) and one `/detail/<course-name>` route per course.
- `src/pages/Home.js` and `src/pages/Detail.js` set the document title with `react-helmet`.
- Section components in `src/components` (Nav, Cover, Featured, Popular, CourseCategories, OfferIncluded, MobileApp, Footer, Card, CourseDetail) render the page; data hooks in `src/hooks` (`GetCourses`, `GetCategories`, `GetDetails`) fetch course data from a remote API.

## Scripts

```
npm start       # development server
npm run build   # production build; postbuild runs react-snap to pre-render pages
npm test
```

react-snap is a dev dependency and drives a headless browser, so the build requires network access to the data API for the pre-rendered content to include course data.
