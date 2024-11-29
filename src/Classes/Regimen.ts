export interface Regimen {
    Id? : number;
    regimenName: string;
    diseaseCategory: string;
    description?: string;
    emeticRisk: string;
    neutropenicRisk: string;
    indication: string;
    cost?: number;
    isAvailable: boolean;
  }


export interface RegimenDictionary {
    Disease: string;
    TotalRegimen: number;
 }