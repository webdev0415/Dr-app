export interface GeneratorContextInterface {
  hideMedicationInstructions: boolean;
  hideBrElements: boolean;
  textAreaBackgroundImage: string;
  pageBreakMethod: Partial<{ [key in 'before' | 'after' | 'mode' | 'avoid']: string[] }>;
  multiPage: boolean;
}
