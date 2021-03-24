export class ScoringBreakdown {
  private readonly scoringRecommendations: string[];

  private static recommendation(question: string): string {
    switch (question) {
      case 'hasTonsilSwelling':
        return 'Patient should have tonsil swelling (+1).';
      case 'patientIs6To14':
        return 'Patient should be 6 to 14 years old (+1).';
      case 'hasSwollenOrTenderLymphNodes':
        return 'Patient should have swollen or tender lymph nodes (+1).';
      case 'temperatureOver1004':
        return 'Patient temperature should be over 100.4°F (+1).';
      case 'doesNotHaveCough':
        return 'Patient Should not have cough (+1).';
      case 'hasChronicRespiratoryIllness':
        return 'Patient should have chronic respiratory illness (+1).';
      case 'hasDiabetes':
        return 'Patient should have diabetes (+1).';
      case 'patientHasHeartFailureOrCoronaryArteryDisease':
        return 'Patient should have heart failure or coronary artery disease (+1).';
      case 'immunoCompromised':
        return 'Patient should be immuno compromised (+1).';
      case 'hasSickleCell':
        return 'Patient should have sickle cell disease (+1).';
      case 'hasKidneyDisorder':
        return 'Patient should have history of kidney disorder (+1).';
      case 'hasCancer':
        return 'Patient should have cancer (+1).';
      case 'hasNotHadRecentFluShot':
        return 'Patient should not have recent flu shot (+1).';
      case 'patient65RrOlder':
        return 'Patient should be 65 years old (+1).';
    }
  }

  constructor(ruleResults: { [question: string]: boolean }) {
    this.scoringRecommendations = Object.keys(ruleResults).filter(question => ruleResults[question] === false).map(question => {
      return ScoringBreakdown.recommendation(question);
    });
  }
  public get recommendations(): string[] { return this.scoringRecommendations; }
}
