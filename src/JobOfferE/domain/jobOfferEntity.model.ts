export class jobOfferModel{
    id: number;
    title: string;
    deadline: Date ;
    specialRequeriments: string;
    duration: number;
    hourlyRate: number;
    status: number;

    constructor(id: number, title: string, deadline:Date, specialRequeriments: string, duration: number, hourlyRate: number,status: number){
        this.id = id;
        this.title = title;
        this.deadline = deadline;
        this.specialRequeriments = specialRequeriments;
        this.duration = duration;
        this.hourlyRate = hourlyRate;
        this.status =  status;
    }
 }

 