import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let HEROS;
    let mockHeroService;
    beforeEach(() => {
        // arrange
        HEROS = [
            { id: 1, name: 'dcsdv', strength: 55 },
            { id: 2, name: 'tyyy', strength: 22 },
            { id: 3, name: 'mnmb', strength: 35 }
        ]
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

        component = new HeroesComponent(mockHeroService);
    })
    describe('delete', () => {
        it('should remove indicated hero from hero list', ()=>{

            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = HEROS;
            // act
            component.delete(HEROS[2]);
            // assert
            expect(component.heroes.length).toBe(2);
        })

        it('should call deleteHero', ()=>{
            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = HEROS;
            component.delete(HEROS[2]);
            //assert
            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROS[2]);
        })
    })
})