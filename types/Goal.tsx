export type Goal = {
  name: string;
  description: string;
  isCompleted: boolean;
  isDaily: boolean;
};

export type Goals = {
  goals: Goal[];
};
