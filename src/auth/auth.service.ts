import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  //registerWithEmail
  //loginWithEmail
  //loginUser
  //signToken
  //authenticateWithEmailAndPassword

  signToken(user: Pick<UsersModel, 'email' | 'id'>, isRefreshToken: boolean) {
    const payload = {
      email: user.email,
      sub: user.id,
      type: isRefreshToken ? 'refresh' : 'access',
    };
    return this.jwtService.sign(payload, {
      secret: JWT_SECRET,
      expiresIn: isRefreshToken ? 3600 : 300,
    });
  }

  async loginUser(user: UsersModel) {
    return {
      accessToken: this.signToken(user, false),
      refreshToken: this.signToken(user, true),
    };
  }

  async authenticateWithEmailAndPassword(email: string, password: number) {
    const existingUser = await this.userService.getUserByEmail(user.email)
    if(!existingUser){
        throw new UnauthorizedException('없어')
    }
    await passOk = bcrypt.compare(user.password, existingUser.password)
    if(!passOk) {
        throw new UnauthorizedException('비번틀림')

    }
  }
}
