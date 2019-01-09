import { TestBed } from "@angular/core/testing";
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('HeroService', () => {
    let mockMessageService;
    let httpTestingController: HttpTestingController;
    let service: HeroService

    beforeEach(() => {
        mockMessageService = jasmine.createSpyObj(['add']);
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HeroService,
                { provide: MessageService, useValue: mockMessageService }
            ]
        });
        httpTestingController = TestBed.get(HttpTestingController);
        service = TestBed.get(HeroService);
        // let msgSvc = TestBed.get(MessageService);
    });
    describe('getHero', () => {
        it('should call get with correct URL', () => {

            service.getHero(2).subscribe();

            const req = httpTestingController.expectOne('api/heroes/2');
            req.flush({ id: 2, name: 'sffaw', strength: 10});
            httpTestingController.verify();
        })
    })
})