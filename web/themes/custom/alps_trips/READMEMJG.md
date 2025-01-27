# Notes for Michael j Gleeson

To start from chapter 2

1. `ddev start`
2. `ddev build`
## Css and js builders

~~1. node verison is not going to work need to update.~~
* `$ ddev ssh `
* `npm install n -g `
* `sudo n lts `
*  `n prune`
* may need to restart the ddev ssh shell.
* I think i fixed this with updating the .ddev/config node version to 18. 

2. To build yarn node_modules folder.
 - From the themes custom alps_trips folder.
 - `yarn run build:dev`
   - This script is in the package.json file in the theme.
 - Run $ yarn does this work outside of ddev ssh?

3. Creating the build folder
* `$ddev ssh`
* `$ node_modules/.bin/webpack --config webpack.config.js --mode development`
* Or `yarn run build:dev`
* This will have to be done for every css change.

## browsersync
With the addon added.
* `ddev browsersync` and leave running.
* and in another shell
* `$ddev watch` and leave running, this tells webpack to watch files and rebuilds everything if one fo the changes. Which is nice.
* N.B. the ULR for Brrowsersync should not be used for admin only frontend dev use other URL's for admin and interacting with the site.

## Backstop JS
* `$ddev backstop test`
* Look at report in .ddev/tests/backstop/backstop_data/html_report/index.html
*


