import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosBannerComponent } from './servicos-banner.component';

describe('ServicosBannerComponent', () => {
  let component: ServicosBannerComponent;
  let fixture: ComponentFixture<ServicosBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicosBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
