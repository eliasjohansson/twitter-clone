import { createError } from 'apollo-errors';

export const UnkownError = createError('UknownError', {
  message: 'An unknown error has occured',
});

export const UnauthorizedError = createError('UnauthorizedError', {
  message: 'You must login to do that',
});

export const AlreadyAuthenticatedError = createError('AlreadyAuthenticatedError', {
  message: 'You are already authenticated',
});

export const NotFoundError = createError('NotFoundError', {
  message: 'What you are looking for cannot be found.',
});
