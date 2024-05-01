# Notes for Michael j Gleeson

## Css and js builders

1. node verison is not going to work need to update.
* `$ ddev ssh `
* `npm install n -g `
* `sudo n lts `
*  `n prune`
* may need to restart the ddev ssh shell.

2. To build yarn node_modules folder.
 - From the themes custom alps_trips folder.
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
* `$ddev watch` and leave running
* N.B. the ULR for Brrowsersync should not be used for admin only frontend dev use other URL's for admin and interacting with the site.


