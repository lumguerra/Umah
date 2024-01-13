import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioMapaComponent } from './inicio-mapa.component';

describe('InicioMapaComponent', () => {
  let component: InicioMapaComponent;
  let fixture: ComponentFixture<InicioMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioMapaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
