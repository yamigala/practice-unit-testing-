import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('HeroComponent (shallow tests)', ()=>{
let fixture : ComponentFixture<HeroComponent>
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[HeroComponent],
            schemas:[NO_ERRORS_SCHEMA]
        });
       fixture = TestBed.createComponent(HeroComponent);
    });
    it('should have the correct hero', ()=>{
        fixture.componentInstance.hero = {id:1, name:'sxf', strength: 33};
        expect(fixture.componentInstance.hero.name).toEqual('sxf');
    });
    it('should render the hero name anchor tag ', ()=>{
        fixture.componentInstance.hero = {id:1, name:'sxf', strength: 33};
        fixture.detectChanges();
        // let deA = fixture.debugElement.query(By.css('a'))
        // expect(deA.nativeElement.textContent).toContain('sxf')
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('sxf');
    })
})