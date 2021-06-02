/* eslint-disable prettier/prettier */
import { Body } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from './location.controller';
import { LocationDto } from './location.dto';
import { LocationService } from './location.service';

describe('LocationController', () => {
  let controller: LocationController;

  const mockLocationService = {};

  const newLocations = {
    name: 'Edo',
    description: 'Center of Commerce',
    website: 'http:www.Akius2.com',
    phone: '08167334417',
    contactPerson: 'Goody Urom',
    coordinates: 5,
    // "id": 4,
    // "createdAt": "2021-06-02T21:15:34.861Z"
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationController],
      providers: [LocationService],
    })
      .overrideProvider(LocationService)
      .useValue(mockLocationService)
      .compile();

    controller = module.get<LocationController>(LocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a location', () => {
    return expect(controller.createLocations(newLocations)).toEqual({
      name: 'Edo',
      description: 'Center of Commerce',
      website: 'http:www.Akius2.com',
      phone: '08167334417',
      contactPerson: 'Goody Urom',
      coordinates: 5,
      id: 4,
      createdAt: '2021-06-02T21:15:34.861Z',
    });
  });
});
