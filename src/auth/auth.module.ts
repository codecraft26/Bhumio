import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { jwtStrategy } from './jwt.strategy';


@Module({
  imports: [PassportModule,UserModule,JwtModule.register({
    secret:"key",
    signOptions:{
      expiresIn:"60s"
    }
  })],
  controllers: [],
  providers: [LocalStrategy,jwtStrategy,AuthService],
  exports:[AuthService,jwtStrategy]
})
export class AuthModule {}