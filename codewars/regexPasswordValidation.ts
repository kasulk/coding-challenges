// at least 6 characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric chars (i.e. no '_')

export const REGEXP = /(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(^[^\W_]*$)/;
