import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { NO_ERRORS_SCHEMA, Component, Input } from "@angular/core";
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { Hero } from "../hero";
import { By } from "@angular/platform-browser";

describe('HeroesComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROS;

    @Component({
        selector: 'app-hero',
        template: '<div></div>'
    })
    class FakeHeroComponent {
        @Input() hero: Hero;
        // @Output() delete = new EventEmitter();
    }
    beforeEach(() => {
        HEROS = [
            { id: 1, name: 'scsx', strength: 33 },
            { id: 2, name: 'wedf', strength: 44 }
        ]
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
            declarations: [HeroesComponent, FakeHeroComponent],
            // schemas:[NO_ERRORS_SCHEMA],
            providers: [{ provide: HeroService, useValue: mockHeroService }]
        })
        fixture = TestBed.createComponent(HeroesComponent);
    });
    it('should set heroes correctly from the service', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROS))
        // expect(true).toBe(true);
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(2);
    });

    it('should create one li for each hero', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROS))
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(2);
    })
})