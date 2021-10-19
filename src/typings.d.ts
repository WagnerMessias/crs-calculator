export declare type Ages =  {
    [key: string] : AgesItem
}

type AgesItem =  {
    [key: string] : number
}

export declare type EducationLevels = {
    withSpouse:  EducationLevelItem[],
    withoutSpouse:  EducationLevelItem[],
}

declare type EducationLevelItem = {
    level: string,
     point: number
}

export declare type LevelsCLB =  {
    [key: string] : CLBLevel
}

type CLBLevel =  {
    [key: string] : number
}

// export declare type EducationLevelItem = {
//     [key: string]: string | number,

// }

