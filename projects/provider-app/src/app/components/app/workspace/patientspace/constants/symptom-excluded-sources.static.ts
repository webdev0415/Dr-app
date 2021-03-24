const symptomExcludedSources: RegExp[] = [/^macro/i, /preprocessor/i];
export const symptomSourceExcluded = (symptomSource: string): boolean => symptomExcludedSources.some(source => symptomSource.match(source));
