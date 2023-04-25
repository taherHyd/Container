import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageLocationContainerViewComponent } from './storage-location-container-view.component';

describe('StorageLocationContainerViewComponent', () => {
  let component: StorageLocationContainerViewComponent;
  let fixture: ComponentFixture<StorageLocationContainerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageLocationContainerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageLocationContainerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
