# Notes for Michael j Gleeson

To start from chapter 2

1. `ddev start`
2. `ddev build`
   3. This rebuild the entier site Db and content, will delete aany content or admin stuff. possibly even code. CHECK about the code.


## Css and js builders

### Updating node via node version manager n

Sometimes I need to update the version of Node, as the newer version of node packages need a newer version of node to do this do the following:

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

## Linters and code sniffers.

### Stylelint

```
ddev yarn --cwd=web/themes/custom/alps_trips lint:css
```

* Had to remove max-line-length and function-whitespace-after from core/.stylelintrc.json
* there is prob a patch to remove this from Drupal. There does appear to be an newer version of the file without the above.

### EsLint
```
ddev yarn --cwd=web/themes/custom/alps_trips lint:js
```
Had to set the proper eslint dependency back to  "eslint": "^8.2.0", as it broke seom stuff otherwise.


### phpcs

```
ddv composer run-script lint:php
```
