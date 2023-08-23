import { Controller, Query } from '@nestjs/common';
import { DirectionsService } from './directions.service';

@Controller('directions')
export class DirectionsController {

  constructor(private directionService: DirectionsService){}

  getDirections(
    @Query('originId') originId: string,
    @Query('directionId') directionId: string
    ){
      return this.directionService.getDirections(originId, directionId);
    };
}
