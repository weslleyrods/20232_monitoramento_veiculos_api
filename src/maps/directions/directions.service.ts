import { Injectable } from '@nestjs/common';
import {DirectionsRequest, Client as GoogleMapsClient, TravelMode} from '@googlemaps/google-maps-services-js'
import {ConfigService} from '@nestjs/config'

@Injectable()
export class DirectionsService {

  constructor( 
    private googleMapsClient: GoogleMapsClient,
    private configService: ConfigService,
  ){}

  async getDirections(placeOriginId: string, placeDestinationId: string){
    const requestParams: DirectionsRequest['params'] = {
      origin: `place_id: ${placeOriginId}`,
      destination: `place_id: ${placeDestinationId}`,
      mode: TravelMode.driving,
      key: this.configService.get<string>('GOOGLE_MAPS_API_KEY')
    };

    const { data } = await this.googleMapsClient.directions({
      params: requestParams
    });
  }
}
