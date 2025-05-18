import { IDataTemperature } from "./data-temperature";

export class Temperature implements IDataTemperature{
    id: number = 0;
    value: number = 20;
    date: Date = new Date('2025-05-15');

    static fromJson(temperatureJson : IDataTemperature): Temperature{
        return Object.assign(new Temperature(), temperatureJson);
    }

    toJson(): IDataTemperature{
        const temperatureJson: IDataTemperature = Object.assign({}, this);
        return temperatureJson;
    }
}