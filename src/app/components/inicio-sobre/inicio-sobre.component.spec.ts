import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSobreComponent } from './inicio-sobre.component';

describe('InicioSobreComponent', () => {
  let component: InicioSobreComponent;
  let fixture: ComponentFixture<InicioSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioSobreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
