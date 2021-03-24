import { GroupedSymptomsComponent } from './grouped-symptoms.component';
import { generateSpecs, TestContext } from '@pa-tests/test-context';
import { NavigationTestModule } from '@pa-tests/navigation-test.module';
import { defaultGroupedSymptom } from '../symptoms.interface';

describe('GroupedSymptomsComponent', generateSpecs({
    componentType: GroupedSymptomsComponent,
    imports: [
      NavigationTestModule
    ],
    declarations: [
      GroupedSymptomsComponent
    ],
    beforeEachDetectChanges: false
  }, (context: TestContext<GroupedSymptomsComponent>) => {
  let component: GroupedSymptomsComponent;

  beforeEach(() => {
    component = context.component;
    component.symptom = { groupedSymptom: defaultGroupedSymptom };
    context.detectChanges();
  });

  it('should create', () => {
    expect(context.component).toBeTruthy();
  });
}));
