export enum TraditionalTypeScaleEnum {
  MINOR_SECOND = 1.067,
  MAJOR_SECOND = 1.125,
  MINOR_THIRD = 1.2,
  MAJOR_THIRD = 1.25,
  PERFECT_FOURTH = 1.333,
  AUGMENTED_FOURTH = 1.414,
  PERFECT_FIFTH = 1.5,
  MINOR_SIXTH = 1.6,
  GOLDEN_SECTION = 1.618,
  MAJOR_SIXTH = 1.667,
  MINOR_SEVENTH = 1.778,
  MAJOR_SEVENTH = 1.875,
  OCTAVE = 2,
  MAJOR_TENTH = 2.5,
  MAJOR_ELEVENTH = 2.667,
  MAJOR_TWELFTH = 3,
}

export type TraditionalTypeScaleNames =
  | 'minor-second'
  | 'major-second'
  | 'minor-third'
  | 'major-third'
  | 'perfect-fourth'
  | 'augmented-fourth'
  | 'perfect-fifth'
  | 'minor-sixth'
  | 'golden-section'
  | 'major-sixth'
  | 'minor-seventh'
  | 'major-seventh'
  | 'octave'
  | 'major-tenth'
  | 'major-eleventh'
  | 'major-twelfth'

export type TypeScaleInput = number | TraditionalTypeScaleEnum | TraditionalTypeScaleNames

/**
 * Converts a type scale multiplier to a number even if it's a strin with traditional type scale name.
 * @param input The type scale multiplier from enum, traditional type scale name, or number.
 */
export function handleTypeScaleInput(input: TypeScaleInput): number {
  if (typeof input === 'string') {
    return TraditionalTypeScaleEnum[input.toUpperCase().replace('-', '_') as keyof typeof TraditionalTypeScaleEnum]
  } else {
   return input
  }
}

