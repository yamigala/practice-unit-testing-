import { TestBed } from "@angular/core/testing";
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { Hero } from "./hero";
import { HttpClient, HttpHeaders } from "@angular/common/http";

describe('HeroService', () => {
    let mockMessageService;
    let httpTestingController: HttpTestingController;
    let heroService: HeroService;
    let httpClient: HttpClient;

    beforeEach(() => {
        mockMessageService = jasmine.createSpyObj(['add']);
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HeroService,
                { provide: MessageService, useValue: mockMessageService }
            ]
        });
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
        heroService = TestBed.get(HeroService);
    });

    afterEach(()=>{
        httpTestingController.verify();
    })

    describe('#getHeroes', () => {
        let expectedHeroes: Hero[];
        beforeEach(()=>{
            heroService = TestBed.get(HeroService)
            expectedHeroes = [
                { id: 1, name: 'abc', strength: 20 },
                { id: 2, name: 'sffaw', strength: 10 }
            ] as Hero[];
        });

        it('should return expected heroes when getHeroes called once',()=>{
            heroService.getHeroes().subscribe(
                heroes => expect(heroes).toEqual(expectedHeroes)
            );
            const req = httpTestingController.expectOne(heroService.heroesUrl);
            expect(req.request.method).toEqual('GET');
            req.flush(expectedHeroes);
        })

    })

    describe('#getHero', () => {
        let expectedHeroes: Hero[];
        let testHero: Hero;
        beforeEach(()=>{
            heroService = TestBed.get(HeroService)
            expectedHeroes = [
                { id: 1, name: 'abc', strength: 20 },
                { id: 2, name: 'sffaw', strength: 10 }
            ] as Hero[];
        });

        it('should call get with correct URL', () => {

            heroService.getHero(2).subscribe(
                // heroes=> expect(heroes).toEqual(expectedHeroes[1])
            );

            const req = httpTestingController.expectOne('api/heroes/2');
            expect(req.request.method).toEqual('GET');
            req.flush(expectedHeroes);
        })
        
        // it('should test httpOptions with matching headers', ()=>{
        //     const testHero: Hero = expectedHeroes[1];
        //     httpClient.get<Hero>(heroService.heroesUrl,{
        //         headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        //     }).subscribe(heroes=> expect(heroes).toEqual(testHero));
        //     const req = httpTestingController.expectOne(
        //         req=> req.headers.has('Content-Type')
        //     );
        //     req.flush(testHero);
        // })
    })
})