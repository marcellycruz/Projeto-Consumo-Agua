import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ConsumoAgua } from './consumo_agua.model';
import { Model } from 'mongoose';

@Injectable()
export class ConsumoAguaService {
    constructor(
        @InjectModel('ConsumoAgua') private readonly consumoAguaModel: Model<ConsumoAgua>,
    ){ }

    //registro do consumo
    async createConsumoAgua(consumoagua: ConsumoAgua){
        const consumo = new this.consumoAguaModel({
            usuarioId: consumoagua.usuarioId,
            consumo: consumoagua.consumo,
            data: consumoagua.data
        });
        const result = await consumo.save();
        return result;
    }

    //histórico de consumo
    async getHistorico(usuarioId: string, dataInicial: string, dataFinal: string): Promise <ConsumoAgua[]>{
        const inicio = new Date(dataInicial);
        const fim = new Date(dataFinal);
        return this.consumoAguaModel.find({usuarioId, data: {$gte: inicio, $lte: fim }, }).exec();
    }

    //alerta de consumo elevado
    async Alerta(usuarioId: string): Promise<String> {
        const registroUsuario = await this.consumoAguaModel
        .find({ usuarioId })
        .sort({ data: -1 }) //ordena por data decrescente
        .limit(2) //limita dois registros do consumo do usuário
        .exec();
        
        if(registroUsuario.length < 2){
            return 'Você precisa ter pelo menos 2 meses registrados para efetuar a comparação entre o consumo atual e o anterior.'
        }

        const [consumoAtual, consumoAnterior] = registroUsuario;

        if(consumoAtual && consumoAnterior){
            if(consumoAtual.consumo > consumoAnterior.consumo){
                return 'Seu consumo está acima em relação ao último mês cadastrado.'
            }
            else{
                return 'O consumo está dentro da normalidade.'
            }
        }
        
    }
}
