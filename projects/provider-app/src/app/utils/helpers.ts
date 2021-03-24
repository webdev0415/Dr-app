export class Helpers {
  static rowsStyler(criticality) {
    return criticality >= 7;
  }

  static hideContribution(illness) {
    const needHideFields = ['Defined Illnesses', 'Symptom Illnesses'];
    return needHideFields.includes(illness);
  }

  static isPlatformiOS(): boolean {
    return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  }

  static isPlatformiOS11Before11_3(): boolean {
    return !!navigator.userAgent && /OS 11_0|OS 11_1|OS 11_2/.test(navigator.userAgent); // iOS 11.3 and higher - ignore
  }

  static isPlatformAndroid(): boolean {
    return !!navigator.platform && /Android|Linux armv7l|Linux armv8l|Linux i686|Linux aarch64/.test(navigator.platform);
  }
}
