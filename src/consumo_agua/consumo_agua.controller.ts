import { Body, Controller, Get, Post, Param, Query } from '@nestjs/common';
import { ConsumoAgua } from './consumo_agua.model';
import { ConsumoAguaService } from './consumo_agua.service';

@Controller('consumoagua')
export class ConsumoAguaController {
    constructor(private readonly consumoAguaService: ConsumoAguaService){}

    @Get('historico/:usuarioId')
    async consultarHistorico(
        @Param('usuarioId') usuarioId: string,
        @Query('dataInicial') dataInicial: string,
        @Query('dataFinal') dataFinal: string,
    ) {
        
        return this.consumoAguaService.getHistorico(usuarioId, dataInicial, dataFinal);
    }

    @Get('alerta/:usuarioId')
        async consultarAlerta(@Param('usuarioId') usuarioId: string) {
        return this.consumoAguaService.Alerta(usuarioId);
    }

    @Post()
    async registrarConsumo(@Body() consumo: ConsumoAgua) {
        return this.consumoAguaService.createConsumoAgua(consumo);
    }
}
