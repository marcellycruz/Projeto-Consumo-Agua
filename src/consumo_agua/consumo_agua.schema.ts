import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConsumoAguaDocument = ConsumoAgua & Document;

@Schema()
export class ConsumoAgua {
  @Prop({ required: true })
  usuarioId: string;

  @Prop({ required: true })
  consumo: number;

  @Prop({required: true})
  data: Date;
}

export const ConsumoAguaSchema = SchemaFactory.createForClass(ConsumoAgua);