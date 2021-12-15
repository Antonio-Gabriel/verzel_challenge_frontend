import { ILessons } from "./ILessons";

export type IModules = {
  id: number;
  name: string;
  lessons: ILessons[];
};
