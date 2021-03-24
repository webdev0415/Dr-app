export function ObservableProperty(propertyName: string = null) {
  return function(
    target: any,
    subjectName: string,
  ) {
    let currentValue: any = null;

    const newSubjectName = `__${ subjectName }__`;

    Object.defineProperty(target, subjectName, {
      enumerable: true,
      configurable: true,
      set(value) {
        if (value.share) {
          this[newSubjectName] = value.share();
        } else {
          this[newSubjectName] = value;
        }


        if (this[newSubjectName].subscribe) {
          this[newSubjectName].subscribe(
            (propertyValue) => { currentValue = propertyValue; },
          );
        }
      },

      get() {
        return this[newSubjectName];
      },
    });

    Object.defineProperty(target, propertyName, {
      enumerable: true,
      configurable: false,

      set(value) {
        currentValue = value;

        this[subjectName].next(value);
      },

      get() {
        const isBehaviorSubject = !!this[subjectName].getValue;

        if (isBehaviorSubject) {
          return this[subjectName].getValue();
        } else {
          return currentValue;
        }
      },
    });
  };
}

