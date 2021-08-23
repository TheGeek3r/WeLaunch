export class GenererRepasCalendrier {
    id: number;
    date: Date;
    midi: boolean;
    soir: boolean;
    weekendFerie: boolean;
    newDate: boolean;

    constructor(id: number, date: Date, midi: boolean, soir: boolean, weekendFerie: boolean, newDate: boolean) {
        this.id = id;
        this.date = date;
        this.midi = midi;
        this.soir = soir;
        this.weekendFerie = weekendFerie;
        this.newDate = newDate;
    }
}