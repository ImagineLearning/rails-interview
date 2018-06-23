import { StudentsModule } from './students.module';

describe('StudentsModule', () => {
  let studentsModule: StudentsModule;

  beforeEach(() => {
    studentsModule = new StudentsModule();
  });

  it('should create an instance', () => {
    expect(studentsModule).toBeTruthy();
  });
});
