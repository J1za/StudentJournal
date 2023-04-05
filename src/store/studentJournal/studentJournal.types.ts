interface ISchoolboy {
    Id: number,
    FirstName?: string,
    SecondName?: string,
    LastName?: string
}
export interface IAllSchoolboy {
    Items: ISchoolboy[]
    Quantity: number
}
export interface ILessonsColumns {
    Items: {
        Id: number,
        Title: string
    }[],
    Quantity: number
}
export interface ILessonVisits {
    Items: {
        Id: number,
        Title: string,
        SchoolboyId: number,
        ColumnId: number,
    }[],
    Quantity: number
}