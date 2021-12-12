import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Photo } from './interfaces/photo';

import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';
import { Component, ViewChild } from '@angular/core';

describe(PhotoBoardComponent.name + 'Test', () => {
  let component: PhotoBoardTestComponent;
  let fixture: ComponentFixture<PhotoBoardTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoBoardTestComponent],
      imports: [PhotoBoardModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardTestComponent);
    component = fixture.componentInstance;
  });

  it(`Should display rows and columns when (@Input photos) has value by template test`, () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();
    expect(component.board.rows.length).withContext('Number of rows').toBe(2);
    expect(component.board.rows[0].length).withContext('Number of columns from the first row').toBe(4);
    expect(component.board.rows[1].length).withContext('Number of columns from the second row').toBe(2);
  });

});

function buildPhotoList(): Photo[] {
  const photos: Photo[] = [];
  for (let i = 0; i < 6; i ++) {
    photos.push({
      id: i + 1,
      url: '',
      description: ''
    });
  }

  return photos;
}

@Component({
  template: `
  <app-photo-board [photos]="photos"></app-photo-board>
  `
})
class PhotoBoardTestComponent {
  @ViewChild(PhotoBoardComponent) board: PhotoBoardComponent;
  public photos: Photo[] = [];
}
