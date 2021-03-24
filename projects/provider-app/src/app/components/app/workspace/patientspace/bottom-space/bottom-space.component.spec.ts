import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { BottomSpaceComponent } from './bottom-space.component';
import { BottomButtonsControl, StateBottomButtons } from './interfaces';


class IncludedBottomButtonsComponent implements BottomButtonsControl {
  constructor() {}

  getDisabledBottomButtons(): StateBottomButtons {
    return {
        button1: true,
        button2: false
    };
  }

  getShownBottomButtons(): StateBottomButtons {
    return {
      button1: true,
      button2: false
    };
  }

  onClickBottomButton(nameButton: string): void {
    if (!['button1', 'button2'].includes(nameButton)) {
      throw new Error('Button name error');
    }
  }

}


describe('BottomSpaceComponent', generateSpecs({
    componentType: BottomSpaceComponent,
    declarations: [
      BottomSpaceComponent
    ],
    noErrorsSchema: true
  },
  (context: TestContext<BottomSpaceComponent>) => {
    let includedBottomButtonsComponentInstance: IncludedBottomButtonsComponent;

    beforeEach(() => {
      includedBottomButtonsComponentInstance = new IncludedBottomButtonsComponent();
      context.component.instanceComponent = Object.create(includedBottomButtonsComponentInstance);
    });

    it('should create', () => {
      expect(context.component).toBeTruthy();
    });

    it('should change instanceBottomButtons component and update isShow state', () => {
      expect(context.component.switchComponent(IncludedBottomButtonsComponent)).toBeTruthy();
    });

    it('should is show or hidden bottom buttons panel', () => {
      expect(context.component.isShow).toBeTruthy();

      const returnValueShownState: StateBottomButtons = {
        button1: false, button2: false
      };

      includedBottomButtonsComponentInstance.getShownBottomButtons = () => {
        return returnValueShownState;
      };

      context.component.setShowState();

      expect(context.component.isShow).toBeFalsy();
    });

    it('should is show bottom button name', () => {
      const isShowButton = context.component.isShowButton('button1');
      expect(isShowButton).toBeTruthy();
    });

    it('should is disabled bottom button name', () => {
      const isDisabledButton = context.component.isDisabledButton('button1');
      expect(isDisabledButton).toBeTruthy();
    });

    it('should check clickable button name', () => {
      expect(context.component.clickBottomButton.bind(context.component, 'button1')).not.toThrow('Button name error');
      expect(context.component.clickBottomButton.bind(context.component, 'bla')).toThrowError(Error);
    });
  }
));
