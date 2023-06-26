import { states } from './states';

export interface Task {
  id: number;
  state: states.active | states.complete;
  text: string;
}
