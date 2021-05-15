import { Component, Input, OnInit, Output } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from 'events';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss']
})

export class LikeWidgetComponent implements OnInit {
  @Output() public liked = new EventEmitter();
  @Input() public likes = 0;
  @Input() public id = null;

  public fonts = { faThumbsUp };

  constructor(private readonly uniqueIdService: UniqueIdService) { }

  ngOnInit(): void {
    if (!this.id) {
      this.id = this.uniqueIdService.generateUnitIdWithPrefix('like-widget');
    }
  }

}
