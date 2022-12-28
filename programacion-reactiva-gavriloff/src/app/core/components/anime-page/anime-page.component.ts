import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, mergeMap } from 'rxjs';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-page',
  templateUrl: './anime-page.component.html',
  styleUrls: ['./anime-page.component.scss']
})
export class AnimePageComponent {
  public animes: any[] = []
  public searchControl = new FormControl('')
  public form = new FormGroup({
    search: this.searchControl,
  });
  constructor(private animeService: AnimeService) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000),
        mergeMap((value) => this.animeService.searchAnime(value!))
      ).subscribe((results) => this.animes = results)
  }
}
