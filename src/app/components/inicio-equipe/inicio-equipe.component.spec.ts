import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioEquipeComponent } from './inicio-equipe.component';

describe('InicioEquipeComponent', () => {
  let component: InicioEquipeComponent;
  let fixture: ComponentFixture<InicioEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioEquipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
