/**
 * Mocking client-server processing
 */

import _plans from './mocks/plans.json';
import _sessions from './mocks/sessions.json';
// import _exercises from './exercises.json';

const TIMEOUT = 100;

export default {
    getAllPlans: (cb, timeout) => setTimeout(() => cb(_plans), timeout || TIMEOUT),
    getAllSessions: (cb, timeout) => setTimeout(() => cb(_sessions), timeout || TIMEOUT)
}