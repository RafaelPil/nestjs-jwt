import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/local/signup')
  @HttpCode(HttpStatus.CREATED)
  signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signupLocal(dto);
  }

  @Post('/local/signin')
  @HttpCode(HttpStatus.OK)
  signinpLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signinpLocal(dto);
  }

  @Post('/logout')
  @HttpCode(HttpStatus.OK)
  logout() {
    // return this.authService.logout();
  }

  @Post('/refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens() {
    // return this.authService.refreshTokens();
  }
}
