import { GeneratorContextInterface } from './generator-context.interface';
import { ReturnToWorkTableImage } from './static';

export class GeneratorContext implements GeneratorContextInterface {
  public hideMedicationInstructions = false;
  public hideBrElements = false;
  public textAreaBackgroundImage = ReturnToWorkTableImage;
  public pageBreakMethod = {mode: ['css', 'avoid-all']};
  public multiPage = false;

  constructor(context: Partial<GeneratorContextInterface>) {
    Object.assign(this, context);
  }
}
