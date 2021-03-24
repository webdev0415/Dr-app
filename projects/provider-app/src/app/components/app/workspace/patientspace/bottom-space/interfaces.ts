
export interface StateBottomButtons {
  [key: string]: boolean;
}

export interface BottomButtonsControl {
  onClickBottomButton(nameButton: string): void;
  getShownBottomButtons(): StateBottomButtons;
  getDisabledBottomButtons?(): StateBottomButtons;
}
