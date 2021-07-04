import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BooksModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
