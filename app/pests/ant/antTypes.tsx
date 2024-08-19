// types.ts
export interface AntInfo {
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
    
    export type AntType = 'ЧЕРНА ГРАДИНСКА' | 'ФАРАОНОВА' | 'ЧЕРВЕНА ГОРСКА' | 'ЖЪЛТА' | 'КАМЕННА' | 'КАДИФЕНА';