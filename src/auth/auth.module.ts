import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/admin/user.module';
import { PassportModule } from '@nestjs/passport';
import { jwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { forwardRef } from '@nestjs/common';

@Module({
  imports: [PassportModule,JwtModule.register({
    secret:"key",
    signOptions:{
      expiresIn:"60s"
    }
  }), forwardRef(() => UserModule)],
  controllers: [],
  providers: [LocalStrategy,jwtStrategy,AuthService],
  exports:[AuthService,jwtStrategy]
})
export class AuthModule {}

