import {expect, it} from '@jest/globals';
import peliculaDB from '../src/api/peliculaDB';
import { MovieDBResponse } from '../src/interfaces/peliculaInterfaces';

it('Carga muchas peliculas actuales....', async ()=>{

    const peliculas = await peliculaDB.get<MovieDBResponse>('/now_playing');

    console.log(peliculas.data.results);

    expect(peliculas.data.results.length).toBeGreaterThan(0);
})