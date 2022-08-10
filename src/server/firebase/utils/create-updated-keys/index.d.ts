
/**
 * Create object with simple fields for Firestore
 * { person: { name: `Slava` } } => { 'person.name': `Slava`}
 */
export function createUpdatedKeys(updated: object): object;
