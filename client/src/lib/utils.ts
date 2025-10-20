import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStrapiURL() {
  return "http://localhost:1337";
  // return process.env.STRAPI_CLOUD_URL ?? "http://localhost:1337";
}