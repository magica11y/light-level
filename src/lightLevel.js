// @flow

import matchUserPreference from '@magica11y/match-user-preference';

import availableLightLevels, { type LightLevel } from './availableLightLevels';

const lightLevelsValues: Array<LightLevel> = [
  availableLightLevels.NORMAL,
  availableLightLevels.DIM,
  availableLightLevels.WASHED,
];

/**
 * Detects the ambient light-level in which the device is used
 * using CSS3 Media Queries level 5 specification for `'light-level'`.
 *
 * @returns Either 'normal', 'dim', 'washed' or `null`
 * @see https://drafts.csswg.org/mediaqueries-5/#light-level
 */
const lightLevel = (): ?LightLevel => {
  const matchedLightLevel: ?LightLevel = lightLevelsValues.find((lightLevelValue: LightLevel) =>
    matchUserPreference('light-level', lightLevelValue),
  );

  if (matchedLightLevel) {
    return matchedLightLevel;
  }

  return null;
};

export default lightLevel;
