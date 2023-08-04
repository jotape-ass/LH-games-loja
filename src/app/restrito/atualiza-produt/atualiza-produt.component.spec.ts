import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaProdutComponent } from './atualiza-produt.component';

describe('AtualizaProdutComponent', () => {
  let component: AtualizaProdutComponent;
  let fixture: ComponentFixture<AtualizaProdutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaProdutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizaProdutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
