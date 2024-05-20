// mocks/server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';  // Assuming you have handlers defined in another file

export const server = setupServer(...handlers);
