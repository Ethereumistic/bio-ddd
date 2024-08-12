// types.ts
export interface MouseInfo {
  latinName: string;
  imageUrl: string;
    appearance: {
      length: string;
      height: string;
      weight: string;
      color: string;
    };
    dangers: string[];
    behavior: string[];
    reproduction: {
      offspring: string;
      gestation: string;
    };
    signs: string[];
  };
  
  export type MouseType = 'ДОМАШНА МИШКА' | 'ЧЕРЕН ПЛЪХ' | 'СИВ ПЛЪХ' | 'ПОЛЕВКА';