import { Injectable, HttpException } from '@nestjs/common';
// import { LOCATIONS } from './location.mock';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { LocationEntity } from './models/location.entity';
import { LocationI } from './models/location.interface';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationEntity)
    private locationRepository: Repository<LocationEntity>,
  ) {}

  // private locations = LOCATIONS;
  public async getLocations(): Promise<LocationEntity[]> {
    return this.locationRepository.find();
  }

  public createLocations(newLocations: LocationI): Observable<LocationI> {
    return from(this.locationRepository.save(newLocations));
  }
  public async getLocationsById(id: number): Promise<any> {
    // const locationId = Number(id);
    // return new Promise((resolve) => {
    //   // const location = this.locationRepository.findOne(
    //   //   (location) => location.id === locationId,
    //   // );
    //   // if (!location) {
    //   //   throw new HttpException('Location not found', 404);
    //   // }
    //   // return resolve(location);
    // });
  }
  public async editLocationsById(
    id: number,
    propertyName: string,
    propertyValue: string,
  ): Promise<any> {
    // const locationId = Number(id);
    return new Promise((resolve) => {
      // const locationIndex = this.locations.findIndex(
      //   (location) => location.id === locationId,
      // );
      // if (locationIndex === -1) {
      //   throw new HttpException('Location not found', 404);
      // }
      // this.locations[locationIndex][propertyName] = propertyValue;
      // return resolve(this.locations);
    });
  }
  public async deleteLocationsById(id: number): Promise<void> {
    // const locationId = Number(id);
    // return new Promise((resolve) => {
    //   const locationIndex = this.locationRepository.findIndex(
    //     (location) => location.id === locationId,
    //   );
    //   if (locationIndex === -1) {
    //     throw new HttpException('Location not found', 404);
    //   }
    //   this.locations.splice(locationIndex, 1);

    //});
    await this.locationRepository.delete(id);
  }
  public async calculateDistance() {
    return {};
  }
}
