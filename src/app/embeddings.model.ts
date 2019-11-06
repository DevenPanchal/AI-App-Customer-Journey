import { D0embed } from './d0embed';
import { D1embed } from './d1embed';
import { D2embed } from './d2embed';
import { D3embed } from './d3embed';
import { D4embed } from './d4embed';
import { D5embed } from './d5embed';
import { D6embed } from './d6embed';
import { D7embed } from './d7embed';

import { from } from 'rxjs';

export class Embeddings {
    d0?: D0embed[];
    d1?: D1embed[];
    d2?: D2embed[];
    d3?: D3embed[];
    d4?: D4embed[];
    d5?: D5embed[];
    d6?: D6embed[];
    d7?: D7embed[];


    constructor() { 
        this.d0 = [];
        this.d1 = [];
        this.d2 = [];
        this.d3 = [];
        this.d4 = [];
        this.d5 = [];
        this.d6 = [];
        this.d7 = [];
    }

}