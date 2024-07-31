import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
}));

export const organization = {
  Status: 'არამეწარმე ფ/პ', 
  RegisteredSubject: 'ინდივიდუალური მეწარმე', 
  FullName: 'სატესტოk სატესტოk', 
  StartDate: '9/6/2019 4:53:19 PM', 
  VatPayer: 'კი', 
  Mortgage: 'ქონება დატვირთულია გირავნობის/იპოთეკის უფლებით', 
  Sequestration: 'ქონება დაყადაღებულია', 
  AdditionalStatus: 'ფიქსირებული გადასახადის გადამხდელი', 
};
