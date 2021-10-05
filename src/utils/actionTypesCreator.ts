

export const TYPES: string[] = ["REQUEST", "SUCCESS", "FAILURE"];
export interface IActionsTypes {
  [key: string]: { [key: string]: string}
}


export const createActionTypes = (aType: string[]): IActionsTypes => {
  const response: IActionsTypes = {};
  aType.forEach((aT) => {
    response[aT] = {};
    TYPES.forEach((t) => {
      response[aT][t] = `${aT}_${t}`;
    });
  });
  return response;
};


