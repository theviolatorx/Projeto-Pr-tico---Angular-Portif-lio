interface ExperienceSummary {
    strong: string;
    p: string;
  }
  
export interface IExperience {
    summary: ExperienceSummary;
    text: string;
  }

//   Poderia ser feito assim:
//   export interface IExperience{
//     sumary: {
//         strong: string,
//         p: string,
//     },
//     text: string,
//   }