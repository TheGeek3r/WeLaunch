export class AlgoRepas {
    id: number;
    date: Date;
    moment: string;
    repas: [string];
    nbPersonnes: number;
    isGroupBy: boolean;

    constructor(id: number, date: Date, moment: string, repas: [string], nbPersonnes: number, isGroupBy: boolean) {
        this.id = id;
        this.date = date;
        this.moment = moment;
        this.repas = repas;
        this.nbPersonnes = nbPersonnes;
        this.isGroupBy = this.isGroupBy;
    }
}
