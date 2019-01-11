import { HttpClient } from "@angular/common/http";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Hero } from "./hero";

describe('HeroService (io)',()=>{
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let heroesUrl;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController)
    });
    
    // it('should test http get req',()=>{
    //     const hero: Hero = {id:1, name: 'abc', strength: 11};
    //     httpClient.getHero<Hero>(heroesUrl).subscribe(data=>
    //         expect(data).toEqual(hero)
    //     );
    //     const req = httpTestingController.expectOne('api/heroes/1');
    //     expect(req.request.method).toEqual('GET');
    //     req.flush(hero);
    //     httpTestingController.verify();
    // })
})