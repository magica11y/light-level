`lightLevel()`
==============
> Detects the ambient light-level of the user’s device using the `light-level` CSS3 level 5 media query.

[![Travis](https://img.shields.io/travis/com/magica11y/light-level.svg?style=for-the-badge)](https://travis-ci.com/magica11y/light-level)
[![npm](https://img.shields.io/npm/v/@magica11y/light-level.svg?style=for-the-badge "NPM")](https://www.npmjs.com/package/@magica11y/light-level)
[![Bundlephobia](https://img.shields.io/bundlephobia/min/@magica11y/light-level.svg?style=for-the-badge "Bundle size (minified)")](https://bundlephobia.com/result?p=@magica11y/light-level)
[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/@magica11y/light-level.svg?style=for-the-badge "Bundle size (minified+gzipped)")](https://bundlephobia.com/result?p=@magica11y/light-level)
[![Coveralls](https://img.shields.io/coveralls/magica11y/light-level.svg?style=for-the-badge "Test coverage status")](https://coveralls.io/r/magica11y/light-level)
[![David](https://img.shields.io/david/magica11y/light-level.svg?style=for-the-badge "Dependencies")](https://david-dm.org/magica11y/light-level)
[![David](https://img.shields.io/david/dev/magica11y/light-level.svg?style=for-the-badge "Dev Dependencies")](https://david-dm.org/magica11y/light-level?type=dev)
[![node](https://img.shields.io/node/v/@magica11y/light-level.svg?style=for-the-badge "Node engine")](https://www.npmjs.com/package/@magica11y/light-level)
[![License](https://img.shields.io/github/license/magica11y/light-level.svg?style=for-the-badge "MIT license")](LICENSE.md)
![Greenkeeper](https://badges.greenkeeper.io/magica11y/light-level.svg?style=flat-square "Greenkeeper")

[![Magica11y cover](https://cdn.jsdelivr.net/gh/magica11y/cauldron@1.0.7/assets/Magica11y-cover.jpg "Magica11y cover")](https://magica11y.github.io)


# :sparkles: Introduction

Quoting from the [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) [level 5](https://drafts.csswg.org/mediaqueries-5)
[media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) specfication…

> The [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) media feature
> is used to detect if the user has requested the system to minimize the amount of animation or motion it uses.

:candle: **`lightLevel()`** is part of :crystal_ball: [**Magica11y**](https://magica11y.github.io),
which provides a suite of functions to detect “user-preference” and “environment” media features.

[Magica11y](https://magica11y.github.io) functions are awesome because…
  * They have **zero** dependencies
  * They’re **lightweight**; e.g. `lightLevel()` is just [![Bundlephobia](https://img.shields.io/bundlephobia/min/@magica11y/light-level.svg?style=flat-square&label "Bundle size (minified)")](https://bundlephobia.com/result?p=@magica11y/light-level) minified, or [![Bundlephobia](https://img.shields.io/bundlephobia/minzip/@magica11y/light-level.svg?style=flat-square&label "Bundle size (minified+gzipped)")](https://bundlephobia.com/result?p=@magica11y/light-level) minified & gzipp’d
  * They use the **[`window.matchMedia`](https://developer.mozilla.org/docs/Web/API/Window/matchMedia)** API underneath
  * They’re optimized for **performance**; all the module functions are designed in such a way that they exit early
  * They provide a **clean**, **well-documented** and **semantic** API to work with

In addition to `lightLevel()`, [Magica11y](https://magica11y.github.io) also provides…

  * :tv: [`environmentBlending()`](https://github.com/magica11y/environment-blending)
  * :new_moon: [`invertedColors()`](https://github.com/magica11y/inverted-colors)
  * :art: [`forcedColors()`](https://github.com/magica11y/forced-colors)
  * :last_quarter_moon: [`prefersColorScheme()`](https://github.com/magica11y/prefers-color-scheme)
  * :high_brightness: [`prefersContrast()`](https://github.com/magica11y/prefers-contrast)
  * :roller_coaster: [`prefersReducedMotion()`](https://github.com/magica11y/prefers-reduced-motion)
  * :gem: [`prefersReducedTransparency()`](https://github.com/magica11y/prefers-reduced-transparency)

# :rocket: Getting started

## :building_construction: Installation

You can install `lightLevel()` using a package manager such as [`yarn`](https://yarnpkg.com/en/package/@magica11y/light-level) or [`npm`](https://www.npmjs.com/package/@magica11y/light-level)…

```sh
$ yarn add "@magica11y/light-level"
# OR
$ npm install --save "@magica11y/light-level"
```

You can also include `lightLevel()` from a CDN on your page, such as [jsDelivr](https://www.jsdelivr.com/package/npm/@magica11y/light-level) or [unpkg](https://unpkg.com/@magica11y/light-level)…

```html
<script src="https://cdn.jsdelivr.net/npm/@magica11y/light-level@latest/dist/magica11y.lightLevel.min.js"></script>
<!-- OR -->
<script src="https://unpkg.com/@magica11y/light-level@latest/dist/magica11y.lightLevel.js"></script>
```

## :game_die: Usage

`lightLevel()` is distributed as a [UMD](https://github.com/umdjs/umd) module, so you can use it as a browser global…

```js
var currentLightLevel = window.magica11y.lightLevel.default();
var disableAnimations = (currentLightLevel === window.magica11y.lightLevel.availableLightLevels.DIM);
```

… or as a CommonJS module…

```js
const lightLevel = require('@magica11y/light-level');
const currentLightLevel = lightLevel.default();
const disableAnimations = (currentLightLevel === lightLevel.availableLightLevels.DIM);
```

… or as an ES module…

```js
import lightLevel, { availableLightLevels } from 'magica11y/lightLevel';

const currentLightLevel = lightLevel();
const enableDarkMode = (currentLightLevel === availableLightLevels.DIM);
```

The `availableLightLevels` object contains all the possible values supported by the `'light-level'` media query…

* `availableLightLevels.NORMAL` (spec: [`'normal'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-light-level-normal))
  > The device is used in a environment with a light level in the ideal range for the screen, and which does not necessitate any particular adjustment.
* `availableLightLevels.DIM` (spec: [`'dim'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-light-level-dim))
  > The device is used in a dim environment, where excessive contrast and brightness would be distracting or uncomfortable to the reader. For example: night time, or a dimly illuminated indoor environment.
* `availableLightLevels.WASHED` (spec: [`'washed'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-light-level-washed))
  > The device is used in an exceptionally bright environment, causing the screen to be washed out and difficult to read. For example: bright daylight.
* `null`
  > The device’s ambient light-level could not be determined.


# :checkered_flag: Typechecking

You can import the [Flow](https://flow.org) types from the provided [libdefs](https://flow.org/en/docs/libdefs)
in `node_modules/@magica11y/light-level/lib` by configuring them in your `.flowconfig`…

```
[libs]
node_modules/@magica11y/light-level/lib
```

Now, you can use the Flow types as follows…

```js
// @flow
import lightLevel, { type LightLevel } from '@magica11y/light-level';

const currentLightLevel: ?LightLevel = lightLevel();
```

:tophat: **Note**: `lightLevel()` returns a [`nullable`](https://flow.org/en/docs/types/primitives/#toc-null-and-void)
type (i.e. `LightLevel`). So using the `?` prefix to indicate nullable types is recommended (i.e. `?LightLevel`).


# :scroll: License

[![License](https://img.shields.io/github/license/magica11y/magica11y.svg?style=for-the-badge "MIT license")](LICENSE.md)

See [LICENSE.md](LICENSE.md) for more details.

Handcrafted with :heart: by [Rishabh Rao](https://github.com/rishabhsrao).

[![Twitter](https://img.shields.io/twitter/follow/rishabhsrao.svg?style=social)](https://twitter.com/rishabhsrao)
