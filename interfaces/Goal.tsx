export interface Goal {
  name: string;
  description: string;
  isCompleted: boolean;
  isDaily: boolean;
}

export interface Goals {
  goals: Goal[];
}
