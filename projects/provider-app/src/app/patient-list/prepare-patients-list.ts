import { PatientListEntity } from 'patient-list/interfaces/patient-list-entity.model';

const sortAlgorithm = (a: PatientListEntity, b: PatientListEntity): 0 | 1 | -1 => {
  let weightA = 0;
  let weightB = 0;

  switch (a.statusString) {
    case 'Registered':
    case 'Waiting': { weightA += 300; break; }
    case 'With Doctor': { weightA += 200; break; }
    case 'Complete': { weightA += 100; break; }
  }

  switch (b.statusString) {
    case 'Registered':
    case 'Waiting': { weightB += 300; break; }
    case 'With Doctor': { weightB += 200; break; }
    case 'Complete': { weightB += 100; break; }
  }

  if (a.kiosk_complete < b.kiosk_complete) {
    weightA -= 10;
    weightB += 10;
  } else if (a.kiosk_complete > b.kiosk_complete) {
    weightA += 10;
    weightB -= 10;
  }

  if (weightA > weightB) {
    return -1;
  }

  if (weightA < weightB) {
    return 1;
  }

  return 0;
};

export { sortAlgorithm };
