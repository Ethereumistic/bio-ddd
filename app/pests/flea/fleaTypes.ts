// types.ts
export interface FleaInfo {
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
    
    export type FleaType = 'КОТЕШКА' | 'КУЧЕШКА' | 'ЧОВЕШКА' | 'ПЛЪХОВА' | 'ЗАЙЧА';