import { Injectable, HttpException } from '@nestjs/common';
// import { LOCATIONS } from './location.mock';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { LocationEntity } from './models/location.entity';
import { LocationI } from './models/location.interface';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationEntity)
    private locationRepository: Repository<LocationEntity>,
  ) {}

  // private locations = LOCATIONS;
  public getLocations(): Observable<LocationI[]> {
    return from(this.locationRepository.find());
  }

  public createLocations(newLocations: LocationI): Observable<LocationI> {
    return from(this.locationRepository.save(newLocations));
  }
  public getLocationsById(id: number): Observable<LocationI> {
    return from(this.locationRepository.findOne(id));
  }
  public editLocationsById(
    id: number,
    updatedLocation: LocationI,
  ): Observable<UpdateResult> {
    return from(this.locationRepository.update(id, updatedLocation));
  }
  public deleteLocationsById(id: number): Observable<DeleteResult> {
    return from(this.locationRepository.delete(id));
  }
  public async calculateDistance() {
    return {};
  }
}
