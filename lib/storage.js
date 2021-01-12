import { Storage } from '@stacks/storage';
import { v4 as uuid } from 'uuid';
import { userSession } from './auth';

// inits the storage container
const storage = new Storage({ userSession });
const FILENAME_PREFIX = 'ehne-Complete/';

// sets up how tasks should look
export const defaultTasks = {
  'p-1': {
    completed: false,
    timeEstimate: 0,
    title: '',
    uuid: uuid(),
  },
  'p-2': {
    completed: false,
    timeEstimate: 0,
    title: '',
    uuid: uuid(),
  },
  'p-3': {
    completed: false,
    timeEstimate: 0,
    title: '',
    uuid: uuid(),
  },
  'p-4': {
    completed: false,
    timeEstimate: 0,
    title: '',
    uuid: uuid(),
  },
  'p-5': {
    completed: false,
    timeEstimate: 0,
    title: '',
    uuid: uuid(),
  },
  'p-6': {
    completed: false,
    timeEstimate: 0,
    title: '',
    uuid: uuid(),
  },
};

export const saveTasks = async (US, tasks, date) => {
  await storage.putFile(`${FILENAME_PREFIX}${date}.json`, JSON.stringify(tasks), {
    encrypt: true,
    dangerouslyIgnoreEtag: true,
  });
};

export const getTasks = async (US, date) => {
  try {
    const tasksJSON = await storage.getFile(`${FILENAME_PREFIX}${date}.json`, {
      decrypt: true,
      username: undefined,
    });
    const json = JSON.parse(tasksJSON);
    return json;
  } catch (error) {
    return defaultTasks;
  }
};
