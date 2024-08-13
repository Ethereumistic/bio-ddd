// types.ts
export interface MosquitoInfo {
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
    
    export type MosquitoType = 'ТИГРОВ КОМАР' | 'КОМАР' | 'ТРЕСКОВ КОМАР' | 'АНОФЕЛЕС' | 'СИВ КОМАР';