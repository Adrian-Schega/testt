import { PrismaClient } from '@prisma/client';
import { dev } from '$app/environment';

declare global {
  var __prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (dev) {
  // In development, use a global variable to preserve the value across module reloads
  if (!globalThis.__prisma) {
    globalThis.__prisma = new PrismaClient();
  }
  prisma = globalThis.__prisma;
} else {
  // In production, create a new instance
  prisma = new PrismaClient();
}

export { prisma };