export interface Task {
    id: number;
    title: string;
    description: string;
    dateAdded: [number,number,number]   //Day,Month,Year
    deadline?: [number,number,number]   //Same as above
    
}


