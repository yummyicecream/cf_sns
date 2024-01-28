import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [PostsModule, UserModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
