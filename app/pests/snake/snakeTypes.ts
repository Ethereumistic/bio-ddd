// types.ts
export interface SnakeInfo {
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
      desc: string;
    };
    
    export type SnakeType = 'ВОДЕН СМОК' | 'МЕДЯНКА' | 'ПЕПЕЛЯНКА' | 'ЖЪЛТОКАФЯВ СМОК' | 'УСОЙНИЦА';