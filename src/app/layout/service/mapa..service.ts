import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class mapaService {
    coordinates: [number, number] | null = null;
}