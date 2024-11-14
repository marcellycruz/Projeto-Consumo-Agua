import * as mongoose from 'mongoose';

export const ConsumoAguaSchema = new mongoose.Schema({
    usuarioId: {type: String, required: true},
    consumo: {type: Number, required: true},
    data: {type: Date, required: true},
})

export interface ConsumoAgua extends mongoose.Document{
    usuarioId: String;
    consumo: number;
    data: Date;
}