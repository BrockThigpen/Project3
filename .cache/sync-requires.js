const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/tylercauley/Desktop/Homeworks/Project3/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/tylercauley/Desktop/Homeworks/Project3/src/pages/404.js"))),
  "component---src-pages-auth-0-callback-js": hot(preferDefault(require("/Users/tylercauley/Desktop/Homeworks/Project3/src/pages/auth0_callback.js"))),
  "component---src-pages-example-js": hot(preferDefault(require("/Users/tylercauley/Desktop/Homeworks/Project3/src/pages/example.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/tylercauley/Desktop/Homeworks/Project3/src/pages/index.js"))),
  "component---src-pages-leaderboard-js": hot(preferDefault(require("/Users/tylercauley/Desktop/Homeworks/Project3/src/pages/leaderboard.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/tylercauley/Desktop/Homeworks/Project3/src/pages/page-2.js")))
}

