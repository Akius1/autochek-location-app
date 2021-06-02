import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { LocationService } from './location.service';
import { LocationI } from './models/location.interface';

@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Get()
  getLocations(): Observable<LocationI[]> {
    return this.locationService.getLocations();
  }
  @Post()
  createLocations(@Body() newLocation: LocationI): Observable<LocationI> {
    return this.locationService.createLocations(newLocation);
  }
  @Get(':id')
  getLocationsById(@Param('id') id: number): Observable<LocationI> {
    return this.locationService.getLocationsById(id);
  }
  @Put(':id')
  editLocationsById(
    @Param('id') id: number,
    @Body() updatedLocation: LocationI,
  ): Observable<UpdateResult> {
    return this.locationService.editLocationsById(id, updatedLocation);
  }
  @Delete(':id')
  deleteLocationsById(@Param('id') id: number): Observable<DeleteResult> {
    return this.locationService.deleteLocationsById(id);
  }

  @Get('/:id')
  calculateLocation(@Param() id: number, @Query() query): any {
    const fromLoccation = query.name;
    const toLocation = query.name;
    return this.locationService.calculateDistance(
      id,
      fromLoccation,
      toLocation,
    );
  }
}
