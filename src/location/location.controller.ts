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
import { LocationService } from './location.service';
// import { LocationDto } from './location.dto';
import { LocationI } from './models/location.interface';

@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Get()
  async getLocations() {
    return this.locationService.getLocations();
  }
  @Post()
  createLocations(@Body() newLocation: LocationI): Observable<LocationI> {
    return this.locationService.createLocations(newLocation);
  }
  @Get(':id')
  async getLocationsById(@Param('id') id: number) {
    return await this.locationService.getLocationsById(id);
  }
  @Put(':id')
  async editLocationsById(@Param('id') id: number, @Query() query) {
    const propertyName = query.property_name;
    const propertyValue = query.property_value;
    return await this.locationService.editLocationsById(
      id,
      propertyName,
      propertyValue,
    );
  }
  @Delete(':id')
  async deleteLocationsById(@Param('id') id: number) {
    return await this.locationService.deleteLocationsById(id);
  }
}
