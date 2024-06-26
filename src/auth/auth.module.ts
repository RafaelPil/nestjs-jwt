import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';
import { AtStrategy, RtStrategy } from './strategies';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, AtStrategy, RtStrategy]
})
export class AuthModule {}
