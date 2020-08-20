export interface TodoInt {
  id: number;
  completed: boolean;
  text: string;
}

export type TodoState = TodoInt[];
