import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationService } from './location.service';
import { LocationEntity } from './models/location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LocationEntity])],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
