import { IDataHumidite } from "./data-humidite";

export class Humidite implements IDataHumidite{
    id: number = 0;
    value: number = 20;
    date: Date = new Date('2025-05-15');

    static fromJson(humiditeJson : IDataHumidite): Humidite{
        return Object.assign(new Humidite(), humiditeJson);
    }

    toJson(): IDataHumidite{
        const humiditeJson: IDataHumidite = Object.assign({}, this);
        return humiditeJson;
    }
}