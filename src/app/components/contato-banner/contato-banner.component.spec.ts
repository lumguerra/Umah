import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoBannerComponent } from './contato-banner.component';

describe('ContatoBannerComponent', () => {
  let component: ContatoBannerComponent;
  let fixture: ComponentFixture<ContatoBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
