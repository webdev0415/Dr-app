export interface QuestionnairesHeaderData<T> {
  source: T;
  value: (args: Array<keyof T>, delimiter: string) => string;
  fields: { header: string; args: Array<keyof T>; delimiter?: string; } [];
}
